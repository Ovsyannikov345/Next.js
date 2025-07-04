"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathmane = usePathname();

  const reviewId = pathmane.split("/")[4];

  return (
    <div>
      <h2>Review {reviewId} not found</h2>
    </div>
  );
}
