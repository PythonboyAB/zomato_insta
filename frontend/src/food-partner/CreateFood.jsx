import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 const CreateFood = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('video/')) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
      
      if (file.size <= 100 * 1024 * 1024) { // 100MB limit
        setVideoFile({
          file: file,
          name: file.name,
          size: fileSizeMB
        });
        
        // Create video preview
        const videoURL = URL.createObjectURL(file);
        setVideoPreview(videoURL);
      } else {
        alert('File size must be less than 100MB');
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleRemove = () => {
    setVideoFile(null);
    setVideoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!videoFile || !name.trim()) {
      alert('Please upload a video and provide a name');
      return;
    }
    
    // console.log('Saving food:', {
    //   video: videoFile,
    //   name,
    //   description
    // });
    
    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append("video", videoFile.file)
    
    const response = await axios.post("http://localhost:3000/api/food",formData,{
      withCredentials:true,
    })
    console.log('Saving food:',response);
    alert('Food saved successfully!');

    // navigate("/")
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 rounded-lg shadow-xl">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-white mb-1">Create Food</h1>
            <p className="text-sm text-slate-400">
              Upload a short video, give it a name, and add a description.
            </p>
          </div>

          {/* Video Upload Section */}
          <form onSubmit={handleSave}>
          <div className="mb-6">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">
              Food Video
            </label>

            {!videoFile ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-600 hover:border-slate-500 bg-slate-700/30'
                }`}
              >
                <Upload className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-white font-medium mb-1">
                  <span className="text-blue-400">Tap to upload</span> or drag and drop
                </p>
                <p className="text-xs text-slate-400">
                  MP4, WebM, MOV • Up to ~100MB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>
            ) : (
              <div>
                {/* File Info */}
                <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3 mb-3">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                    <span className="text-sm text-white truncate">{videoFile.name}</span>
                  </div>
                  <span className="text-xs text-slate-400 ml-3 flex-shrink-0">
                    {videoFile.size} MB
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-sm text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Change
                  </button>
                  <button
                    onClick={handleRemove}
                    className="text-sm text-red-400 hover:text-red-300 font-medium"
                  >
                    Remove
                  </button>
                </div>

                {/* Video Preview */}
                {videoPreview && (
                  <div className="rounded-lg overflow-hidden bg-black">
                    <video
                      src={videoPreview}
                      controls
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/webm,video/quicktime"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>
            )}
          </div>

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Spicy Paneer Wrap"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Description Input */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description: ingredients, taste, spice level, etc."
              rows={4}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Save Button */}
          <button
            type='submit'
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Save Food
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}
export default CreateFood;