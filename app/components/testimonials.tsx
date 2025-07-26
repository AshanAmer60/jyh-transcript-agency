'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
        feedback: "JYH Transcription Agency provides top-notch transcription services. Their accuracy and fast turnaround saved us countless hours!",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "James Anderson",
        role: "CEO, Tech Solutions",
        feedback: "We've been using their services for months, and the quality is unmatched. Highly recommend for any business needs!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sophia Patel",
        role: "Legal Consultant",
        feedback: "Confidentiality and precision are critical for us, and JYH delivered beyond expectations. A truly reliable service!",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
    },
];

const TestimonialSection: React.FC = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-gray-100">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    What Our <span className="text-blue-600">Clients Say</span>
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                    Hear from our satisfied customers who trust JYH Transcription Agency.
                </p>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} delay={index * 0.2} />
                ))}
            </div>
        </section>
    );
};

// Define Props for TestimonialCard
interface TestimonialCardProps {
    testimonial: Testimonial;
    delay: number;
}

// Scroll-Animated Testimonial Card (No Scale on Scroll, Only on Hover)
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px 0px", once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300  flex flex-col items-center text-center 
            hover:scale-105 hover:shadow-xl transform transition-transform duration-300" // Scale-up only on hover
        >
            {/* Profile Image */}
            <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={500}
                height={500}
                className="w-20 h-20 rounded-full border-4 border-blue-500 mb-4"
            />

            {/* Stars */}
            <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-700 italic text-sm mb-4">{testimonial.feedback}</p>

            {/* Name and Role */}
            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-blue-500 text-sm">{testimonial.role}</p>
        </motion.div>
    );
};

export default TestimonialSection;
