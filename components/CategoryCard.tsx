"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CategoryCardProps {
  imageSrc: string;
  label: string;
  delay?: number;
}

export default function CategoryCard({
  imageSrc,
  label,
  delay = 0,
}: CategoryCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      <Image
        src={imageSrc}
        alt={label}
        width={80}
        height={80}
        className="mb-3 object-contain rounded-md"
      />
      <p className="text-lg font-semibold text-gray-700">{label}</p>
    </motion.div>
  );
}
