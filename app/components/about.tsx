'use client'
import React from "react";
import Image from "next/image";
// import Robot from "../assets/robot-removebg-preview.png";
import Business from "../assets/businessyes-removebg-preview.png"

const AboutSection = () => {
    const features = [
        { title: "94%+ Accuracy", description: "Ensured by human expertise." },
        { title: "Fast Turnaround", description: "Get transcripts delivered on time." },
        { title: "Data Security", description: "Your privacy is our priority." },
        { title: "Trusted Worldwide", description: "Used by businesses, legal firms & media professionals." },
    ];

    return (
        <section className="py-16 px-6 md:px-12 bg-gray-100">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src={Business}
                        alt="About Us"
                        width={800}
                        height={800}
                        className="rounded-lg  w-[100%] sm:w-[80%] md:w-[75%] lg:w-full"
                    />
                </div>

                {/* Text Content */}
                <div className="text-left space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2549]">
                        Empowering Businesses with Precision & Accuracy
                    </h2>

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        At <span className="text-[#1E3A5F] font-semibold">JYH Transcription Agency</span>,
                        we specialize in delivering high-quality transcription services that blend <b>speed, accuracy, and security</b>.
                        Our expert-driven approach ensures seamless conversion of audio and video into readable text.
                    </p>

                    <h3 className="text-2xl font-semibold text-[#1E3A5F]">Why Choose Us?</h3>

                    {/* Left-aligned list on all devices */}
                    <ul className="text-base sm:text-lg text-gray-700 flex flex-col items-start sm:pl-6 space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3 w-full">
                                <svg className="w-6 h-6 flex-shrink-0 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                                <span className="flex-1"><span className="font-medium">{feature.title}:</span> {feature.description}</span>
                            </li>
                        ))}
                    </ul>




                </div>
            </div>
        </section>
    );
};

export default AboutSection;
