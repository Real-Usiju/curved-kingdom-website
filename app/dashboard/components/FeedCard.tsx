"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Eye,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Crown } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

type FeedCardProps = {
  post: any;
  supportPost: (id: string, post: any) => void;
  openDiscussion: (postId: string) => void;
  supportedPosts?: string[];
  sharePost: (post: any) => void;
  viewPost: (id: string) => void;
};

export default function FeedCard({
  post,
  supportPost,
  openDiscussion,
  supportedPosts,
  sharePost,
  viewPost,
}: FeedCardProps) {

  useEffect(() => {
    viewPost(post.id);
  }, [post.id]);

  function formatTime(timestamp: any) {
    if (!timestamp) return "Just now";

    const date = timestamp.toDate();
    const now = new Date();

    const seconds = Math.floor(
      (now.getTime() - date.getTime()) / 1000
    );

    if (seconds < 60) return "Just now";

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);

    if (hours < 24) return `${hours} hr ago`;

    const days = Math.floor(hours / 24);

    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-6"
    >
      <div className="flex items-center gap-4">
        <Link href={`/kingdom/${post.uid}`}>
  <Image
    src={post.profileImage || "/logo.png"}
    alt="Citizen"
    width={56}
    height={56}
    className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 cursor-pointer"
  />
</Link>
<div className="flex-1">

  <div className="flex items-center gap-2">

    <Link href={`/kingdom/${post.uid}`}>
  <h3 className="font-bold text-lg text-white hover:text-yellow-400 cursor-pointer">
    {post.kingdomName || post.fullName}
  </h3>
</Link>

   {post.verified && (
  <CheckCircle
    size={18}
    className="text-yellow-400"
  />
)}
  </div>

  <div className="mt-1 flex items-center gap-3 text-sm text-gray-400">

    <span>{post.royalRank || "Early Citizen"}</span>

    

    <div className="flex items-center gap-1">
      <Clock size={14} />
      <span>{formatTime(post.createdAt)}</span>
    </div>

  </div>

</div>
      </div>

      
      {/* Image */}
{post.mediaType === "image" && post.mediaUrl && (
  <div className="mt-5 overflow-hidden rounded-2xl border border-yellow-500/20">
    <Image
  src={post.mediaUrl}
  alt="Proclamation"
  width={1200}
  height={800}
  className="w-full h-auto max-h-137.5 object-cover"
/>
      
  </div>
)}

{/* Video */}
{post.mediaType === "video" && post.mediaUrl && (
  <div className="mt-5 overflow-hidden rounded-2xl border border-yellow-500/20">
    <video
      controls
      className="w-full max-h-137.5"
    >
      <source src={post.mediaUrl} />
      Your browser does not support video.
    </video>
  </div>
)}

{/* Caption */}
{post.text && (
  <p className="mt-5 whitespace-pre-wrap text-gray-300">
    {post.text}
  </p>
)}


{post.mediaType === "video" && post.mediaUrl && (
  <video
    controls
    className="mt-4 w-full rounded-2xl border border-yellow-500/20"
  >
    <source src={post.mediaUrl} />
  </video>
)}

      <div className="flex gap-8 mt-6 font-medium">
        <div className="flex items-center gap-2 text-gray-400">
  <Eye size={20} />
  <span>{post.views || 0} Views</span>
</div>

      <button
  onClick={() => supportPost(post.id, post)}
  className={`flex items-center gap-2 transition ${
    supportedPosts?.includes(post.id)
      ? "text-red-500"
      : "text-white hover:text-red-500"
  }`}
>
  <Heart
    size={20}
    fill={supportedPosts?.includes(post.id) ? "red" : "none"}
    color={supportedPosts?.includes(post.id) ? "red" : "white"}
  />

  <span>
    {post.support || 0} Support
  </span>
</button>

  
        <button
  onClick={() => openDiscussion(post.id)}
  className="text-white hover:text-yellow-400 transition"
>
  💬 {post.discussions || 0} Discuss
</button>

       <button
  onClick={() => sharePost(post)}
  className="text-white hover:text-yellow-400 transition"
>
  🔗 Share
</button>

      </div>
    </motion.div>
    
    
  );
}