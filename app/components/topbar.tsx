"use client";

import React from "react";
import { Phone } from "lucide-react"; // From lucide-react
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from react-icons
import Button from "./button";
const TopBar = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div className="fixed inset-x-0 top-0 bg-[#0F2549] text-white py-2 z-50 pl-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-2 sm:space-y-0">
                {/* Phone Numbers */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm">
                    {/* Phone Number with Call Icon */}
                    <a
                        href="tel:+91 9321417757"
                        className="flex items-center space-x-1 sm:space-x-2 hover:text-gray-300 transition-colors"
                    >
                        <Phone size={14} className="sm:size-5" />
                        <span className="whitespace-nowrap">+91 9321417757</span>
                    </a>

                    {/* Phone Number with WhatsApp Icon */}
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 sm:space-x-2 hover:text-gray-300 transition-colors"
                    >
                        <FaWhatsapp size={14} className="sm:size-5" />
                        <span className="whitespace-nowrap">+91 72089 33411</span>
                    </a>
                </div>
                <Button text="Get Started" onClick={() => scrollToSection("contact")} />
            </div>
        </div>
    );
};

export default TopBar;