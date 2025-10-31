import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../pages/AuthContext"; 

const Upload = () => {
  const { user } = useAuth(); // ✅ get user
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setMessage("");
    setUploadProgress(0);

    if (file) {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      setMessage(`Selected: ${file.name} (${sizeInMB} MB)`);
    }
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const handleUpload = async () => {
    if (!videoFile) {
      setMessage("Please select a video file first.");
      return;
    }

    if (!user || !user.id) {
      setMessage("❌ User not logged in.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("user_id", user.id); // ✅ Send user_id

    setUploading(true);
    setMessage("Uploading... Please wait, this may take several minutes.");
    setUploadProgress(0);

    try {
      const response = await axios.post(
        "https://rssdinfotechoffice.store/JADWIN/backend/upload.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 1200000, // 20 minutes
          maxContentLength: 1073741824, // 1 GB
          maxBodyLength: 1073741824,

          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
            setMessage(
              `Uploading... ${percentCompleted}% (${formatBytes(
                progressEvent.loaded
              )} / ${formatBytes(progressEvent.total)})`
            );
          },
        }
      );

      if (response.data.status === "success") {
        setMessage(
          `✅ ${response.data.message} (Video ID: ${response.data.video_id})`
        );
        setVideoFile(null);
        setUploadProgress(0);
        document.querySelector('input[type="file"]').value = "";
      } else {
        setMessage(`❌ ${response.data.message || "Upload failed."}`);
      }
    } catch (error) {
      console.error("Upload error:", error);

      if (error.code === "ECONNABORTED") {
        setMessage("❌ Upload timeout. File too large or connection too slow.");
      } else if (error.response) {
        setMessage(
          `❌ Server error: ${error.response.status} - ${
            error.response.data?.message || "Unknown error"
          }`
        );
      } else if (error.request) {
        setMessage("❌ Network error. Check your connection.");
      } else {
        setMessage("❌ Failed to upload video. Please try again.");
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h2 className="text-2xl font-bold mb-6">Upload Your Video</h2>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="mb-4 text-black"
      />

      {uploading && uploadProgress > 0 && (
        <div className="w-full max-w-md mb-4">
          <div className="bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm mt-1">{uploadProgress}%</p>
        </div>
      )}

      {videoFile && !uploading && (
        <video
          src={URL.createObjectURL(videoFile)}
          controls
          className="mb-4 max-w-full max-h-60 rounded"
        />
      )}

      <button
        onClick={handleUpload}
        disabled={!videoFile || uploading}
        className={`px-6 py-2 rounded font-semibold transition ${
          videoFile && !uploading
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-600 cursor-not-allowed text-gray-300"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Video"}
      </button>

      {message && <p className="mt-4 text-sm text-yellow-300">{message}</p>}
    </div>
  );
};

export default Upload;
