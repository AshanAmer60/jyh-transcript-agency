"use client";
import { motion } from "framer-motion";

export default function FloatingShapes() {
    return (
        <div className="absolute inset-0">
            <motion.div
                className="w-10 h-10 bg-pink-500 rounded-full absolute top-20 left-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="w-6 h-6 bg-blue-400 rounded-full absolute top-60 left-40"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}
