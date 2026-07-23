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
          <div className="flex items-center justify-between border-b border-hair px-4 py-2 text-xs text-paper-dim">
            <span>home / for you / following</span>
            <span>bell · mail · more</span>
          </div>
          <div className="flex">
            <div className="hidden sm:flex w-28 shrink-0 flex-col gap-2 border-r border-hair p-3 text-[11px] text-paper-dim">
              <div className="h-2 w-16 rounded bg-hair" />
              <div className="h-2 w-20 rounded bg-hair" />
              <div className="h-2 w-14 rounded bg-hair" />
              <div className="h-2 w-20 rounded bg-hair" />
            </div>
            <div className="flex-1 p-4">
              <div className="flex gap-3">
                <div className="h-9 w-9 shrink-0 rounded-full bg-hair" />
                <div className="flex-1">
                  <div className="mb-1 flex gap-2">
                    <div className="h-2 w-24 rounded bg-hair" />
                    <div className="h-2 w-10 rounded bg-hair" />
                  </div>
                  <p className="text-sm leading-snug text-paper/90">
                    Shipped a feature I&apos;m genuinely proud of this week. Small
                    team, six days, zero sleep.
                  </p>
                  <div className="mt-3 flex gap-4 text-[11px] text-paper-dim">
                    <span>214 replies</span>
                    <span>1.2K reposts</span>
                    <span>8.4K likes</span>
                    <span>312K views</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-dashed border-ember/50 p-2 text-[11px] text-ember">
                Who to follow, trending now, promoted post…
              </div>
            </div>
            <div className="hidden md:block w-24 shrink-0 border-l border-hair p-3 text-[11px] text-paper-dim">
              <div className="mb-2 h-2 w-16 rounded bg-hair" />
              <div className="h-2 w-20 rounded bg-hair" />
            </div>
          </div>
        </div>

        <div
          className={`transition-opacity duration-500 ${
            snapped ? "opacity-100" : "opacity-0 absolute inset-0"
          }`}
        >
          <div className="flex items-center justify-center bg-[linear-gradient(135deg,#2a1f3d_0%,#12131a_60%)] p-10">
            <div className="w-full max-w-sm rounded-2xl bg-panel p-5 shadow-2xl">
              <div className="flex gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-amber to-ember" />
                <div>
                  <p className="text-sm font-semibold text-paper">Maya Chen</p>
                  <p className="text-xs text-paper-dim">@mayabuilds</p>
                </div>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-paper">
                Shipped a feature I&apos;m genuinely proud of this week. Small
                team, six days, zero sleep.
              </p>
              <p className="mt-4 text-xs text-paper-dim">9:41 AM · on X</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
