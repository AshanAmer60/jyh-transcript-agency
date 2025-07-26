"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Button from "../components/button"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import { Phone } from "lucide-react"

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

export default function Languages() {
    const [activeLanguageCategory, setActiveLanguageCategory] = useState("Indian Languages")
    const [hoveredLanguage, setHoveredLanguage] = useState(null)


    const languages = {
        "Indian Languages": [
            { name: "Hindi", flag: "🇮🇳", speakers: "600M", region: "North India" },
            { name: "Bengali", flag: "🇮🇳", speakers: "230M", region: "West Bengal, India" },
            { name: "Gujarati", flag: "🇮🇳", speakers: "60M", region: "Gujarat, India" },
            { name: "Marathi", flag: "🇮🇳", speakers: "83M", region: "Maharashtra, India" },
            { name: "Punjabi", flag: "🇮🇳", speakers: "125M", region: "Punjab, India" },
            { name: "Tamil", flag: "🇮🇳", speakers: "85M", region: "Tamil Nadu, India" },
            { name: "Telugu", flag: "🇮🇳", speakers: "95M", region: "Andhra Pradesh, India" },
            { name: "Malayalam", flag: "🇮🇳", speakers: "45M", region: "Kerala, India" },
            { name: "Kannada", flag: "🇮🇳", speakers: "50M", region: "Karnataka, India" },
            { name: "More Indian", flag: "🇮🇳", speakers: "Various", region: "India", placeholder: true },
        ],
        "Foreign Languages": [
            { name: "Afrikaans", flag: "🇿🇦", speakers: "7M", region: "South Africa" },
            { name: "Arabic", flag: "🇸🇦", speakers: "420M", region: "Middle East" },
            { name: "Chinese", flag: "🇨🇳", speakers: "1.1B", region: "China" },
            { name: "Dutch", flag: "🇳🇱", speakers: "24M", region: "Netherlands" },
            { name: "French", flag: "🇫🇷", speakers: "300M", region: "France, Africa" },
            { name: "German", flag: "🇩🇪", speakers: "130M", region: "Germany, Austria" },
            { name: "Japanese", flag: "🇯🇵", speakers: "125M", region: "Japan" },
            { name: "Russian", flag: "🇷🇺", speakers: "260M", region: "Russia" },
            { name: "Spanish", flag: "🇪🇸", speakers: "500M", region: "Spain, Latin America" },
            { name: "More Foreign", flag: "🌍", speakers: "Various", region: "Global", placeholder: true },
        ],
        "More Languages": [
            { name: "Armenian", flag: "🇦🇲", speakers: "6M", region: "Armenia" },
            { name: "Belarussian", flag: "🇧🇾", speakers: "10M", region: "Belarus" },
            { name: "Bulgarian", flag: "🇧🇬", speakers: "9M", region: "Bulgaria" },
            { name: "Czech", flag: "🇨🇿", speakers: "10M", region: "Czech Republic" },
            { name: "Finnish", flag: "🇫🇮", speakers: "5M", region: "Finland" },
            { name: "Greek", flag: "🇬🇷", speakers: "13M", region: "Greece" },
            { name: "Hebrew", flag: "🇮🇱", speakers: "9M", region: "Israel" },
            { name: "Indonesian", flag: "🇮🇩", speakers: "200M", region: "Indonesia" },
            { name: "Korean", flag: "🇰🇷", speakers: "80M", region: "South Korea" },
            { name: "More Global", flag: "🌐", speakers: "Various", region: "Worldwide", placeholder: true },
        ],
    }

    return (
        <div>
            <Navbar />
            <section className="bg-gradient-to-br from-[#0F2549] to-[#1E3A5F] text-white pb-24">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070')", backgroundAttachment: "fixed" }}></div>
                    <div className="absolute inset-0 bg-[#0F2549]/60 z-10"></div>
                    <div className="relative z-20 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center">
                            <div className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 bg-blue-500/20 text-blue-300 shadow-lg">
                                Transcript Agency Language Solutions
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                                Expand Globally with <span className="text-blue-400">Transcript Agency</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                                Connect your business to the world with our expert language services in 250+ languages, ensuring cultural precision and global success.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    text="Explore Languages"
                                    onClick={() => document.getElementById("language-showcase")?.scrollIntoView({ behavior: "smooth" })}
                                />
                                <Button
                                    text="Contact Us"
                                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Why Hire LSP */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Language Service Providers
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Why Hire a Language Service Provider Today?
                        </h2>
                        <p className="text-lg text-slate-700 max-w-3xl mx-auto mt-4">
                            In today’s globalized world, 90% of an enterprise’s success depends on crossing cultural and language barriers. At JYH Transcript Agency, we help you communicate globally.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={fadeIn} className="space-y-6">
                            <p className="text-slate-700 text-lg leading-relaxed">
                                Around 85% of businesses hire translation providers to break these barriers. As a leading Language Service Provider (LSP), JYH Transcript Agency offers transcription, annotation, translation and linguistic solutions in 250+ languages, helping your business communicate with a global audience.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                We cover all Indian and foreign languages, ensuring your materials are translated accurately into the desired language(s). With LSPs like us, you can succeed in the multilingual, multicultural business world.
                            </p>
                            <Button
                                text="Learn More About LSPs"
                                onClick={() => { }}
                            />
                        </motion.div>
                        <motion.div variants={fadeIn} className="text-center">
                            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Need Assistance?</h3>
                                <p className="text-slate-600 mb-4">Call us to ask any question!</p>
                                <a href="tel:+918527599523" className="text-blue-600 font-semibold flex items-center justify-center gap-2">
                                    <Phone size={20} /> +91-9321417757
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Language Showcase */}
                <div id="language-showcase" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#1E3A5F]/90 backdrop-blur-sm">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Languages We Offer
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            250+ Languages to Grow Your Business
                        </h2>
                        <p className="text-white/80 text-lg max-w-3xl mx-auto">
                            From Indian to foreign languages, we’ve got every language your business needs to succeed globally.
                        </p>
                    </motion.div>

                    <div className="flex justify-center mb-8 flex-wrap gap-3">
                        {Object.keys(languages).map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full font-medium ${activeLanguageCategory === category ? "bg-blue-600 text-white" : "bg-white/20 text-white hover:bg-white/40"} transition-colors duration-300`}
                                onClick={() => setActiveLanguageCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {languages[activeLanguageCategory].map((lang, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                onMouseEnter={() => setHoveredLanguage(lang.name)}
                                onMouseLeave={() => setHoveredLanguage(null)}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
                                className="relative bg-[#0F2549]/80 p-6 rounded-lg text-center shadow-lg backdrop-blur-sm border border-white/20 overflow-hidden"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: hoveredLanguage === lang.name ? 1 : 0, y: hoveredLanguage === lang.name ? 0 : 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-blue-600/50 flex items-center justify-center text-white text-sm font-medium"
                                >
                                    Fully Supported
                                </motion.div>
                                <div className="text-4xl mb-2">{lang.flag}</div>
                                <h3 className="text-xl font-semibold text-white">{lang.name}</h3>
                                {!lang.placeholder && (
                                    <>
                                        <p className="text-blue-200 text-sm">{lang.speakers} Speakers</p>
                                        <p className="text-white/70 text-xs">{lang.region}</p>
                                    </>
                                )}
                                {lang.placeholder && (
                                    <p className="text-blue-200 text-sm italic">And many more...</p>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Crucial Language Facts */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Crucial Language Facts
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Why Language Matters for Global Success
                        </h2>
                        <p className="text-lg text-slate-700 max-w-3xl mx-auto mt-4">
                            Language is the key to unlocking global markets. Here are some facts that highlight its importance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { fact: "3 out of 5 Internet users don’t browse in English.", icon: "🌐" },
                            { fact: "72% of customers prefer products with info in their native language.", icon: "🛒" },
                            { fact: "56% of customers value language over price.", icon: "💬" },
                            { fact: "20% of UK exporters lost deals due to language barriers.", icon: "📉" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                whileHover={{ y: -5 }}
                                className="bg-blue-50 p-6 rounded-lg shadow-lg text-center"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <p className="text-slate-700">{item.fact}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* How LSP Boosts Business */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-[#0F2549] to-[#1E3A5F]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-500/20 text-blue-300">
                            Business Growth
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            How LSP Can Boost Your Business Globally
                        </h2>
                        <p className="text-white/80 text-lg max-w-3xl mx-auto">
                            Our language solutions help your brand stay ahead of the competition on a global scale.
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
                                title: "Reach Wider Audiences",
                                description: "Translate and localize content to connect with global customers.",
                                icon: "🌍",
                            },
                            {
                                title: "Cultural Conformity",
                                description: "Understand and adapt to diverse cultures with expert linguists.",
                                icon: "🤝",
                            },
                            {
                                title: "Certified Quality",
                                description: "Certified translations to ensure accuracy and professionalism.",
                                icon: "🏅",
                            },
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                whileHover={{ y: -10 }}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                            >
                                <div className="text-4xl mb-4 text-blue-400">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                                <p className="text-white/80">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Steps for Ordering */}
                <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-900">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                            Get Started
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            Easy Steps for Language Services
                        </h2>
                        <p className="text-lg text-slate-700 max-w-3xl mx-auto mt-4">
                            Follow these simple steps to order language-related services with Transcript Agency.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-4 gap-8"
                    >
                        {[
                            { step: "1", title: "Contact Us", description: "Approach us to discuss your project needs.", icon: "📞" },
                            { step: "2", title: "Consult with Us", description: "Our professionals will suggest profitable ideas.", icon: "💡" },
                            { step: "3", title: "Place Order", description: "Submit your order to start the project.", icon: "📋" },
                            { step: "4", title: "Make Payment", description: "Pay through easy payment methods.", icon: "💳" },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUp}
                                whileHover={{ y: -5 }}
                                className="bg-blue-50 p-6 rounded-lg shadow-lg text-center"
                            >
                                <div className="text-5xl font-bold text-blue-600 mb-4">{step.step}</div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600">{step.description}</p>
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
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">Grow Beyond Native Boundaries!</h2>
                                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                    Ready to take your business global? Let Transcript Agency help you communicate in infinite languages.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button text="Get in Touch" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })} />
                                    <Button text="Request a Quote" onClick={() => { }} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    )
}