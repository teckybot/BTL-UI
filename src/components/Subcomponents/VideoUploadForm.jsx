// VideoUploadForm.jsx
import React, { useState, useEffect } from "react";
import { Upload, Button, Form, message, Space, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const VideoUploadForm = ({ teamRegId, onPrev }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [uploadTime, setUploadTime] = useState(0);
  const [modalMessage, setModalMessage] = useState("Submission is in process. Please wait...");
  const navigate = useNavigate();

  const beforeUpload = (file) => {
    // ... (Your validation logic remains the same)
    const isMp4 = file.type === "video/mp4";
    if (!isMp4) {
      message.error("Only MP4 format is allowed.");
      return Upload.LIST_IGNORE;
    }
    const isLt30MB = file.size / 1024 / 1024 < 30;
    if (!isLt30MB) {
      message.error("File must be smaller than 30MB.");
      return Upload.LIST_IGNORE;
    }
    const nameMatches = file.name.split(".")[0] === teamRegId;
    if (!nameMatches) {
      message.error("Filename must match Team ID.");
      return Upload.LIST_IGNORE;
    }
    setFile(file);
    return false;
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
        timeout: 600000, 
      });
      
      message.success("Uploaded successfully!");
      setFile(null);
      
      // Cleanup on success
      clearInterval(timer);
      setShowModal(false);

      navigate("/video-confirmation");
      
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
    if (uploadTime > 90) {
      setModalMessage("Almost there! We're about to wrap up your submission.");
    } else if (uploadTime > 45) {
      setModalMessage("Seems like a low internet connection. Hang tight, we're still working on it!");
    } else {
      setModalMessage("Submission is in process. Please wait...");
    }
  }, [uploadTime]);

  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Upload Video (MP4, ≤ 30MB)">
          <Upload
            fileList={file ? [file] : []}
            beforeUpload={beforeUpload}
            onRemove={handleRemove}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />} disabled={file}>
              {file ? "File Selected" : "Select File"}
            </Button>
          </Upload>
        </Form.Item>

        <Space>
          <Button onClick={onPrev}>Previous</Button>
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
        title="Uploading Video"
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

export default VideoUploadForm;