"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Button from "./button";
import Hero from "../assets/heromore1.png";

// Motion Variants for Floating Animations
const floatingVariants = {
    animate: {
        y: [0, 15, 0],
        transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    },
};

const rotatingVariants = {
    animate: {
        rotate: [0, 360],
        transition: { duration: 8, repeat: Infinity, ease: "linear" },
    },
};

const HeroSection = () => {
    const router = useRouter();
    return (
        <header className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12 w-full max-w-7xl mx-auto overflow-hidden">
            {/* Background Moving Elements */}
            <motion.div
                variants={rotatingVariants}
                animate="animate"
                className="absolute top-10 sm:top-16 left-5 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500 rounded-full opacity-20 blur-xl hidden sm:block"
            ></motion.div>

            <motion.div
                variants={rotatingVariants}
                animate="animate"
                className="absolute bottom-10 sm:bottom-16 right-5 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 bg-purple-500 rounded-full opacity-20 blur-xl hidden sm:block"
            ></motion.div>

            {/* Floating Squares */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-1/4 left-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-red-500 opacity-30 rotate-12 hidden md:block"
            ></motion.div>

            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-1/4 right-1/4 w-10 sm:w-14 h-10 sm:h-14 bg-green-500 opacity-30 rotate-45 hidden md:block"
            ></motion.div>

            {/* Thin Floating Lines */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-6 sm:top-10 right-10 sm:right-20 w-16 sm:w-24 h-1 sm:h-2 bg-yellow-400 opacity-40 rotate-12 hidden sm:block"
            ></motion.div>

            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-6 sm:bottom-10 left-10 sm:left-20 w-20 sm:w-32 h-1 sm:h-2 bg-pink-400 opacity-40 rotate-[-12deg] hidden sm:block"
            ></motion.div>

            {/* Animated Arrow Pointing to Button */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-20 sm:bottom-32 left-1/2 transform -translate-x-1/2 lg:left-auto lg:bottom-auto lg:top-[50%] lg:right-10"
            >
                <ChevronDown className="w-8 sm:w-12 h-8 sm:h-12 text-blue-600 animate-bounce" />
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-center lg:text-left max-w-lg px-4 sm:px-0"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2549] leading-tight">
                    Professional <span className="text-[#1E3A5F]">Transcription Services</span>
                </h1>
                <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">
                    We provide accurate, fast, and secure transcription solutions for businesses and individuals worldwide.
                </p>
                <div className="mt-4 sm:mt-6 relative">
                    <Button text="Contact Us" onClick={() => router.push("#contact")} />
                </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6 lg:mb-0"
            >
                <Image src={Hero} alt="AI Transcription" width={800} height={800} priority />
            </motion.div>
        </header>
    );
};

export default HeroSection;