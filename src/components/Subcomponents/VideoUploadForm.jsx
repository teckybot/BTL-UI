import React, { useState, useEffect } from "react";
import { Form, message, Modal } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { VideoCameraOutlined } from "@ant-design/icons";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { Upload } from "antd";
import rocket from '../../data/animations/rocket.png';
import Lottie from "lottie-react";
import successAnimation from "../../data/animations/success.json";
import Astronaut from "../../data/animations/Astronaut.json";

const VideoUploadForm = ({ teamRegId, onPrev }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [uploadTime, setUploadTime] = useState(0);
  const [modalMessage, setModalMessage] = useState("Submission is in process. Please wait...");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [successAnimationComplete, setSuccessAnimationComplete] = useState(false);

  const navigate = useNavigate();

  const beforeUpload = (file) => {
    const isVideo = ["video/mp4"].includes(file.type);
    if (!isVideo) {
      message.error("Only MP4 video format is allowed.");
      return Upload.LIST_IGNORE;
    }

    const isLt100MB = file.size / 1024 / 1024 < 30;
    if (!isLt100MB) {
      message.error("Video must be smaller than 30MB.");
      return Upload.LIST_IGNORE;
    }

    const nameMatches = file.name.split(".")[0].toLowerCase() === teamRegId.toLowerCase();
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
        timeout: 300000,
      });

      clearInterval(timer);
      setUploading(false);
      setFile(null);
      setUploadSuccess(true);
      setModalMessage("Your video has been uploaded successfully!");
    } catch (err) {
      clearInterval(timer);
      setShowModal(false);
      setUploading(false);

      if (err.code === 'ECONNABORTED') {
        message.error("Upload timed out. Please check your internet connection and try again.");
      } else {
        message.error(err.response?.data?.message || "Upload failed.");
      }
    }
  };

  const handleRemove = () => setFile(null);

  // Update modal message during upload
  useEffect(() => {
    if (!uploading) return;
    if (uploadTime > 120) {
      setModalMessage("Still uploading your video. We're getting close to the finish line!");
    } else if (uploadTime > 60) {
      setModalMessage("Your video is still uploading. This can take a while for larger files, hang tight!");
    } else {
      setModalMessage("Submission is in process. Please wait...");
    }
  }, [uploadTime, uploading]);


  return (
    <>
      <Form layout="vertical" className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-full max-w-5xl bg-white p-6 rounded-2xl border border-gray-200 text-center">
          {file ? (
            <div className="mt-4 text-center">
              <p className="text-gray-700 font-medium mb-2">{file.name}</p>
              <div className="flex items-center justify-center p-8 bg-gray-50 rounded-md">
                <VideoCameraOutlined style={{ fontSize: "48px", color: "#6366F1" }} />
              </div>
              <button
                onClick={handleRemove}
                type="button"
                className="mt-4 text-indigo-600 hover:underline text-sm"
              >
                Remove Video & choose another
              </button>
            </div>
          ) : (
            <Dragger
              name="file"
              multiple={false}
              beforeUpload={beforeUpload}
              showUploadList={false}
              className="border-gray-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center py-10 space-y-3">
                <VideoCameraOutlined className="text-5xl text-gray-400" />
                <p className="text-gray-600 font-medium">
                  Click or drag to upload Video
                </p>
                <p className="text-sm text-gray-400">
                  MP4 only • Max 30MB • Filename = Team ID
                </p>
              </div>
            </Dragger>
          )}

          <p className="text-sm text-gray-500 mt-6">
            Please ensure the file is in <strong>MP4 format</strong>, does not exceed <strong>30MB</strong> in size,
            and the filename matches your <strong>Team ID</strong>.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              onClick={onPrev}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleUpload}
              disabled={!file || uploading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </div>
      </Form>

      <Modal
        open={showModal}
        onCancel={() => {
          setShowModal(false);
          setUploadSuccess(false); // reset animation condition
          navigate("/competitions");
        }}

        closable={true}
        maskClosable={false}
        footer={null}
        centered
        className="video-success-modal"
      >
        <div className="flex flex-col items-center justify-center text-center py-4">
          {uploadSuccess ? (
            successAnimationComplete ? (
              <>
                <div className="relative w-full flex flex-col items-center">
                  {/* Cloud Bubble */}
                  <div className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-md text-base font-medium border border-gray-200 animate-fade-in mb-2">
                    See you soon!
                  </div>

                  {/* Astronaut Animation */}
                  <div className="w-56 h-56 animate-slide-in-bl">
                    <Lottie animationData={Astronaut} loop={true} />
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-green-600">{modalMessage}</h2>
              </>
            )

              : (
                <>
                  <div className="w-28 h-28 mb-2">
                    <Lottie
                      animationData={successAnimation}
                      loop={false}
                      onComplete={() => setSuccessAnimationComplete(true)}
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-green-600">{modalMessage}</h2>
                </>
              )
          ) : (
            <>
              <img src={rocket} alt="Upload status" className="w-20 h-20 mb-4 animate-bounce" />
              <h2 className="text-lg font-semibold text-gray-800">{modalMessage}</h2>
              <p className="text-sm text-gray-600 mt-1">All the best!</p>
            </>
          )}

        </div>

      </Modal>
    </>
  );
};

export default VideoUploadForm;
