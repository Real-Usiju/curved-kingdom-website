"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { auth, db, storage } from "@/lib/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { createNotification } from "@/lib/notifications";


import {
  doc,
  getDoc,
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  where,
  onSnapshot,
  updateDoc,
  increment,
  arrayUnion,
  arrayRemove,
  getDocs,
setDoc,
deleteDoc,

} from "firebase/firestore";
import TopBar from "./components/TopBar";
import WelcomeBanner from "./components/WelcomeBanner";
import ProclamationBox from "./components/ProclamationBox";
import FeedCard from "./components/FeedCard";
import DiscussionPanel from "./components/DiscussionPanel";
import { Bell } from "lucide-react";
import { useKingdom } from "@/hooks/useKingdom";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";


type UserData = {
  fullName: string;
  profileImage: string;
  rank: string;
};

type Post = {
  id: string;
  uid: string;
  fullName: string;
  kingdomName?: string;
  royalRank?: string;
  verified?: boolean;

  profileImage: string;

  text: string;

  mediaUrl?: string;
  mediaType?: string;

  support: number;
  discussions: number;
  views?: number;

  createdAt?: any;
};

export default function DashboardPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const [imagePreview, setImagePreview] = useState("");
  const [videoPreview, setVideoPreview] = useState("");

  const { kingdom } = useKingdom();
  console.log("Kingdom Data:", kingdom);

  const [userData, setUserData] = useState<UserData>({
    fullName: "Citizen",
    profileImage: "",
    rank: "Early Citizen",
  });

  const [proclamation, setProclamation] = useState("");

  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [supportedPosts, setSupportedPosts] = useState<string[]>([]);
   const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [discussionText, setDiscussionText] = useState("");
  const [discussions, setDiscussions] = useState<any[]>([]);
  

  

  const sendDiscussion = async () => {
  if (!auth.currentUser) return;
  if (!selectedPost) return;
  if (!discussionText.trim()) return;

  try {
    await addDoc(collection(db, "discussions"), {
      proclamationId: selectedPost,
      uid: auth.currentUser.uid,
      fullName: kingdom?.kingdomName || userData.fullName,
      profileImage: userData.profileImage,
      text: discussionText,
      createdAt: serverTimestamp(),
    });

    await updateDoc(doc(db, "proclamations", selectedPost), {
      discussions: increment(1),
    });

    setDiscussionText("");
  } catch (error) {
    console.error(error);
  }
};

 const openDiscussion = (postId: string) => {
  if (selectedPost === postId) {
    // Hide the discussion panel if it's already open
    setSelectedPost(null);
  } else {
    // Open the discussion panel for the selected post
    setSelectedPost(postId);
  }
};

  // Load Logged-in User

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      if (!user) return;

      const userRef = doc(db, "users", user.uid);

      const snap = await getDoc(userRef);

      if (snap.exists()) {

        const data = snap.data();

        setUserData({
          fullName: data.fullName || "Citizen",
          profileImage: data.profileImage || "",
          rank: data.rank || "Early Citizen",
        });
         const supportsSnapshot = await getDocs(
    collection(db, "users", user.uid, "supports")
  );

  const supported = supportsSnapshot.docs.map((doc) => doc.id);

  setSupportedPosts(supported);

      }

    });

    return () => unsubscribe();

  }, []);
  useEffect(() => {
  if (!selectedPost) {
    setDiscussions([]);
    return;
  }

  const q = query(
    collection(db, "discussions"),
    where("proclamationId", "==", selectedPost),
    orderBy("createdAt", "asc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setDiscussions(data);
  });

  return () => unsubscribe();
}, [selectedPost]);

  // Load Kingdom Feed

  useEffect(() => {

    const q = query(

      collection(db, "proclamations"),

      orderBy("createdAt", "desc")

    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];

      setPosts(list);

    });

    return () => unsubscribe();

  }, []);
    // Publish Proclamation
   const handleImageSelect = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setImageFile(file);

  setImagePreview(URL.createObjectURL(file));
};
const handleVideoSelect = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setVideoFile(file);
  setVideoPreview(URL.createObjectURL(file));
};


  const publishProclamation = async () => {
  if (!auth.currentUser) return;

  if (
    !proclamation.trim() &&
    !imageFile &&
    !videoFile
  )
    return;

  try {
    setLoading(true);

    let mediaUrl = "";
    let mediaType = "";

    // Upload Image
    if (imageFile) {
      const imageRef = ref(
        storage,
        `proclamations/images/${Date.now()}-${imageFile.name}`
      );

      await uploadBytes(imageRef, imageFile);

      mediaUrl = await getDownloadURL(imageRef);

      mediaType = "image";
    }

    // Upload Video
    if (videoFile) {
      const videoRef = ref(
        storage,
        `proclamations/videos/${Date.now()}-${videoFile.name}`
      );

      await uploadBytes(videoRef, videoFile);

      mediaUrl = await getDownloadURL(videoRef);

      mediaType = "video";
    }

    await addDoc(collection(db, "proclamations"), {
  uid: auth.currentUser.uid,

  fullName: userData.fullName,

  kingdomName:
    kingdom?.kingdomName || userData.fullName,

  royalRank:
    kingdom?.royalRank || "Early Citizen",

  verified:
    kingdom?.verified || false,

  profileImage: userData.profileImage,

  text: proclamation,

  mediaUrl,

  mediaType,

  support: 0,

  discussions: 0,

  views: 0,

  supportedBy: [],

  createdAt: serverTimestamp(),
});

    setProclamation("");

    setImageFile(null);
    setVideoFile(null);

    setImagePreview("");
    setVideoPreview("");
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
       

   

  // Support a Proclamation

const sharePost = async (post: any) => {
  const shareData = {
    title: "Curved Kingdom",
    text: post.text,
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      console.log("Share cancelled");
    }
  } else {
    await navigator.clipboard.writeText(
      `${post.text}\n\n${window.location.href}`
    );

    alert("Link copied to clipboard!");
  }
};

const viewPost = async (postId: string) => {
  try {
    await updateDoc(doc(db, "proclamations", postId), {
      views: increment(1),
    });
  } catch (error) {
    console.error(error);
  }
};

const joinKingdom = async (kingdomId: string) => {
  // Placeholder for kingdom joining behavior.
};

const joinedKingdoms: string[] = [];

const supportPost = async (postId: string, post: any) => {
  if (!auth.currentUser) return;

  const supportRef = doc(
    db,
    "proclamations",
    postId,
    "supports",
    auth.currentUser.uid
  );
  const alreadySupported = supportedPosts.includes(postId);

  try {
    if (alreadySupported) {
      // Remove support
      await deleteDoc(supportRef);
      await deleteDoc(
        doc(db, "users", auth.currentUser.uid, "supports", postId)
      );

      await updateDoc(doc(db, "proclamations", postId), {
        support: increment(-1),
      });

      setSupportedPosts((prev) =>
        prev.filter((id) => id !== postId)
      );
    } else {
      // Add support
      await setDoc(supportRef, {
        uid: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });
      await setDoc(
        doc(db, "users", auth.currentUser.uid, "supports", postId),
        {
          supported: true,
        }
      );

      await updateDoc(doc(db, "proclamations", postId), {
  support: increment(1),
});

// Create notification for the proclamation owner
if (post.uid !== auth.currentUser.uid) {
  await createNotification(
    post.uid,
    auth.currentUser.uid,
    kingdom?.kingdomName || userData.fullName,
    "support",
    postId
  );
}



      setSupportedPosts((prev) => [...prev, postId]);
    }
  } catch (error) {
    console.error(error);
  }
};

  return (

    <main className="min-h-screen bg-linear-to-b from-black via-zinc-950 to-black text-white px-5 py-6">

      {/* Top Bar */}

      <header>
       <TopBar profileImage={userData.profileImage} />
        
      </header>
      {auth.currentUser && (
  <Link
    href={`/kingdom/${auth.currentUser.uid}`}
    className="mb-6 inline-block rounded-xl bg-yellow-500 px-5 py-3 font-bold text-black hover:bg-yellow-400"
  >
     View My Kingdom
  </Link>
)}

      {/* Welcome */}

      <motion.section>
        <WelcomeBanner
  fullName={
    kingdom?.kingdomName ||
    kingdom?.alias ||
    userData.fullName ||
    "Citizen"
  }
/>
      </motion.section>

      {/* Create Proclamation */}

      
      <ProclamationBox
  proclamation={proclamation}
  setProclamation={setProclamation}
  publishProclamation={publishProclamation}
  loading={loading}
  imagePreview={imagePreview}
  handleImageSelect={handleImageSelect}
  videoPreview={videoPreview}
  handleVideoSelect={handleVideoSelect}
/>

            {/* Kingdom Feed */}

      <section>

  <h2 className="text-2xl font-bold text-yellow-400 mb-5">
    Kingdom Feed
  </h2>

  {posts.length === 0 ? (

    <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 text-center text-gray-400">
      No proclamations yet.
      <br />
      Be the first citizen to publish one! 
    </div>

  ) : (

    <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id}>
          <FeedCard
  post={post}
  supportPost={supportPost}
  openDiscussion={openDiscussion}
  supportedPosts={supportedPosts}
  sharePost={sharePost}
  viewPost={viewPost}
/>

            {selectedPost === post.id && (
              <DiscussionPanel
                discussions={discussions}
                discussionText={discussionText}
                setDiscussionText={setDiscussionText}
                sendDiscussion={sendDiscussion}
              />
            )}
          </div>
        ))}
      </div>
  )}

</section>

    </main>

  );

}