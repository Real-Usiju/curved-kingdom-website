"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReforgePreviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // YOUR EXISTING PAGE CODE GOES HERE
  return null;
}

export default function ReforgePreviewPage() {
  return (
    <Suspense fallback={null}>
      <ReforgePreviewContent />
    </Suspense>
  );
}