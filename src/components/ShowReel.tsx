"use client";

import { Play, Pause } from "lucide-react";
import React, { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";

export default function ShowReel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayPause = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const message = isPlaying
        ? '{"event":"command","func":"pauseVideo","args":""}'
        : '{"event":"command","func":"playVideo","args":""}';
      iframe.contentWindow?.postMessage(message, "*");
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="showreel"
      className="relative min-h-screen bg-background pt-32 pb-24 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background Pattern - Same as FAQ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            Showreel
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">
            Our{" "}
            <span className="text-blue-600 dark:text-blue-400">Showreel</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experience our journey, our people, and our vision — captured in
            motion. A glimpse into what drives us forward every day.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative mx-auto max-w-4xl group">
          <div className="relative w-full h-80 md:h-[480px] overflow-hidden rounded-2xl shadow-2xl bg-card border border-border">
            <iframe
              ref={iframeRef}
              id="company-showreel"
              src="https://www.youtube.com/embed/s7KYcm6FM2s?enablejsapi=1&controls=1&rel=0"
              title="Company Showreel"
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Play Button Overlay (shows when not playing) */}
            {!isPlaying && (
              <>
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 group-hover:via-black/40 transition-all duration-500 pointer-events-none"></div>

                {/* Play Button */}
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center z-10"
                  aria-label="Play video"
                >
                  <div className="relative">
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 bg-blue-600/30 dark:bg-blue-400/30 rounded-full animate-ping"></div>

                    {/* Button */}
                    <div className="relative bg-white/20 backdrop-blur-md p-6 rounded-full border-2 border-white/40 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <Play size={40} className="text-white fill-white" />
                    </div>
                  </div>
                </button>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 pointer-events-none transition-opacity duration-500"></div>
              </>
            )}
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Corporate Video 2025 — Royal Vision in Motion
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/10 dark:bg-blue-400/10 rounded-full filter blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/10 dark:bg-purple-400/10 rounded-full filter blur-2xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
