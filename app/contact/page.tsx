"use client"

import { motion } from "framer-motion";
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useState } from "react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    },
};

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                        <h1 className="text-4xl font-bold text-[#0F2549]">Get in <span className="text-[#3B82F6]">Touch</span></h1>
                        <p className="text-lg text-gray-600 mt-4">We’d love to hear from you! Reach out with any questions.</p>
                    </motion.div>
                </div>
            </section>
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div variants={fadeIn} className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0F2549]">Contact Information</h2>
                        <p className="text-gray-600">Feel free to reach out through any of the options below.</p>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 bg-white shadow-lg p-5 rounded-lg border border-gray-100">
                                <Mail className="text-[#3B82F6]" size={24} />
                                <div>
                                    <p className="text-lg font-semibold">Email</p>
                                    <p className="text-gray-600">jyhlanguageservices@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 bg-white shadow-lg p-5 rounded-lg border border-gray-100">
                                <Phone className="text-[#3B82F6]" size={24} />
                                <div>
                                    <p className="text-lg font-semibold">Phone</p>
                                    <p className="text-gray-600">+91 9321417757</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 bg-white shadow-lg p-5 rounded-lg border border-gray-100">
                                <FaWhatsapp className="text-[#3B82F6]" size={24} />
                                <div>
                                    <p className="text-lg font-semibold">WhatsApp</p>
                                    <p className="text-gray-600">+91 9321417757</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn} className="bg-white p-8 shadow-lg rounded-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#0F2549] mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#0F2549] to-[#3B82F6] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}