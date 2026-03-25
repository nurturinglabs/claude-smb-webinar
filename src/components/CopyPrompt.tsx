"use client";

import { useState } from "react";

interface CopyPromptProps {
  snippet: string;
  fullPrompt: string;
}

export default function CopyPrompt({ snippet, fullPrompt }: CopyPromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <span className="text-xs text-[#6B6B65] font-body">Prompt preview</span>
      <div className="relative bg-[#191918] text-[#FAF9F7] rounded-lg px-4 py-3 text-xs font-mono max-w-xs whitespace-pre-line leading-relaxed group">
        {snippet}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-[#DA7756] hover:bg-[#c4654a] text-white text-[10px] font-body font-medium px-2.5 py-1 rounded-md transition-all duration-200"
        >
          {copied ? "✓ Copied!" : "Copy prompt"}
        </button>
      </div>
    </div>
  );
}
