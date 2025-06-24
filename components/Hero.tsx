"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#EBECE1] to-white text-gray-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/logo.png"
          alt="Artistly Logo"
          width={150}
          height={150}
          className="mb-6"
        />
      </motion.div>

      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Artistly</h1>
        <p className="text-lg text-center max-w-md">
          Discover and connect with talented artists from around the world. Join
          us in celebrating creativity and artistry.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="/artists"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Artists
        </Link>
      </motion.div>
    </div>
  );
}
