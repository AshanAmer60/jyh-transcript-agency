"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, ChevronRight, Lightbulb, Lock, Zap } from 'lucide-react'
import { useRouter } from "next/navigation" // Import useRouter for navigation
import Navbar from "../components/Navbar"
import Footer from "../components/footer"

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}

export default function Features() {
    const router = useRouter() // Initialize router for navigation
    const [activeTab, setActiveTab] = useState("Accuracy")

    const handleClickToContact = () => {
        // Navigate to the contact page route
        router.push("/contact")
    }


    return (
        <div className="overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2549]/5 to-[#3B82F6]/5 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-center"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-blue-100 text-blue-800">
                            Our Features
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#0F2549] mb-6">
                            Why Choose <span className="text-[#3B82F6]">JYH Transcript Agency</span>
                        </h1>
                        <p className="text-lg text-[#1E3A5F] mb-8 max-w-3xl mx-auto">
                            Discover the unique features and benefits that set us apart from other transcription and translation services.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="bg-gradient-to-r from-[#0F2549] to-[#3B82F6] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                                onClick={handleClickToContact}
                            >
                                Get Started
                                <ArrowRight size={16} />
                            </button>
                            <button className="bg-white text-[#0F2549] border border-[#0F2549] px-6 py-3 rounded-full font-medium hover:bg-[#0F2549]/5 transition-all duration-300 flex items-center gap-2">
                                Learn More
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-blue-100 text-blue-800">
                            Key Features
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2549] mb-4">
                            What Makes Us Different
                        </h2>
                        <p className="text-[#1E3A5F] text-lg max-w-3xl mx-auto">
                            Our commitment to excellence is reflected in every aspect of our service.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "Accuracy & Precision",
                                description: "Our rigorous quality control process ensures 99.9% accuracy in all transcriptions and translations.",
                                icon: <Zap className="h-6 w-6 text-blue-600" />,
                                color: "blue"
                            },
                            {
                                title: "Security & Confidentiality",
                                description: "Your data is protected with enterprise-grade encryption and strict confidentiality protocols.",
                                icon: <Lock className="h-6 w-6 text-green-600" />,
                                color: "green"
                            },
                            {
                                title: "Expert Linguists",
                                description: "Our team consists of certified professionals with specialized industry knowledge.",
                                icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
                                color: "amber"
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-full"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <div className={`bg-${feature.color}-50 p-3 rounded-full w-fit mb-4`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0F2549] mb-2">{feature.title}</h3>
                                    <p className="text-[#1E3A5F]/80 mb-4 flex-grow">{feature.description}</p>
                                    <button className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300 mt-auto">
                                        Learn more <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Feature Tabs */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-12"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-blue-100 text-blue-800">
                            Our Advantages
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2549] mb-4">
                            The JYH Difference
                        </h2>
                        <p className="text-[#1E3A5F] text-lg max-w-3xl mx-auto">
                            Explore the unique advantages that make us the preferred choice for language services.
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="flex flex-wrap border-b">
                            {["Accuracy", "Speed", "Security", "Technology", "Support"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-4 px-6 font-medium transition-colors duration-200 ${activeTab === tab
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-[#1E3A5F]/70 hover:text-[#1E3A5F]"
                                        }`}
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
                            className="p-6 md:p-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0F2549] mb-4">
                                        {activeTab === "Accuracy" && "Unmatched Accuracy"}
                                        {activeTab === "Speed" && "Rapid Turnaround Times"}
                                        {activeTab === "Security" && "Enterprise-Grade Security"}
                                        {activeTab === "Technology" && "Cutting-Edge Technology"}
                                        {activeTab === "Support" && "24/7 Customer Support"}
                                    </h3>
                                    <p className="text-[#1E3A5F]/80 mb-6">
                                        {activeTab === "Accuracy" && "We employ a rigorous multi-tier review process to ensure 99.9% accuracy in all our transcriptions and translations. Our quality assurance team verifies every project before delivery."}
                                        {activeTab === "Speed" && "We understand that time is critical. Our streamlined workflows and dedicated team enable us to deliver projects faster than industry standards without compromising quality."}
                                        {activeTab === "Security" && "Your data security is our priority. We use end-to-end encryption, secure servers, and strict access controls to protect your confidential information."}
                                        {activeTab === "Technology" && "We leverage AI-assisted tools and specialized software to enhance efficiency while maintaining the human touch that ensures contextual accuracy."}
                                        {activeTab === "Support" && "Our dedicated support team is available 24/7 to address your queries and provide assistance throughout your project journey."}
                                    </p>
                                    <ul className="space-y-3">
                                        {(activeTab === "Accuracy" ? [
                                            "Multi-tier quality control process",
                                            "Subject matter expert review",
                                            "Context-aware translations",
                                            "Specialized terminology management"
                                        ] : activeTab === "Speed" ? [
                                            "Expedited delivery options",
                                            "Parallel processing workflows",
                                            "Real-time project tracking",
                                            "Scalable resource allocation"
                                        ] : activeTab === "Security" ? [
                                            "End-to-end encryption",
                                            "Secure file transfer protocols",
                                            "Confidentiality agreements",
                                            "GDPR compliant processes"
                                        ] : activeTab === "Technology" ? [
                                            "AI-assisted transcription",
                                            "Translation memory tools",
                                            "Cloud-based project management",
                                            "Advanced speech recognition"
                                        ] : [
                                            "24/7 customer service",
                                            "Dedicated project managers",
                                            "Multilingual support team",
                                            "Comprehensive knowledge base"
                                        ]).map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-[#1E3A5F]/80">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-20"></div>
                                    <Image
                                        src={
                                            activeTab === "Accuracy"
                                                ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
                                                : activeTab === "Speed"
                                                    ? "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=2070"
                                                    : activeTab === "Security"
                                                        ? "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070"
                                                        : activeTab === "Technology"
                                                            ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
                                                            : "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
                                        }
                                        alt={activeTab}
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-lg relative z-10 w-full h-auto"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-blue-100 text-blue-800">
                            Comparison
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2549] mb-4">
                            How We Compare
                        </h2>
                        <p className="text-[#1E3A5F] text-lg max-w-3xl mx-auto">
                            See how JYH Transcript Agency stacks up against other services in the industry.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="overflow-x-auto"
                    >
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-4 text-left bg-blue-50 rounded-tl-lg"></th>
                                    <th className="p-4 text-center bg-blue-50 font-bold text-[#0F2549]">JYH Transcript Agency</th>
                                    <th className="p-4 text-center bg-gray-50 font-bold text-[#1E3A5F]/80">Other Services</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Government Certification", jyh: true, others: false },
                                    { feature: "Accuracy Rate", jyh: "99.9%", others: "95-97%" },
                                    { feature: "Turnaround Time", jyh: "24-48 hours", others: "3-5 days" },
                                    { feature: "Subject Matter Experts", jyh: true, others: false },
                                    { feature: "Confidentiality Agreement", jyh: true, others: "Varies" },
                                    { feature: "24/7 Support", jyh: true, others: false },
                                    { feature: "Revision Rounds", jyh: "Unlimited", others: "Limited" },
                                ].map((row, index, array) => (
                                    <tr key={index} className={index === array.length - 1 ? "" : "border-b border-gray-100"}>
                                        <td className="p-4 font-medium text-[#0F2549]">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {typeof row.jyh === "boolean" ? (
                                                row.jyh ? (
                                                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                                                ) : (
                                                    <span className="text-red-500">✕</span>
                                                )
                                            ) : (
                                                <span className="text-[#1E3A5F] font-medium">{row.jyh}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.others === "boolean" ? (
                                                row.others ? (
                                                    <Check className="h-5 w-5 text-green-600 mx-auto" />
                                                ) : (
                                                    <span className="text-red-500">✕</span>
                                                )
                                            ) : (
                                                <span className="text-[#1E3A5F]/70">{row.others}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-blue-100 text-blue-800">
                            Our Technology
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2549] mb-4">
                            Cutting-Edge Tools & Processes
                        </h2>
                        <p className="text-[#1E3A5F] text-lg max-w-3xl mx-auto">
                            We leverage advanced technology to deliver superior results while maintaining the human touch.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeIn} className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-[#0F2549] mb-4">
                                Human Expertise Enhanced by Technology
                            </h3>
                            <p className="text-[#1E3A5F]/80 mb-6">
                                We combine the precision of advanced AI tools with the nuanced understanding of human experts to deliver transcriptions and translations that capture not just words, but meaning and context.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "AI-assisted transcription with human verification",
                                    "Translation memory tools for consistency",
                                    "Specialized terminology databases by industry",
                                    "Secure cloud-based project management",
                                    "Advanced speech recognition technology"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                                            <Check className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <span className="text-[#1E3A5F]/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-gradient-to-r from-[#0F2549] to-[#3B82F6] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
                                Learn About Our Process
                                <ArrowRight size={16} />
                            </button>
                        </motion.div>
                        <motion.div variants={fadeIn} className="order-1 md:order-2">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-20"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070"
                                    alt="Advanced Technology"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg relative z-10 w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0F2549] to-[#3B82F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Experience the JYH Difference Today
                        </h2>
                        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
                            Join hundreds of satisfied clients who trust us with their transcription and translation needs.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="bg-white text-[#0F2549] px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-black/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
                                Get Started
                                <ArrowRight size={16} />
                            </button>
                            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                                Contact Us
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
