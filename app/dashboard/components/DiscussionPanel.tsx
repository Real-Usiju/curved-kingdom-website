"use client";

import Image from "next/image";

type Discussion = {
  id: string;
  fullName: string;
  profileImage?: string;
  text: string;
};

type DiscussionPanelProps = {
  discussions: Discussion[];
  discussionText: string;
  setDiscussionText: (value: string) => void;
  sendDiscussion: () => void;
};

export default function DiscussionPanel({
  discussions,
  discussionText,
  setDiscussionText,
  sendDiscussion,
}: DiscussionPanelProps) {
  return (
    <div className="mt-5 rounded-2xl border border-yellow-500/20 bg-zinc-950 p-5">

      <h3 className="text-lg font-bold text-yellow-400 mb-4">
        💬 Discussions
      </h3>

      <div className="space-y-4 mb-5">
        {discussions.length === 0 ? (
          <p className="text-gray-500">
            No discussions yet.
          </p>
        ) : (
          discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="flex gap-3 border-b border-zinc-800 pb-3"
            >
              <Image
                src={discussion.profileImage || "/logo.png"}
                alt="Citizen"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-white">
                  {discussion.fullName}
                </h4>

                <p className="text-gray-300">
                  {discussion.text}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <textarea
        value={discussionText}
        onChange={(e) => setDiscussionText(e.target.value)}
        placeholder="Write a discussion..."
        className="w-full rounded-xl bg-black border border-gray-700 p-4 text-white outline-none focus:border-yellow-500 resize-none"
      />

      <button
        onClick={sendDiscussion}
        className="mt-4 rounded-full bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400"
      >
        Send
      </button>

    </div>
  );
}