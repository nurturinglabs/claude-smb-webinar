"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 text-[11px] font-heading font-semibold px-3 py-1 rounded-md transition-all duration-200"
      style={{
        background: copied ? "#788C5D" : "#D97757",
        color: "#FAF9F5",
        cursor: "pointer",
        border: "none",
      }}
    >
      {copied ? "✓ Copied!" : "Copy"}
    </button>
  );
}
