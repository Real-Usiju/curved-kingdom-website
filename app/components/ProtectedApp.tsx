"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "../../lib/firebase";

type ProtectedAppProps = {
  children: React.ReactNode;
};

export default function ProtectedApp({
  children,
}: ProtectedAppProps) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser);
          setCheckingAuth(false);
        } else {
          setUser(null);
          setCheckingAuth(false);
          router.replace("/register");
        }
      }
    );

    return () => unsubscribe();
  }, [router]);

  /*
   * While Firebase is checking the saved session,
   * don't redirect anywhere yet.
   */
  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-yellow-400/20 border-t-yellow-400" />

          <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] text-yellow-400">
            Entering the Kingdom
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Restoring your Royal Identity...
          </p>
        </div>
      </main>
    );
  }

  /*
   * If there is no authenticated citizen,
   * don't render the protected app.
   */
  if (!user) {
    return null;
  }

  return <>{children}</>;
}