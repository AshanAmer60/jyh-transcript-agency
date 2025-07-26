"use client";

import React from "react";
import { Mail, MapPin, PhoneCall, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";



// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-[#0F2549] to-[#1B263B] text-white py-16 px-6 md:px-12">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
                >
                    {/* About Section */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#3B82F6] tracking-tight">About JYH</h2>
                        <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
                            Delivering accurate, fast, and secure transcription solutions globally since 2018.
                        </p>
                        <div className="space-y-3 text-gray-300 text-sm">
                            <p className="font-semibold">JYH Transcript Agency</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="text-[#3B82F6]">•</span> UDYAM-MH-33-0590031
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#3B82F6]">•</span> MSME Registered, Govt. of India
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#3B82F6]">•</span> Confidentiality Guaranteed
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#3B82F6] tracking-tight">Our Services</h2>
                        <ul className="space-y-3 text-gray-200 text-sm">
                            {["Transcription", "Translation", "Data Collection", "Annotation", "Voice Over", "Subtitling"].map(
                                (service) => (
                                    <li key={service} className="flex items-center gap-2 group">
                                        <ChevronRight size={14} className="text-[#3B82F6] transition-transform group-hover:translate-x-1" />
                                        <span className="group-hover:text-[#3B82F6] transition-colors">{service}</span>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>

                    {/* Contact Info Section */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#3B82F6] tracking-tight">Contact Us</h2>
                        <ul className="space-y-4 text-gray-200 text-sm">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={18} className="text-[#3B82F6] mt-1 group-hover:text-blue-300 transition-colors" />
                                <span className="group-hover:text-blue-300 transition-colors">
                                    Mumbai, Maharashtra, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <PhoneCall size={18} className="text-[#3B82F6] group-hover:text-blue-300 transition-colors" />
                                <a href="tel:+919321417757" className="group-hover:text-blue-300 transition-colors">
                                    +91 93214 17757
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                {/* <MessageSquare size={18} /> */}
                                <FaWhatsapp className="text-[#3B82F6] group-hover:text-blue-300 transition-colors" size={18} />

                                <a
                                    href="https://wa.me/+917208933411"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group-hover:text-blue-300 transition-colors flex items-center gap-1"
                                >

                                    <span className="text-xs text-white px-1 rounded group-hover:text-blue-300 transition-colors">+91 72089 33411</span>
                                </a>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <Mail size={18} className="text-[#3B82F6] group-hover:text-blue-300 transition-colors" />
                                <a href="mailto:jyhlanguageservices@gmail.com" className="group-hover:text-blue-300 transition-colors">
                                    jyhlanguageservices@gmail.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#3B82F6] tracking-tight">Quick Links</h2>
                        <ul className="space-y-3 text-gray-200 text-sm">
                            {[
                                { label: "About Us", href: "#about" },
                                { label: "FAQ", href: "#faq" },
                                { label: "Our Work", href: "#services" },
                                { label: "Contact Us", href: "#contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 group hover:text-[#3B82F6] transition-colors duration-300"
                                    >
                                        <ChevronRight size={14} className="text-[#3B82F6] transition-transform group-hover:translate-x-1" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center text-gray-400 text-xs mt-12 border-t border-gray-700 pt-6"
                >
                    <p>© 2018 - {new Date().getFullYear()} JYH Transcript Agency. All rights reserved.</p>
                    <p className="mt-2">
                        Designed with <span className="text-[#3B82F6]">♥</span> for global communication
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;