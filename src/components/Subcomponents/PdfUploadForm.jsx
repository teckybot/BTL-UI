// components/PdfUploadForm.jsx
import React, { useState, useEffect } from "react";
import { Upload, Button, Form, message, Space, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const PdfUploadForm = ({ teamRegId, onPrev }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [uploadTime, setUploadTime] = useState(0);
  const [modalMessage, setModalMessage] = useState("Submission is in process. Please wait...");
  const navigate = useNavigate();

  const beforeUpload = (file) => {
    // Frontend validation checks
    const isPdf = file.type === "application/pdf";
    if (!isPdf) {
      message.error("Only PDF format is allowed.");
      return Upload.LIST_IGNORE;
    }

    const nameMatches = file.name.split(".")[0].toLowerCase() === teamRegId.toLowerCase();
    if (!nameMatches) {
      message.error("Filename must match Team ID.");
      return Upload.LIST_IGNORE;
    }

    const isLt10MB = file.size / 1024 / 1024 < 10;
    if (!isLt10MB) {
      message.error("PDF must be smaller than 10MB.");
      return Upload.LIST_IGNORE;
    }

    setFile(file);
    return false; // Prevent antd from auto-uploading
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("teamRegId", teamRegId);
    formData.append("submissionFile", file);

    // Show the modal and start the timer
    setShowModal(true);
    setUploadTime(0);
    setModalMessage("Submission is in process. Please wait...");
    const timer = setInterval(() => {
      setUploadTime((prevTime) => prevTime + 1);
    }, 1000);

    try {
      setUploading(true);
      await api.post("/submission/dynamic-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        // A generous timeout for PDF uploads
        timeout: 300000, 
      });

      message.success("PDF uploaded successfully!");
      setFile(null);

      // Cleanup on success
      clearInterval(timer);
      setShowModal(false);

      navigate("/pdf-confirmation");
    } catch (err) {
      // Cleanup on error
      clearInterval(timer);
      setShowModal(false);

      if (err.code === 'ECONNABORTED') {
        message.error("Upload timed out. Please check your internet connection and try again.");
      } else {
        message.error(err.response?.data?.message || "Upload failed.");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setFile(null);
  };
  
  // Effect to update the modal message based on elapsed time
  useEffect(() => {
    if (uploadTime > 40) {
      setModalMessage("Almost there! We're about to wrap up your submission.");
    } else if (uploadTime > 20) {
      setModalMessage("Still uploading your PDF. Hang tight, we're still working on it!");
    } else {
      setModalMessage("Submission is in process. Please wait...");
    }
  }, [uploadTime]);

  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Upload Project PDF (PDF format, filename must match Team ID)">
          <Upload
            fileList={file ? [file] : []}
            beforeUpload={beforeUpload}
            onRemove={handleRemove}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />} disabled={file}>
              {file ? "File Selected" : "Select PDF"}
            </Button>
          </Upload>
        </Form.Item>

        <Space>
          {onPrev && <Button onClick={onPrev}>Previous</Button>}
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={!file}
            loading={uploading}
          >
            Submit
          </Button>
        </Space>
      </Form>
      
      {/* The Upload Progress Modal */}
      <Modal
        title="Uploading PDF"
        open={showModal}
        closable={false}
        maskClosable={false}
        footer={null}
      >
        <p>{modalMessage}</p>
        <p>Time elapsed: **{uploadTime}** seconds.</p>
      </Modal>
    </>
  );
};

export default PdfUploadForm;