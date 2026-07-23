"use client";

import { useState } from "react";

export default function SnapDemo() {
  const [snapped, setSnapped] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <span className="eyebrow text-paper-dim">
          Fr. 01 — {snapped ? "after" : "before"}
        </span>
        <button
          onClick={() => setSnapped((s) => !s)}
          className="group relative flex items-center gap-2 rounded-full border border-hair bg-panel px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-amber/60 cursor-pointer"
        >
          <span
            className={`relative flex h-2.5 w-2.5 items-center justify-center rounded-full ${
              snapped ? "bg-mint" : "bg-amber"
            }`}
          >
            <span
              className={`absolute inline-flex h-full w-full rounded-full ${
                snapped ? "bg-mint" : "bg-amber"
              } opacity-60 ${snapped ? "" : "animate-ping"}`}
            />
          </span>
          {snapped ? "View original" : "Snap it"}
        </button>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-hair bg-panel-2">
        <div
          className={`transition-opacity duration-500 ${
            snapped ? "opacity-0 absolute inset-0" : "opacity-100"
          }`}
        >
          <img src="/images/before.png" alt="Before XThreadShot" className="w-full h-auto block" />
        </div>

        <div
          className={`transition-opacity duration-500 ${
            snapped ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        >
          <img src="/images/after.png" alt="After XThreadShot" className="w-full h-auto block" />
        </div>
      </div>
    </div>
  );
}
