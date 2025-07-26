"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, ChevronRight, X } from 'lucide-react'
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import { ServiceFeatureCard } from "../components/services/hero-feature-card"
import { ServiceTab } from "../components/services/service-tab"
import { ServiceCard } from "../components/services/service-card"
import { HeroSection } from "../components/services/hero-section"
import { SectionHeading } from "../components/services/section-heading"

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}

// Types for the data structures
interface Feature {
    title: string;
    desc: string;
    icon: string;
    color: string;
}

interface Service {
    title: string;
    desc: string;
    icon: string;
    color: string;
    features: string[];
    benefits: string;
}

interface TabContent {
    title: string;
    description: string;
    features: string[];
    image: string;
}

// Service Modal Component
interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
        >
            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 shadow-xl relative"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Modal Content */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                    {/* Features */}
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-left">Key Features</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1 text-left">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-gray-100 p-4 rounded-lg text-left">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h4>
                        <p className="text-gray-600 leading-relaxed">{service.benefits}</p>
                    </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={onClose}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Services() {
    const [activeTab, setActiveTab] = useState<"Accuracy" | "Speed" | "Security" | "Technology" | "Support">("Accuracy");
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const features: Feature[] = [
        {
            title: "Unrivaled Accuracy",
            desc: "99.9% accuracy through advanced quality assurance",
            icon: "Zap",
            color: "blue"
        },
        {
            title: "Top-Tier Security",
            desc: "Enterprise-grade encryption for your peace of mind",
            icon: "Lock",
            color: "green"
        },
        {
            title: "Expert Team",
            desc: "Certified linguists with industry expertise",
            icon: "Lightbulb",
            color: "amber"
        },
    ];

    const servicesList: Service[] = [
        {
            title: "Linguistic Services",
            desc: "Professional linguistic analysis and consulting",
            icon: "FileText",
            color: "blue",
            features: ["Syntax analysis", "Semantic processing", "Language consultation", "Cultural adaptation"],
            benefits: "Enhance communication effectiveness and ensure linguistic accuracy across all your projects."
        },
        {
            title: "Translation Services",
            desc: "Accurate translations across multiple languages",
            icon: "Globe",
            color: "green",
            features: ["40+ languages", "Certified translators", "Technical specialization", "Quick turnaround"],
            benefits: "Reach global audiences with precise, culturally appropriate translations."
        },
        {
            title: "Content Development Services",
            desc: "Custom content creation for your needs",
            icon: "PenTool",
            color: "amber",
            features: ["SEO optimization", "Brand voice alignment", "Multiple formats", "Editorial review"],
            benefits: "Engage your audience with high-quality, tailored content that drives results."
        },
        {
            title: "Transcription and Annotations Services",
            desc: "Precise audio-to-text conversion with annotations",
            icon: "Headphones",
            color: "purple",
            features: ["Multi-speaker identification", "Time-coding", "Custom annotations", "High accuracy"],
            benefits: "Transform audio content into actionable, searchable text with detailed annotations."
        },
        {
            title: "Website Localization Services",
            desc: "Adapt your website for global audiences",
            icon: "Globe",
            color: "indigo",
            features: ["UI translation", "Cultural adaptation", "SEO localization", "Technical integration"],
            benefits: "Expand your digital presence with a website optimized for international markets."
        },
        {
            title: "Interpretation Services",
            desc: "Real-time interpretation for meetings and events",
            icon: "MessageSquare",
            color: "pink",
            features: ["Simultaneous interpretation", "Conference support", "Multiple languages", "On-site/remote options"],
            benefits: "Facilitate seamless communication in real-time across language barriers."
        },
        {
            title: "Voice Over Services",
            desc: "Professional voice talent for your media",
            icon: "Mic",
            color: "red",
            features: ["Diverse voice talent", "Studio quality", "Script adaptation", "Multiple accents"],
            benefits: "Enhance your media with professional, engaging voice overs."
        },
        {
            title: "Data Annotation Services",
            desc: "Structured data labeling for AI/ML",
            icon: "Database",
            color: "cyan",
            features: ["Image annotation", "Text tagging", "Audio labeling", "Quality assurance"],
            benefits: "Power your AI models with accurately annotated, high-quality datasets."
        },
        {
            title: "Transcription Services",
            desc: "High-quality audio and video transcription",
            icon: "FileText",
            color: "teal",
            features: ["Verbatim transcription", "Time-stamping", "Multiple formats", "Fast delivery"],
            benefits: "Convert your multimedia content into precise, accessible text documents."
        },
    ];

    const tabContent: Record<"Accuracy" | "Speed" | "Security" | "Technology" | "Support", TabContent> = {
        "Accuracy": {
            title: "Precision Guaranteed",
            description: "Our multi-tier review process ensures 99.9% accuracy across all projects.",
            features: [
                "Multi-tier quality control",
                "Expert review process",
                "Context-aware results",
                "Specialized terminology"
            ],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
        },
        "Speed": {
            title: "Lightning-Fast Delivery",
            description: "Fast delivery without compromising quality, thanks to optimized workflows.",
            features: [
                "24-48 hour delivery",
                "Parallel processing",
                "Real-time tracking",
                "Scalable teams"
            ],
            image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=2070"
        },
        "Security": {
            title: "Ironclad Protection",
            description: "End-to-end encryption and strict protocols safeguard your data.",
            features: [
                "End-to-end encryption",
                "Secure transfers",
                "Confidentiality assured",
                "GDPR compliant"
            ],
            image: "https://images.unsplash.com/photo-1563986768494-0593a893f0a0?q=80&w=2070"
        },
        "Technology": {
            title: "Smart Innovation",
            description: "AI-enhanced tools combined with human expertise for superior results.",
            features: [
                "AI-assisted processing",
                "Translation memory",
                "Cloud management",
                "Speech recognition"
            ],
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070"
        },
        "Support": {
            title: "Always Here for You",
            description: "Round-the-clock assistance from our dedicated support team.",
            features: [
                "24/7 availability",
                "Dedicated managers",
                "Multilingual support",
                "Knowledge base"
            ],
            image: "https://images.unsplash.com/photo-1573164713988-73b7a1d59fca?q=80&w=2070"
        }
    };

    const techFeatures: string[] = [
        "AI-assisted transcription",
        "Translation memory tools",
        "Industry-specific databases",
        "Secure cloud platform",
        "Advanced speech recognition"
    ];

    const handleOpenModal = (serviceTitle: string) => {
        setActiveModal(serviceTitle);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* Key Features */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Why Choose Us"
                        title="Our Unique Advantages"
                        description="Discover what sets our services apart with our commitment to quality and innovation."
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {features.map((feature, index) => (
                            <ServiceFeatureCard key={index} feature={feature} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Feature Tabs */}
            <section className="py-20 lg:py-28 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Core Benefits"
                        title="The JYH Edge"
                        description="Explore our standout features that make us the preferred choice for language services."
                    />

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="flex flex-wrap border-b  border-gray-100">
                            {Object.keys(tabContent).map((tab) => (
                                <ServiceTab
                                    key={tab}
                                    tab={tab}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                            ))}
                        </div>

                        <motion.div
                            key={activeTab}
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                            className="p-6 md:p-8"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {tabContent[activeTab].title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {tabContent[activeTab].description}
                                    </p>
                                    <ul className="space-y-4">
                                        {tabContent[activeTab].features.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                                    <Image
                                        src={tabContent[activeTab].image || "/placeholder.svg"}
                                        alt={`${activeTab} feature`}
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-md w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section id="services-section" className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Our Services"
                        title="Comprehensive Solutions"
                        description="Explore our full range of professional language services."
                    >
                        <p className="text-center text-red-500 font-bold text-xl mt-4">
                            We Handle Government Projects
                        </p>
                    </SectionHeading>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {servicesList.map((service, index) => (
                            <ServiceCard
                                key={index}
                                service={service}
                                onLearnMore={() => handleOpenModal(service.title)}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Our Technology"
                        title="Advanced Tools"
                        description="Cutting-edge technology meets human expertise for exceptional results."
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeIn} className="order-2 md:order-1 space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Tech-Enhanced Expertise</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We blend AI precision with human insight for accurate, context-aware results.
                            </p>
                            <ul className="space-y-4">
                                {techFeatures.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                                            <Check className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                            >
                                Our Process
                                <ArrowRight size={16} />
                            </motion.button>
                        </motion.div>
                        <motion.div variants={fadeIn} className="order-1 md:order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                                alt="Advanced Technology"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Try JYH Today</h2>
                        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                            Join countless satisfied clients who trust us for their language needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Get Started
                                <ArrowRight size={18} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Contact Us
                                <ChevronRight size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Modal */}
            {activeModal && (
                <ServiceModal
                    isOpen={!!activeModal}
                    onClose={handleCloseModal}
                    service={servicesList.find(s => s.title === activeModal) as Service}
                />
            )}

            <Footer />
        </div>
    )
}