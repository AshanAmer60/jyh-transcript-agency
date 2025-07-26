"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation" // Import useRouter for navigation

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
}

export function HeroSection() {
    const router = useRouter() // Initialize router for navigation

    const handleScrollToServices = () => {
        const servicesSection = document.getElementById("services-section")
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleDirectionToContact = () => {
        // Navigate to the contact page route
        router.push("/contact")
    }

    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
                    <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-6 bg-blue-100 text-blue-800">
                        Our Services
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Exceptional <span className="text-blue-600">Services</span>, Outstanding{" "}
                        <span className="text-blue-600">Results</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Experience top-tier transcription and translation services designed to exceed your expectations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDirectionToContact}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Start Now
                            <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleScrollToServices}
                            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Explore Services
                            <ChevronRight size={18} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}