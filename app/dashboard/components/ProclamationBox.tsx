"use client";

import { motion } from "framer-motion";

type ProclamationBoxProps = {
  proclamation: string;
  setProclamation: (value: string) => void;
  publishProclamation: () => void;
  loading: boolean;

  imagePreview: string;
  handleImageSelect: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;

  videoPreview?: string;
  handleVideoSelect?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function ProclamationBox({
  proclamation,
  setProclamation,
  publishProclamation,
  loading,
  imagePreview,
  handleImageSelect,
  videoPreview,
  handleVideoSelect,
}: ProclamationBoxProps) {
  return (
    <motion.section
      whileHover={{ scale: 1.01 }}
      className="bg-zinc-900/80 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-6 mb-8"
    >
      <h2 className="text-xl font-bold text-yellow-400 mb-5">
         Create Proclamation
      </h2>

       {/* Media Preview */}
{imagePreview && (
  <div className="mb-5">
    <img
      src={imagePreview}
      alt="Preview"
      className="w-full rounded-2xl border border-yellow-500/20 object-cover max-h-125"
    />
  </div>
)}

{videoPreview && (
  <div className="mb-5">
    <video
      controls
      src={videoPreview}
      className="w-full rounded-2xl border border-yellow-500/20 max-h-125"
    />
  </div>
)}

<textarea
  value={proclamation}
  onChange={(e) => setProclamation(e.target.value)}
  placeholder="Write a short note about your photo or video..."
  className="w-full min-h-24 rounded-2xl border border-gray-700 bg-black/60 p-5 text-white placeholder-gray-500 outline-none focus:border-yellow-500 resize-none"
/>

      <div className="flex gap-3 mt-5 flex-wrap">

        <button
          onClick={publishProclamation}
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-6 py-3 rounded-full font-bold"
        >
          {loading ? "Publishing..." : "👑 Publish"}
        </button>

        <label className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-500/10 transition cursor-pointer">
          🎥 Video

          <input
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideoSelect}
          />
        </label>

        <label className="border border-gray-600 px-6 py-3 rounded-full hover:border-yellow-500 transition cursor-pointer">
          🖼 Image

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
          />
        </label>

      </div>
    </motion.section>
  );
}