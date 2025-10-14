import React from "react";
import { Play } from "lucide-react";
import image from "../public/assets/angkorwat.png";

const ShowReel: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-24 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-90"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-bold uppercase tracking-wide">
          Our Showreel
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Experience our journey, our people, and our vision — captured in
          motion. A glimpse into what drives us forward every day.
        </p>
        <div className="relative mt-16 mx-auto max-w-4xl group">
          <div className="relative w-full h-80 md:h-[480px] overflow-hidden rounded-3xl shadow-2xl">
            <video
              id="company-showreel"
              src="/videos/showreel.mp4"
              poster={image.src}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>
            <button
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => {
                const video = document.getElementById(
                  "company-showreel"
                ) as HTMLVideoElement;
                if (video.paused) video.play();
                else video.pause();
              }}
            >
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/40 hover:bg-white/40 transition duration-300">
                <Play size={40} className="text-white" />
              </div>
            </button>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm uppercase tracking-wider">
            Corporate Video 2025 — Royal Vision in Motion
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowReel;
