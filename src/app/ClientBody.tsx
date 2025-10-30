"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    const originalClasses = document.body.className.split(' ').filter(cls => !cls.startsWith('extension-')); // Assuming extensions add classes starting with extension-
    document.body.className = "antialiased bg-white text-black";
  }, []);

  return <div className="antialiased">{children}</div>;
}
