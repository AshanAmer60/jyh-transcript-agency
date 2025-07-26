"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/button";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState("Transcription");

    return (
        <div>
            <Navbar />
            <section className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 pb-24 pt-16 md:pt-20">
                {/* Hero Section with Parallax Effect */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069')",
                            backgroundAttachment: "fixed",
                        }}
                    ></div>
                    <div className="relative z-20 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
                            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-slate-800/80 text-white">
                                Government Certified
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                About <span className="text-blue-400">JYH Transcript Agency</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                                We are a government-certified agency delivering world-class transcription, translation, and language
                                services with precision and passion.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    text="Our Story"
                                    onClick={() => document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" })}
                                />
                                <Button
                                    text="Meet Our Team"
                                    onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white py-12 shadow-sm relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        >
                            {[
                                { number: "7+", label: "Years Experience", icon: "🕒" },
                                { number: "50+", label: "Projects Completed", icon: "🏆" },
                                { number: "20+", label: "Global Clients", icon: "🌎" },
                                { number: "25+", label: "Expert Linguists", icon: "👥" },
                            ].map((stat, index) => (
                                <motion.div key={index} variants={scaleUp} className="flex flex-col items-center">
                                    <div className="bg-blue-50 p-3 rounded-full mb-4">
                                        <span className="text-2xl">{stat.icon}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900">{stat.number}</h3>
                                    <p className="text-slate-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div id="mission" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeIn} className="space-y-6 order-2 lg:order-1">
                            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                                Our Mission
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                                Bridging Communication Gaps Globally
                            </h2>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                At JYH Transcript Agency, our mission is to bridge communication gaps globally by providing accurate,
                                fast, and secure language solutions. Certified under MSME, Government of India, we uphold the highest
                                standards of quality and confidentiality.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                We believe that language should never be a barrier to understanding. Our team of expert linguists and
                                transcribers work tirelessly to ensure that your message is conveyed accurately across languages and
                                formats.
                            </p>
                            <div className="pt-4">
                                <Button
                                    text="Our Values"
                                    onClick={() => document.getElementById("values")?.scrollIntoView({ behavior: "smooth" })}
                                />
                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn} className="relative order-1 lg:order-2">
                            <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg transform rotate-3"></div>
                            <div className="absolute inset-0 bg-slate-900 opacity-10 rounded-lg transform -rotate-3"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                                alt="Team Collaboration"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Our Values */}
                <div id="values" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Our Values
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            What Drives Us Every Day
                        </h2>
                        <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                            Our core values shape everything we do, from how we interact with clients to how we approach each project.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "Accuracy",
                                description:
                                    "We are committed to delivering error-free, precise translations and transcriptions that capture the nuance and context of the original content.",
                                icon: "🎯",
                            },
                            {
                                title: "Confidentiality",
                                description:
                                    "We treat all client information with the utmost security and privacy, ensuring your sensitive data remains protected at all times.",
                                icon: "🔒",
                            },
                            {
                                title: "Excellence",
                                description:
                                    "We strive for excellence in every project, continuously improving our processes and skills to deliver superior results.",
                                icon: "✨",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-white rounded-xl shadow-md p-6 border border-slate-100"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-slate-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Our Services */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Our Services
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Comprehensive Language Solutions
                        </h2>
                        <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                            Explore our range of professional services designed to meet all your language and transcription needs.
                        </p>
                    </motion.div>

                    <div className="w-full">
                        <div className="grid w-full grid-cols-3 mb-8 border rounded-lg overflow-hidden">
                            {["Transcription", "Translation", "Interpretation"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-2 px-4 text-center font-medium ${activeTab === tab ? "bg-blue-50 border-b-2 border-blue-500" : "border-b-2 border-transparent hover:bg-slate-100"} focus:outline-none`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        >
                            <div>
                                <Image
                                    src={
                                        activeTab === "Transcription"
                                            ? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072"
                                            : activeTab === "Translation"
                                                ? "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973"
                                                : "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
                                    }
                                    alt={`${activeTab} Services`}
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-slate-900 capitalize">Professional {activeTab} Services</h3>
                                <p className="text-slate-700">
                                    {activeTab === "Transcription"
                                        ? "Our expert transcribers convert audio and video content into accurate written text, with specialized services for legal, medical, and academic fields."
                                        : activeTab === "Translation"
                                            ? "We provide precise translation services across multiple languages, ensuring your message retains its meaning and impact across cultural boundaries."
                                            : "Our interpretation services facilitate real-time communication between parties speaking different languages, available for conferences, meetings, and events."}
                                </p>
                                <ul className="space-y-2">
                                    {(activeTab === "Transcription"
                                        ? ["Audio to text conversion", "Video transcription", "Verbatim transcription"]
                                        : activeTab === "Translation"
                                            ? ["Document translation", "Website localization", "Marketing content translation"]
                                            : ["Conference interpretation", "Business meeting interpretation", "Remote interpretation services"]
                                    ).map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-blue-600 mr-2">→</span>
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button text="Learn More" onClick={() => { }} />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Team Section */}
                <div id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Our Team
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Meet the Experts Behind Our Success
                        </h2>
                        <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                            Our diverse team of language specialists, transcribers, and industry experts work together to deliver
                            exceptional results.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                name: "Jayesh Prajapati",
                                role: "Founder & CEO",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
                            },
                            // {
                            //     name: "Maheen Ashan",
                            //     role: "Lead Transcriber",
                            //     img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
                            // },
                            // {
                            //     name: "Sohail Ahmad",
                            //     role: "Language Specialist",
                            //     img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
                            // },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                <div className="relative">
                                    <Image
                                        src={member.img || "/placeholder.svg"}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                </div>
                                <div className="p-6 relative -mt-16 bg-white rounded-t-xl">
                                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                                    <p className="text-slate-600 mb-4">{member.role}</p>
                                    <p className="text-slate-700">
                                        With over 10 years of experience in the industry, {member.name.split(" ")[0]} brings exceptional
                                        expertise and passion to every project.
                                    </p>
                                    <div className="mt-4 flex space-x-3">
                                        {["LinkedIn", "Twitter", "Email"].map((social, i) => (
                                            <button key={i} className="text-sm text-blue-600 hover:text-blue-800">
                                                {social}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Testimonials */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Testimonials
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">What Our Clients Say</h2>
                        <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our services.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                quote:
                                    "JYH Transcript Agency delivered our project ahead of schedule with impeccable accuracy. Their attention to detail is unmatched.",
                                author: "Michael Chen",
                                company: "Global Research Institute",
                                rating: 5,
                            },
                            {
                                quote:
                                    "Working with JYH has been a game-changer for our international communications. Their translations capture not just the words, but the cultural nuances.",
                                author: "Sarah Williams",
                                company: "Innovate Technologies",
                                rating: 5,
                            },
                            {
                                quote:
                                    "The team at JYH provided exceptional service for our conference interpretation needs. Professional, reliable, and highly skilled.",
                                author: "David Rodriguez",
                                company: "International Forum",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                className="bg-white rounded-xl shadow-md p-6 border border-slate-100"
                            >
                                <div className="flex items-center mb-4">
                                    {Array(testimonial.rating)
                                        .fill(0)
                                        .map((_, i) => (
                                            <span key={i} className="text-yellow-400">
                                                ★
                                            </span>
                                        ))}
                                </div>
                                <p className="text-slate-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                                <div className="flex items-center">
                                    <div className="bg-slate-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <span className="text-slate-600 font-semibold">{testimonial.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">{testimonial.author}</h4>
                                        <p className="text-slate-600 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Section */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="relative px-6 py-16 sm:px-12 lg:px-16">
                            <div className="absolute inset-0 opacity-10">
                                <svg className="h-full w-full" viewBox="0 0 800 800">
                                    <path
                                        d="M435.5,160.5Q432,321,271.5,323.5Q111,326,110.5,488Q110,650,272.5,650.5Q435,651,435.5,488Q436,325,598.5,323.5Q761,322,598,160.5Q435,1,435.5,160.5Z"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="15"
                                    ></path>
                                </svg>
                            </div>
                            <div className="relative z-10 text-center">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">Ready to Work With Us?</h2>
                                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                    Partner with a trusted, government-certified agency for all your transcription and language needs. Let&apos;s
                                    start a conversation today.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button text="Contact Us" onClick={() => { }} />
                                    <Button text="Request a Quote" onClick={() => { }} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}