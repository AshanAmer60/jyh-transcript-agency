'use client'
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, ShieldCheck, DollarSign, Globe, Users } from "lucide-react";

// Motion Variants for Smooth Animations
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
};

const WhyChooseUs = () => {
    return (
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#0A0F1D] to-[#1B263B] text-white">
            {/* Heading Section */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Why Choose <span className="text-blue-400">JYH Transcript Agency</span>?
                </h2>
                <p className="text-lg text-gray-300 mt-4">
                    We provide industry-leading transcription services that prioritize accuracy, speed, and security.
                    Our expert team ensures seamless and hassle-free solutions for businesses and individuals worldwide.
                </p>
            </motion.div>

            {/* Features Grid with Scroll Animation */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group flex flex-col items-center text-center space-y-4 p-6 bg-[#1E293B] rounded-2xl shadow-md transition-all duration-300 border border-gray-700 
                        hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#9333EA] hover:shadow-lg hover:shadow-blue-500/50"
                    >
                        {/* Centered Icon */}
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-md transition-all duration-300 
                        group-hover:bg-white group-hover:text-blue-500">
                            <feature.icon className="w-8 h-8" />
                        </div>

                        {/* Centered Text */}
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// Features List with Detailed Content
const features = [
    {
        title: "94%+ Accuracy",
        description: "Our advanced AI-powered transcription, combined with expert human review, ensures unparalleled accuracy in every transcript.",
        icon: CheckCircle
    },
    {
        title: "Fast Turnaround",
        description: "We offer rapid transcription services, delivering high-quality results within hours without compromising on precision.",
        icon: Clock
    },
    {
        title: "Data Security",
        description: "We prioritize confidentiality with end-to-end encryption and strict compliance to protect your sensitive information.",
        icon: ShieldCheck
    },
    {
        title: "Competitive Pricing",
        description: "Get transparent, competitive pricing with no hidden fees, ensuring the best value for your transcription needs.",
        icon: DollarSign
    },
    {
        title: "Multilingual Support",
        description: "We offer transcription services in multiple languages, ensuring accessibility and accuracy for global audiences.",
        icon: Globe
    },
    {
        title: "Trusted Worldwide",
        description: "Our services are relied upon by legal firms, media houses, and professionals across industries for high-quality transcription.",
        icon: Users
    },
];

export default WhyChooseUs;
