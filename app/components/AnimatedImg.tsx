"use client";
import { motion } from "framer-motion";

export default function AnimatedImg({ src, alt, className = "" }) {
    return (
        <motion.img 
            src={src} 
            alt={alt} 
            className={`bg-white bg-opacity-20 rounded-lg shadow-lg ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        />
    );
}