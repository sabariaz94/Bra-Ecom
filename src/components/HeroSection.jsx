"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [skipIntro, setSkipIntro] = useState(false);

  return (
    <section className="relative h-[100vh] overflow-hidden text-center text-white">
      {/* Video Background */}
      {!skipIntro && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/pink-fabric.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-pink-900/40 z-10" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 max-w-3xl mx-auto px-4 py-32 md:py-40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Feel Confident. <br className="hidden md:block" /> Look Beautiful.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-pink-100 mt-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Discover perfectly fitting bras designed for elegance & comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <Link href="/products">
            <span className="inline-block bg-white text-pink-700 hover:bg-pink-100 px-8 py-3 rounded-full text-lg font-semibold shadow transition-all">
              Shop Collection
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Skip Intro Button */}
      {!skipIntro && (
        <button
          onClick={() => setSkipIntro(true)}
          className="absolute top-4 right-4 z-30 bg-white/60 hover:bg-white text-pink-800 font-semibold px-4 py-1 rounded-full shadow transition-all text-sm"
        >
          Skip Intro
        </button>
      )}
    </section>
  );
}

