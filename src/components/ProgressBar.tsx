"use client";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#EDE8E0] z-50">
      <div
        className="h-full bg-[#DA7756] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
