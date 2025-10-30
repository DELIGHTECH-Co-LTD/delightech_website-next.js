"use client";

import { Play, Pause } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Particles } from "./ui/shadcn-io/particles";

export default function ShowReel() {
  const t = useTranslations("Showreel");
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to extract YouTube video ID from embed URL
  const getYouTubeVideoId = (embedUrl: string) => {
    const match = embedUrl.match(/\/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (
    embedUrl: string,
    quality: "maxresdefault" | "hqdefault" = "maxresdefault"
  ) => {
    const videoId = getYouTubeVideoId(embedUrl);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
      : null;
  };

  const videos = [
    {
      title: t("video1_title"),
      description: t("video1_description"),
      embedUrl: "https://www.youtube.com/embed/s7KYcm6FM2s?si=AR62As_8yzdNOso3",
    },
    {
      title: t("video2_title"),
      description: t("video2_description"),
      embedUrl: "https://www.youtube.com/embed/WnVpIVK_3Sc?si=-itkEIYTU7RYJpAE",
    },
    {
      title: t("video3_title"),
      description: t("video3_description"),
      embedUrl: "https://www.youtube.com/embed/q2hlBgGKDzM?si=pN3_FLcaMURW0I_M",
    },
    {
      title: t("video4_title"),
      description: t("video4_description"),
      embedUrl: "https://www.youtube.com/embed/Yw6aF_YGlFo?si=_J6AIxcyETZtMNI2",
    },
  ];

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

  const handleVideoSelect = (index: number) => {
    setActiveVideoIndex(index);
    setIsPlaying(false);
  };

  return (
    <section
      id="showreel"
      className="relative min-h-screen bg-background py-24 px-6 lg:px-20 overflow-hidden"
    >
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header with USAL fade-up animation */}
        <div className="text-center mb-16" data-usal="fade-u duration-1000">
          <Badge
            variant="secondary"
            className="mb-4 text-sm uppercase tracking-wider"
          >
            {t("badge")}
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase"
            data-usal="fade-u duration-1000 delay-200"
          >
            {t("title")}{" "}
            <span className="text-blue-700 dark:text-blue-700">
              {t("title_highlight")}
            </span>
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            data-usal="fade-u duration-1000 delay-400"
          >
            {t("description")}
          </p>
        </div>

        {/* Video Container with zoom-in animation */}
        <div
          className="relative mx-auto group"
          data-usal="zoomin duration-1200 delay-600"
        >
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl shadow-blue-500/25 bg-card border border-border">
            <iframe
              ref={iframeRef}
              id="company-showreel"
              src={videos[activeVideoIndex].embedUrl}
              title={videos[activeVideoIndex].title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Play Button Overlay (shows when not playing) */}
            {!isPlaying && (
              <>
                {/* Video Overlay - Team style gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>

                {/* Play Button */}
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center z-10"
                  aria-label="Play video"
                >
                  <div className="relative">
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 bg-blue-600/30 dark:bg-blue-400/30 rounded-full animate-ping"></div>

                    {/* Button - Enhanced Team style */}
                    <div className="relative bg-blue-600 dark:bg-blue-500 p-6 rounded-full border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <Play size={40} className="text-white fill-white" />
                    </div>
                  </div>
                </button>

                {/* Team-style Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none transition-opacity duration-500"></div>
              </>
            )}
          </div>

          {/* Caption with Team-style decorative line */}
          <div
            className="mt-6 text-center"
            data-usal="fade-u duration-800 delay-800"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {videos[activeVideoIndex].title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {videos[activeVideoIndex].description}
            </p>
            <div className="w-16 h-[2px] bg-blue-600 dark:bg-blue-400 mx-auto group-hover:w-32 transition-all duration-300"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/10 dark:bg-blue-400/10 rounded-full filter blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/10 dark:bg-purple-400/10 rounded-full filter blur-2xl pointer-events-none"></div>
        </div>

        {/* Video Playlist with staggered animations */}
        <div className="mt-16">
          {/* Video Thumbnails Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => handleVideoSelect(index)}
                data-usal={`fade-u duration-800 delay-${1000 + index * 150}`}
                className={`group relative rounded-xl overflow-hidden transition-all duration-500 ${
                  activeVideoIndex === index
                    ? "ring-2 ring-blue-600 dark:ring-blue-400 scale-105"
                    : "hover:scale-105 hover:-translate-y-1"
                }`}
              >
                {/* Thumbnail Container */}
                <div className="relative w-full h-32 overflow-hidden bg-muted">
                  {getYouTubeThumbnail(video.embedUrl) ? (
                    <Image
                      src={getYouTubeThumbnail(video.embedUrl)!}
                      alt={`${video.title} thumbnail`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      onError={(e) => {
                        // Fallback to lower quality thumbnail
                        const fallbackSrc = getYouTubeThumbnail(
                          video.embedUrl,
                          "hqdefault"
                        );
                        if (fallbackSrc) {
                          e.currentTarget.src = fallbackSrc;
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
                  )}

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`rounded-full p-2 transition-all duration-300 ${
                        activeVideoIndex === index
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-800 group-hover:bg-white group-hover:scale-110"
                      }`}
                    >
                      <Play size={16} className="fill-current" />
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeVideoIndex === index && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        Playing
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-3 text-left bg-card border border-border rounded-b-xl">
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
