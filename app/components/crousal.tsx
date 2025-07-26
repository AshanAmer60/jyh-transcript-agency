"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

// Define Testimonial Type
interface Testimonial {
    name: string;
    role: string;
    feedback: string;
    image: string;
}

// Testimonial Data
const testimonials: Testimonial[] = [
    {
        name: "Emily Carter",
        role: "Marketing Director",
        feedback:
            "JYH Transcription Agency provides top-notch transcription services. Their accuracy and fast turnaround saved us countless hours!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "James Anderson",
        role: "CEO, Tech Solutions",
        feedback:
            "We've been using their services for months, and the quality is unmatched. Highly recommend for any business needs!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sophia Patel",
        role: "Legal Consultant",
        feedback:
            "Confidentiality and precision are critical for us, and JYH delivered beyond expectations. A truly reliable service!",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
];

const TestimonialSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section className="py-16 px-6 md:px-12 bg-white">
            {/* Heading Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    What Our <span className="text-blue-500">Clients Say</span>
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                    Hear from our satisfied customers who trust JYH Transcription Agency.
                </p>
            </motion.div>

            {/* Testimonial Slider */}
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border py-7 border-gray-300 text-center overflow-hidden relative h-[300px] flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }} // Slide in from right
                        animate={{ opacity: 1, x: 0 }} // Center position
                        exit={{ opacity: 0, x: -100 }} // Slide out to left
                        transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth animation
                        className="absolute w-full"
                    >
                        {/* Profile Image */}
                        <div className="relative flex justify-center">
                            <Image
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                width={100}
                                height={100}
                                className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
                            />
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center space-x-1 my-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400" />
                            ))}
                        </div>

                        {/* Feedback */}
                        <p className="text-gray-700 italic text-base leading-relaxed max-w-lg mx-auto">
                            {testimonials[currentIndex].feedback}
                        </p>

                        {/* Name and Role */}
                        <h3 className="text-lg font-semibold text-gray-900 mt-4">
                            {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-blue-500 text-sm">{testimonials[currentIndex].role}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TestimonialSection;
