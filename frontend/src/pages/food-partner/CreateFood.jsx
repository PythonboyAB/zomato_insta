import { useState, useRef } from "react";

const UploadIcon = () => (
  <svg
    className="w-8 h-8 text-slate-400 mb-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-4 h-4 text-slate-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function CreateFood() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    // Reset so selecting the same file again still triggers onChange
    e.target.value = "";
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  const handleChange = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (!dropped) return;
    setFile(dropped);
    setPreview(URL.createObjectURL(dropped));
  };

  const handleSubmit = () => {
    if (!file || !name.trim()) {
      alert("Please upload a video and enter a name.");
      return;
    }
    console.log({ file, name, description });
    alert("Food saved!");
  };

  const formatBytes = (bytes) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-4">
      {/* Hidden file input — always mounted so the ref is always valid */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="w-96 bg-slate-800 rounded-2xl p-5 shadow-xl">
        {/* Header */}
        <h1 className="text-white text-xl font-bold mb-1">Create Food</h1>
        <p className="text-slate-400 text-sm mb-5">
          Upload a short video, give it a name, and add a description.
        </p>

        {/* Upload Area — shown only when no file is selected */}
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
          Food Video
        </label>
        {!file && (
          <div
            className="border-2 border-dashed border-slate-600 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors mb-3 bg-slate-700/30"
            onClick={handleChange}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <UploadIcon />
            <p className="text-white text-sm font-medium">
              <span className="text-blue-400">Tap to upload</span> or drag and
              drop
            </p>
            <p className="text-slate-500 text-xs mt-1">
              MP4, WebM, MOV · Up to ~100MB
            </p>
          </div>
        )}

        {/* File Info Row */}
        {file && (
          <div className="flex items-center justify-between bg-slate-700/50 rounded-lg px-3 py-2 mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 bg-slate-600 rounded-md flex items-center justify-center shrink-0">
                <PlayIcon />
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-medium leading-tight truncate max-w-[140px]">
                  {file.name}
                </p>
                <p className="text-slate-400 text-xs">
                  {formatBytes(file.size)}
                </p>
              </div>
            </div>
            <div className="flex gap-3 text-xs font-medium shrink-0 ml-2">
              <button
                className="text-blue-400 hover:text-blue-300 transition-colors"
                onClick={handleChange}
              >
                Change
              </button>
              <button
                className="text-red-400 hover:text-red-300 transition-colors"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </div>
        )}

        {/* Video Preview */}
        {preview && (
          <div className="rounded-xl overflow-hidden mb-5 bg-slate-900 h-44">
            <video
              src={preview}
              className="w-full h-full object-cover"
              controls
            />
          </div>
        )}

        {/* Name Field */}
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Spicy Paneer Wrap"
          className="w-full bg-slate-700/50 text-white text-sm placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition mb-4"
        />

        {/* Description Field */}
        <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description: ingredients, taste, spice level, etc."
          rows={4}
          className="w-full bg-slate-700/50 text-white text-sm placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition resize-none mb-5"
        />

        {/* Save Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-150 shadow-lg shadow-blue-500/20"
        >
          Save Food
        </button>
      </div>
    </div>
  );
}
