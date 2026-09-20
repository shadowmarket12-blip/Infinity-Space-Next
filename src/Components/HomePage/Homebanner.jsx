// src/app/HomeBanner.jsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";

export default function HomeBanner() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.loop = true;
    video.muted = true;
    video.volume = 1;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    playVideo();
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = !video.muted;

      if (!video.muted) {
        video.volume = 1;
        await video.play();
      }

      setIsMuted(video.muted);
    } catch (error) {
      console.log("Audio playback failed:", error);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/carosuelvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[-10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-green-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Interior Designers in Bhubaneswar Creating Thoughtfully Designed
            Spaces
          </motion.h1>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black shadow-lg"
              >
                Get Free Consultation
              </motion.button>
            </Link>

            <Link href="/services/overview">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md"
              >
                Explore Services
              </motion.button>
            </Link>

            {/* Sound Button */}
            <motion.button
              onClick={toggleSound}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
