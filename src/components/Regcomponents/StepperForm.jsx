import React, { useState, useEffect, useRef } from 'react';
import api from '../../utils/api';
import { debounce } from 'lodash';
import { Steps, Button, Form, Input, Select, message } from 'antd';
import { stateDistrictCodeMap } from '../../data/stateDistrictMap.jsx';

const { Step } = Steps;
const { TextArea } = Input;

const validEmailDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@teckybot.com'];
const isAllCaps = (text) => text === text?.toUpperCase();
const isValidEmail = (email) => validEmailDomains.some((domain) => email.endsWith(domain));

const STORAGE_KEY = 'schoolRegistrationData';
const STEP_KEY = 'currentStep';

const StepperForm = () => {
    const [form] = Form.useForm();
    const debouncedValidate = useRef(debounce(async (field) => {
        try {
            await form.validateFields([field]);
        } catch (err) {
            // ignore
        }
    }, 500)).current;
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [emailDuplicate, setEmailDuplicate] = useState({ schoolEmail: false, coordinatorEmail: false });
    const [selectedState, setSelectedState] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);


    // Load saved data on component mount
    useEffect(() => {
        const loadSavedData = () => {
            try {
                const savedStep = sessionStorage.getItem(STEP_KEY);
                const savedData = sessionStorage.getItem(STORAGE_KEY);

                if (savedStep) {
                    setCurrentStep(parseInt(savedStep, 10));
                }

                if (savedData) {
                    const parsedData = JSON.parse(savedData);
                    setFormData(parsedData);

                    // Use setTimeout to ensure form is ready before setting values
                    setTimeout(() => {
                        form.setFieldsValue(parsedData);
                    }, 0);

                    if (parsedData.state) {
                        setSelectedState(parsedData.state);
                    }

                    // 🔐 Auto-enable Pay button if all data is valid and on last step
                    if (parseInt(savedStep, 10) === steps.length - 1) {
                        // wait a tick to ensure form fields are set before checking validity
                        setTimeout(async () => {
                            try {
                                await form.validateFields();
                                setIsFormValid(true);
                            } catch {
                                setIsFormValid(false);
                            }
                        }, 100);
                    }
                }
            } catch (error) {
                console.error('Error loading saved data:', error);
                message.error('Failed to load saved form data');
            }
        };

        loadSavedData();

        // Add resize listener to handle viewport changes
        const handleResize = () => {
            // Re-apply form values when viewport changes to ensure they're visible
            const savedData = sessionStorage.getItem(STORAGE_KEY);
            if (savedData) {
                try {
                    const parsedData = JSON.parse(savedData);
                    setTimeout(() => {
                        form.setFieldsValue(parsedData);
                    }, 100);
                } catch (error) {
                    console.error('Error reapplying form data on resize:', error);
                }
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [form]);

    const saveFormData = (values) => {
        try {
            const newData = { ...formData, ...values };
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
            sessionStorage.setItem(STEP_KEY, currentStep.toString());
            setFormData(newData);
        } catch (error) {
            console.error('Error saving form data:', error);
            message.error('Failed to save form data');
        }
    };

    // Function to restore form data from sessionStorage
    const restoreFormData = () => {
        try {
            const savedData = sessionStorage.getItem(STORAGE_KEY);
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                console.log('Restoring form data:', parsedData);
                form.setFieldsValue(parsedData);
                setFormData(parsedData);
                message.success('Form data restored successfully!');
                return true;
            } else {
                message.info('No saved form data found');
            }
        } catch (error) {
            console.error('Error restoring form data:', error);
            message.error('Failed to restore form data');
        }
        return false;
    };


    // const checkDuplicateEmails = async () => {
    //     const schoolEmail = form.getFieldValue('schoolEmail');
    //     const coordinatorEmail = form.getFieldValue('coordinatorEmail');

    //     if (!schoolEmail && !coordinatorEmail) return true;

    //     try {
    //         const response = await api.post('/school/check-email', {
    //             schoolEmail: schoolEmail?.trim(),
    //             coordinatorEmail: coordinatorEmail?.trim(),
    //         });

    //         // if (response.data.isDuplicate) {
    //         //     setEmailDuplicate({ schoolEmail: true, coordinatorEmail: true });
    //         //     message.error('Email already exists');
    //         //     return false;
    //         // }

    //         const { schoolEmailDuplicate, coordinatorEmailDuplicate } = response.data;

    //         if (schoolEmailDuplicate || coordinatorEmailDuplicate) {
    //             setEmailDuplicate({ schoolEmail: schoolEmailDuplicate, coordinatorEmail: coordinatorEmailDuplicate });

    //             if (schoolEmailDuplicate && coordinatorEmailDuplicate) {
    //                 message.error('Both emails are already registered');
    //             } else if (schoolEmailDuplicate) {
    //                 message.error('School email already registered');
    //             } else {
    //                 message.error('Coordinator email already registered');
    //             }

    //             return false;
    //         }

    //         setEmailDuplicate({ schoolEmail: false, coordinatorEmail: false });
    //         return true;
    //     } catch (error) {
    //         console.error('Error checking emails:', error);
    //         message.error(error.response?.data?.message || 'Error checking emails. Please try again.');
    //         return false;
    //     }
    // };

    const checkDuplicateEmails = async () => {
        const schoolEmail = form.getFieldValue('schoolEmail')?.trim();
        const coordinatorEmail = form.getFieldValue('coordinatorEmail')?.trim();

        // Don't proceed if both emails are empty
        if (!schoolEmail && !coordinatorEmail) return true;

        try {
            const response = await api.post('/school/check-email', {
                schoolEmail,
                coordinatorEmail,
            });

            // Clear any existing duplicate state if successful
            setEmailDuplicate({ schoolEmail: false, coordinatorEmail: false });
            return true;
        } catch (error) {
            const {
                schoolEmailDuplicate,
                coordinatorEmailDuplicate,
                reasons,
                message: errorMsg,
            } = error.response?.data || {};

            // Set state flags for individual duplicates
            setEmailDuplicate({
                schoolEmail: schoolEmailDuplicate || false,
                coordinatorEmail: coordinatorEmailDuplicate || false,
            });

            // Show detailed reasons if present
            if (reasons && Array.isArray(reasons) && reasons.length > 0) {
                reasons.forEach((reason) => message.error(reason));
            } else {
                // Fallback error message
                message.error(errorMsg || 'Error checking emails. Please try again.');
            }

            return false;
        }
    };

    const checkSchoolEmailDuplicate = async () => {
        const schoolEmail = form.getFieldValue('schoolEmail')?.trim();
        if (!schoolEmail) return true;

        try {
            await api.post('/school/check-email', {
                schoolEmail,
                coordinatorEmail: null, // Only checking schoolEmail
            });

            form.setFields([{ name: 'schoolEmail', errors: [] }]);
            return true;

        } catch (error) {
            if (error.response?.data?.schoolEmailDuplicate) {
                form.setFields([
                    {
                        name: 'schoolEmail',
                        errors: [error.response.data.message || 'Duplicate school email'],
                    },
                ]);
            }
            return false;
        }
    };

    const checkCoordinatorEmailDuplicate = async () => {
        const coordinatorEmail = form.getFieldValue('coordinatorEmail')?.trim();
        const schoolEmail = form.getFieldValue('schoolEmail')?.trim(); // Needed to check against same email
        if (!coordinatorEmail) return true;

        try {
            await api.post('/school/check-email', {
                schoolEmail,
                coordinatorEmail,
            });

            form.setFields([{ name: 'coordinatorEmail', errors: [] }]);
            return true;

        } catch (error) {
            if (error.response?.data?.coordinatorEmailDuplicate) {
                form.setFields([
                    {
                        name: 'coordinatorEmail',
                        errors: [error.response.data.message || 'Duplicate coordinator email'],
                    },
                ]);
            }
            return false;
        }
    };




    const steps = [
        {
            title: 'School Details',
            content: (
                <>
                    <Form.Item
                        name="schoolName"
                        label="School Name"
                        rules={[
                            { required: true, message: 'Please input school name!' },
                            {
                                validator: (_, value) =>
                                    isAllCaps(value) ? Promise.resolve() : Promise.reject('please enter name in CAPITAL letters'),
                            },
                        ]}
                    >
                        <Input placeholder='Enter school name' />
                    </Form.Item>
                    <Form.Item
                        name="principalName"
                        label="Principal Name"
                        rules={[
                            { required: true, message: 'Please input principal name!' },
                            {
                                validator: (_, value) =>
                                    isAllCaps(value) ? Promise.resolve() : Promise.reject('please enter name in CAPITAL letters'),
                            },
                        ]}
                    >
                        <Input placeholder="enter principal's name" />
                    </Form.Item>
                    <Form.Item
                        name="schoolContact"
                        label="School Contact Number"
                        rules={[
                            {
                                required: true,
                                message: "Please enter phone number",
                            },
                            {
                                validator: (_, value) => {
                                    if (!value) return Promise.resolve(); // wait for user to start typing

                                    const cleaned = value.replace(/\D/g, "");

                                    if (cleaned.length < 10) {
                                        return Promise.reject(
                                            new Error("Phone number must be exactly 10 digits")
                                        );
                                    }

                                    const phoneRegex = /^[6-9]\d{9}$/;
                                    if (!phoneRegex.test(cleaned)) {
                                        return Promise.reject(
                                            new Error("Enter a valid 10-digit number starting with 6-9")
                                        );
                                    }

                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input
                            maxLength={10}
                            placeholder="Enter 10-digit phone number"
                            onChange={(e) => {
                                const cleaned = e.target.value.replace(/\D/g, "");
                                form.setFieldsValue({ phoneNumber: cleaned });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="schoolEmail"
                        label="School Email"
                        rules={[
                            { required: true, message: 'Please input email!' },
                            { type: 'email', message: 'Please enter a valid email! (Only @gmail.com or @yahoo.com or @outlook.com are accepted)' },
                            {
                                validator: (_, value) => {
                                    if (!value || !value.includes('@')) {
                                        return Promise.resolve(); // Skip validation for partial input
                                    }

                                    const otherEmail = form.getFieldValue('coordinatorEmail'); // For schoolEmail, and vice versa
                                    if (value && otherEmail && value === otherEmail) {
                                        return Promise.reject(new Error('School email cannot be the same as Coordinator email'));
                                    }

                                    if (!isValidEmail(value)) {
                                        return Promise.reject(new Error('Invalid email domain'));
                                    }

                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input placeholder='Enter valid email Id'
                            onChange={(e) => {
                                form.validateFields(['coordinatorEmail']);
                                setEmailDuplicate((prev) => ({ ...prev, schoolEmail: false }));
                            }}
                        />
                    </Form.Item>
                </>
            ),
        },
        {
            title: 'Coordinator Details',
            content: (
                <>
                    <Form.Item
                        name="coordinatorName"
                        label="Coordinator Name"
                        rules={[
                            { required: true, message: 'Please input coordinator name!' },
                            {
                                validator: (_, value) =>
                                    isAllCaps(value) ? Promise.resolve() : Promise.reject('please enter name in CAPITAL letters'),
                            },
                        ]}
                    >
                        <Input placeholder='Enter coordinator name' />
                    </Form.Item>
                    <Form.Item
                        name="coordinatorNumber"
                        label="Coordinator Number"
                        rules={[
                            {
                                required: true,
                                message: "Please enter phone number",
                            },
                            {
                                validator: (_, value) => {
                                    if (!value) return Promise.resolve(); // wait for user to start typing

                                    const cleaned = value.replace(/\D/g, "");

                                    if (cleaned.length < 10) {
                                        return Promise.reject(
                                            new Error("Phone number must be exactly 10 digits")
                                        );
                                    }

                                    const phoneRegex = /^[6-9]\d{9}$/;
                                    if (!phoneRegex.test(cleaned)) {
                                        return Promise.reject(
                                            new Error("Enter a valid 10-digit number starting with 6-9")
                                        );
                                    }

                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input
                            maxLength={10}
                            placeholder="Enter 10-digit phone number"
                            onChange={(e) => {
                                const cleaned = e.target.value.replace(/\D/g, "");
                                form.setFieldsValue({ phoneNumber: cleaned });
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="coordinatorEmail"
                        label="Coordinator Email"
                        dependencies={['schoolEmail']}
                        rules={[
                            { required: true, message: 'Please input email!' },
                            { type: 'email', message: 'Please enter a valid email! (Only @gmail.com or @yahoo.com or @outlook.com are accepted)' },
                            {
                                validator: (_, value) => {
                                    if (!value || !value.includes('@')) {
                                        return Promise.resolve(); // Skip validation for partial input
                                    }

                                    const otherEmail = form.getFieldValue('schoolEmail'); // For schoolEmail, and vice versa
                                    if (value && otherEmail && value === otherEmail) {
                                        return Promise.reject(new Error('Coordinator email cannot be the same as school email'));
                                    }

                                    if (!isValidEmail(value)) {
                                        return Promise.reject(new Error('Invalid email domain'));
                                    }

                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Input placeholder='Enter valid email Id'
                            onChange={() => setEmailDuplicate((prev) => ({ ...prev, coordinatorEmail: false }))}
                        />
                    </Form.Item>

                </>
            ),
        },
        {
            title: 'Address Details',
            content: (
                <>
                    <Form.Item
                        name="schoolAddress"
                        label="School Address"
                        rules={[
                            { required: true, message: 'Please input school address!' },
                            {
                                validator: (_, value) =>
                                    isAllCaps(value) ? Promise.resolve() : Promise.reject('please enter address in CAPITAL letters'),
                            },
                        ]}
                    >
                        <TextArea placeholder='Enter full school address' rows={4} />
                    </Form.Item>
                    <Form.Item
                        name="state"
                        label="State"
                        rules={[{ required: true, message: 'Please select state!' }]}
                    >
                        <Select placeholder='Select your state' onChange={(value) => setSelectedState(value)}>
                            {Object.keys(stateDistrictCodeMap).map((state) => (
                                <Select.Option key={state} value={state}>
                                    {state}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="district"
                        label="District"
                        rules={[{ required: true, message: 'Please select district!' }]}
                        dependencies={['state']}
                    >
                        <Select placeholder='Select your district' disabled={!selectedState}>
                            {selectedState &&
                                Object.keys(stateDistrictCodeMap[selectedState].districts).map((district) => (
                                    <Select.Option key={district} value={district}>
                                        {district}
                                    </Select.Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="schoolWebsite" label="School Website"

                    >
                        <Input placeholder='Enter website URL (optional)' />
                    </Form.Item>
                </>
            ),
        },
    ];

    // const next = async () => {
    //     try {
    //         await form.validateFields();

    //         const emailsValid = await checkDuplicateEmails();
    //         if (!emailsValid) return;

    //         const values = form.getFieldsValue();
    //         saveFormData(values);
    //         setCurrentStep(currentStep + 1);
    //     } catch (error) {
    //         console.error('Validation failed:', error);
    //     }
    // };


    const next = async () => {
        try {
            await form.validateFields();

            let valid = true;

            if (currentStep === 0) {
                valid = await checkSchoolEmailDuplicate();
            } else if (currentStep === 1) {
                valid = await checkCoordinatorEmailDuplicate();
            }

            if (!valid) return;

            const values = form.getFieldsValue();
            saveFormData(values);
            setCurrentStep(currentStep + 1);
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const prev = () => {
        const values = form.getFieldsValue();
        saveFormData(values);
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async () => {
        try {
            const currentValues = await form.validateFields();
            const values = { ...formData, ...currentValues };
            console.log("Final data sent to /school/validate:", values);

            setLoading(true);


            // Validate all data with backend
            const validationResponse = await api.post('/school/validate', values);
            if (!validationResponse.data.valid) {
                message.error(validationResponse.data.message);
                return;
            }

            // Create Razorpay order
            const orderResponse = await api.post('/payments/create-order', {
                // amount: 99900, // Amount in paise (999 INR)
                // currency: 'INR',
                // receipt: `receipt_${Date.now()}`,
                notes: {
                    schoolName: values.schoolName,
                    principalName: values.principalName,
                    schoolContact: values.schoolContact,
                    schoolEmail: values.schoolEmail,
                    coordinatorName: values.coordinatorName,
                    coordinatorNumber: values.coordinatorNumber,
                    coordinatorEmail: values.coordinatorEmail,
                    schoolAddress: values.schoolAddress,
                    state: values.state,
                    district: values.district,
                    schoolWebsite: values.schoolWebsite || '',
                }

            });

            // Initialize Razorpay

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: orderResponse.data.order.amount, // ₹999 in paise
                currency: orderResponse.data.order.currency,
                name: 'BTL School Registration',
                description: 'School Registration Payment',
                image: '/logo.png', // optional
                prefill: {
                    name: values.principalName,
                    email: values.schoolEmail,
                    contact: values.schoolContact
                },
                method: {
                    netbanking: true,
                    card: true,
                    upi: true,
                    wallet: true,
                    paylater: false,
                },
                theme: {
                    color: '#1890ff'
                },
                modal: {
                    backdropclose: false,   // Prevent closing on outside click
                    escape: false,          // Disable ESC key closing
                    handleback: true,       // Android back button
                    confirm_close: true,    // Ask before closing
                    animation: true         // Smooth open/close animation
                },
                readonly: {
                    email: true,
                    contact: true
                },
                order_id: orderResponse.data.order.id,
                handler: async (response) => {
                    try {
                        const verifyRes = await api.post('/payments/verify', {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            // registrationData: values 
                        });

                        if (!verifyRes || !verifyRes.data) {
                            console.error(" No response data received from verification API.");
                            message.error("Verification failed: No response from server.");
                            return;
                        }

                        console.log(" Verification Response:", verifyRes.data);

                        const { status, schoolRegId, message: statusMessage } = verifyRes.data;

                        if (status === 'registered' && schoolRegId) {
                            message.success('🎉 Registration successful! A confirmation email has been sent.');

                            // Save regId for success page
                            sessionStorage.setItem('schoolRegId', schoolRegId);

                            // Clear saved form data
                            sessionStorage.removeItem('schoolRegistrationData');
                            sessionStorage.removeItem('currentStep');

                            // Redirect to success
                            window.location.href = '/registration-success';

                            // Reset local state (optional safety)
                            form.resetFields();
                            setFormData({});
                            setCurrentStep(0);
                            setSelectedState(null);

                        } else if (status === 'pending') {
                            message.info('✅ Payment successful. Your registration is being processed. Please check back soon.');
                        } else {
                            message.error(statusMessage || '❌ Payment verification failed. Please contact support.');
                        }
                    } catch (error) {
                        console.error("❌ Payment verification error:", error);

                        if (error.response?.data?.message) {
                            message.error(error.response.data.message);
                        } else {
                            message.error("Verification failed. Please try again or contact support.");
                        }
                    }
                },


                notes: {
                    schoolName: values.schoolName,
                    coordinator: values.coordinatorName
                },

                timeout: 500  // 15-minute timeout (optional)
            };


            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Submit failed:', error);
            message.error(error.message || 'Failed to submit form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-[#e5eaf2] mx-2 sm:mx-2 md:mx-2">
                {/* Custom Stepper UI - Desktop Only */}
                <div className="hidden md:block">
                    <Steps
                        current={currentStep}
                        className="mb-10 px-2 custom-stepper"
                        labelPlacement="horizontal"
                        size="default"
                    >
                        {steps.map((item, idx) => (
                            <Step
                                key={item.title}
                                icon={
                                    <div className="flex flex-col items-center">
                                        <span className={`font-bold text-xs md:text-sm mb-1 ${currentStep === idx ? 'text-[#112481]' : 'text-[#b6c6e3]'}`}>
                                            {item.title.toUpperCase()}
                                        </span>
                                        <div
                                            className={`w-6 h-6 flex items-center justify-center rounded-full border text-xs ${currentStep === idx ? 'bg-[#112481] text-white border-[#112481]' : 'bg-white border-[#b6c6e3] text-[#b6c6e3]'
                                                }`}
                                        >
                                            {idx + 1}
                                        </div>
                                    </div>
                                }
                                title={null} // Override the default title below the icon
                            />
                        ))}
                    </Steps>

                </div>

                {/* Mobile Step Indicator */}
                <div className="md:hidden mb-6">
                    <div className="flex items-center justify-center space-x-2">
                        {steps.map((item, idx) => (
                            <div key={item.title} className="flex items-center">
                                <div
                                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium ${currentStep === idx
                                            ? 'bg-[#112481] text-white border-[#112481]'
                                            : 'bg-white border-[#b6c6e3] text-[#b6c6e3]'
                                        }`}
                                >
                                    {idx + 1}
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className={`w-8 h-0.5 mx-1 ${currentStep > idx ? 'bg-[#112481]' : 'bg-[#b6c6e3]'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-sm font-medium text-[#112481]">
                            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
                        </span>
                    </div>

                </div>


                <Form
                    form={form}
                    layout="vertical"
                    className="w-full"
                    onValuesChange={(changedValues, allValues) => {
                        saveFormData(allValues);
                        const changedField = Object.keys(changedValues)[0];
                        debouncedValidate(changedField);
                    }}
                >
                    {/* Step content */}
                    {currentStep === 0 && (
                        <>
                            <Form.Item
                                name="schoolName"
                                label={<span className="font-semibold">School Name</span>}
                                rules={steps[0].content.props.children[0].props.rules}
                            >
                                <Input
                                    placeholder="ENTER SCHOOL NAME IN CAPITAL LETTERS"
                                    className="rounded-lg border border-[#b6c6e3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium"
                                />
                            </Form.Item>
                            <Form.Item
                                name="principalName"
                                label={<span className="font-semibold">Principal Name</span>}
                                rules={steps[0].content.props.children[1].props.rules}
                            >
                                <Input
                                    placeholder="ENTER PRINCIPAL NAME IN CAPITAL LETTERS"
                                    className="rounded-lg border border-[#b6c6e3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium"
                                />
                            </Form.Item>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <Form.Item
                                    name="schoolContact"
                                    label={<span className="font-semibold">School Contact Number</span>}
                                    rules={steps[0].content.props.children[2].props.rules}
                                >
                                    <Input
                                        placeholder="+91 (INDIA)"
                                        className="rounded-lg border border-[#b6c6e3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="schoolEmail"
                                    label={<span className="font-semibold">School Email</span>}
                                    rules={steps[0].content.props.children[3].props.rules}
                                >
                                    <Input
                                        placeholder="Enter valid email of school or principal"
                                        className="rounded-lg border border-[#b6c6e3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium"
                                    />
                                </Form.Item>
                            </div>
                        </>
                    )}
                    {currentStep === 1 && (
                        <>
                            <Form.Item
                                name="coordinatorName"
                                label={<span className="font-semibold">Coordinator Name</span>}
                                rules={steps[1].content.props.children[0].props.rules}
                            >
                                <Input
                                    placeholder="ENTER COORDINATOR NAME IN CAPITAL LETTERS"
                                    className="rounded-lg border border-[#b6c6e3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium"
                                />
                            </Form.Item>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <Form.Item
                                    name="coordinatorNumber"
                                    label={<span className="font-semibold">Coordinator Contact Number</span>}
                                    rules={steps[1].content.props.children[1].props.rules}
                                >
                                    <Input
                                        placeholder="+91 (INDIA)"
                                        className="rounded-lg border border-[#b6c6e3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="coordinatorEmail"
                                    label={<span className="font-semibold">Coordinator Email</span>}
                                    rules={steps[1].content.props.children[2].props.rules}
                                >
                                    <Input
                                        placeholder="Enter valid email of coordinator"
                                        className="rounded-lg border border-[#b6c6e3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium"
                                    />
                                </Form.Item>
                            </div>
                        </>
                    )}
                    {currentStep !== 0 && currentStep !== 1 && (
                        <div className="min-h-[10px]">{steps[currentStep].content}</div>
                    )}
                    {/* Instruction line for all steps */}
                    <div className="mt-2 mb-6 text-xs sm:text-sm text-[#2563EB] text-center sm:text-left">
                        This form must be filled only by an <span className="text-[#2563EB] font-bold">authorized representative</span> of the school
                    </div>
                    {/* Button Container: right-aligned on step 1, spaced on others */}
                    {currentStep === 0 ? (
                        <div className="flex justify-end mt-4">
                            <Button type="primary" onClick={next} className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg font-bold text-white text-sm sm:text-base shadow hover:opacity-90 transition"
                                style={{ background: 'linear-gradient(93.58deg, #112481 0%, #2054CC 70%, #307DE3 100%)', border: 'none' }}>
                                NEXT
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-3 sm:gap-0">
                            {currentStep > 0 && (
                                <Button onClick={prev} className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold border border-[#2563EB] text-[#2563EB] bg-white hover:bg-[#F0F6FF] transition text-sm sm:text-base">
                                    Previous
                                </Button>
                            )}
                            {currentStep < steps.length - 1 && (
                                <Button type="primary" onClick={next} className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg font-bold text-white text-sm sm:text-base shadow hover:opacity-90 transition"
                                    style={{ background: 'linear-gradient(93.58deg, #112481 0%, #2054CC 70%, #307DE3 100%)', border: 'none' }}>
                                    NEXT
                                </Button>
                            )}
                            {currentStep === steps.length - 1 && (
                                <Button type="primary" onClick={handleSubmit} loading={loading} className="w-full sm:w-auto px-8 sm:px-12 py-3 rounded-lg font-bold text-white text-sm sm:text-base shadow hover:opacity-90 transition"
                                    style={{ background: 'linear-gradient(93.58deg, #112481 0%, #2054CC 70%, #307DE3 100%)', border: 'none' }}>
                                    Proceed to pay
                                </Button>
                            )}
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default StepperForm;