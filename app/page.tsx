"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Telus from "./assets/TELUS_2020_Int_EN_Vert_Digital_RGB.webp";
import R from "./assets/R.webp";
import thebigword from "./assets/thebigword.png";
import centific from "./assets/WhatsApp-Image-2023-07-17-at-4.25.06-PM.webp";
import speech from "./assets/spechOcean.webp";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronRight, Play } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Button from "./components/button";

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

// Updated slideVariants for left-to-right sliding
const slideVariants = {
  hidden: { x: "100%", opacity: 0 }, // Start from the right
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }, // Move to center
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }, // Exit to the left
};

// Define testimonials outside the component to avoid initialization issues
const testimonials = [
  {
    quote: "JYH Transcript Agency delivered our project ahead of schedule with impeccable accuracy. Their attention to detail is unmatched.",
    author: "Michael Chen",
    company: "Global Research Institute",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Working with JYH has been a game-changer for our international communications. Their translations capture not just the words, but the cultural nuances.",
    author: "Sarah Williams",
    company: "Innovate Technologies",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "The team at JYH provided exceptional service for our conference interpretation needs. Professional, reliable, and highly skilled.",
    author: "David Rodriguez",
    company: "International Forum",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Their transcription services saved us hours of manual work. The quality and speed were beyond our expectations.",
    author: "Priya Sharma",
    company: "EduTech Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "JYH’s localization expertise helped us penetrate new markets seamlessly. Highly recommend their services!",
    author: "Ahmed Khan",
    company: "Global Retail Co.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "The accuracy of their translations is outstanding. Our clients noticed the difference immediately.",
    author: "Elena Petrova",
    company: "EuroTrade Ltd.",
    image: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "A reliable partner for multilingual projects. Their team is responsive and delivers on time.",
    author: "John Smith",
    company: "Tech Innovations",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Their voice-over services added a professional touch to our videos. Excellent work!",
    author: "Maria Gonzalez",
    company: "Media Productions",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "JYH transformed our legal documents with precise translations. A lifesaver for our international deals.",
    author: "Thomas Lee",
    company: "Legal Associates",
    image: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Their subtitling services were flawless. Our global audience loved the experience.",
    author: "Sophie Dupont",
    company: "Film Studios",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Exceptional customer service and top-notch translation quality. We’ll keep coming back!",
    author: "Rajesh Patel",
    company: "Export Enterprises",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Their team handled our urgent project with professionalism and care. Highly impressed!",
    author: "Lisa Kim",
    company: "Health Solutions",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "The best interpretation services I’ve experienced. Seamless communication at our events.",
    author: "Carlos Rivera",
    company: "Event Planners Inc.",
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "JYH’s attention to cultural nuances made our marketing campaign a global success.",
    author: "Aisha Mohammed",
    company: "Ad Agency Global",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Fast, accurate, and affordable transcription services. A true partner for our business.",
    author: "James Brown",
    company: "Audio Solutions",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Their multilingual publishing services exceeded our expectations. Great work!",
    author: "Emma Wilson",
    company: "Publishing House",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "JYH’s team is a lifesaver for our international legal translations. Highly professional!",
    author: "Hiroshi Tanaka",
    company: "Legal Japan",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "The dubbing quality was top-tier. Our audience loved the localized content.",
    author: "Fatima Ali",
    company: "Entertainment Network",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "Their rapid turnaround on translations saved our project deadline. Excellent service!",
    author: "Peter Schmidt",
    company: "Engineering Corp",
    image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?q=80&w=1974",
    rating: 5,
  },
  {
    quote: "JYH’s expertise in captioning made our videos accessible worldwide. Amazing work!",
    author: "Nina Patel",
    company: "Video Content Co.",
    image: "https://images.unsplash.com/photo-1519085360753-af011ef76950?q=80&w=1974",
    rating: 5,
  },
];

const trustedLogos = [
  { id: 1, src: Telus, alt: "Telus Logo" },
  { id: 2, src: R, alt: "R Logo" },
  { id: 3, src: thebigword, alt: "thebigword" },
  { id: 4, src: centific, alt: "centific" },
  { id: 5, src: speech, alt: "speech Ocean" },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-r from-[#0F2549] to-[#1E3A5F] pt-32 pb-20">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-white space-y-6"
              >
                <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-500/20 text-blue-300">
                  Government Certified Agency
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  Professional <span className="text-blue-400">Transcription</span> & <span className="text-blue-400">Translation</span> Services
                </h1>
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                  Bridging language barriers with precision and expertise. Our certified linguists deliver accurate, timely, and culturally nuanced language solutions.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    text="Get Started"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  />
                  <button className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                      <Play size={16} className="text-white ml-1" />
                    </div>
                    <span>Watch How It Works</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 pt-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0F2549] overflow-hidden">
                        <Image
                          src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                          alt="Client"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-white/80">
                    <span className="text-blue-300 font-semibold">500+</span> satisfied clients worldwide
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-slate-900 opacity-10 rounded-lg transform -rotate-3"></div>
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                  alt="Team Collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-gradient-to-r from-[#0F2549] to-[#1E3A5F] relative overflow-hidden">
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 bg-blue-500/20 text-blue-300 shadow-lg">
                Trusted Partners
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Trusted by <span className="text-blue-400">Leading Organizations</span>
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            >
              {trustedLogos.map((logo) => (
                <motion.div
                  key={logo.id}
                  variants={scaleUp}
                  whileHover={{ scale: 1.1, rotate: 2, transition: { duration: 0.3 } }}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 bg-[#1E3A5F]/80 p-6 rounded-lg shadow-xl backdrop-blur-sm flex items-center justify-center w-[180px] h-[100px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="object-contain w-full h-full max-w-[160px] max-h-[80px]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                We offer a wide range of professional language services to meet your specific needs.
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
                  title: "Transcription",
                  description: "Convert audio and video content into accurate written text with our professional transcription services.",
                  icon: "📝",
                  features: ["Audio to text conversion", "Video transcription", "Verbatim transcription"],
                  link: "/services#transcription",
                },
                {
                  title: "Translation",
                  description: "Translate your content across multiple languages while preserving meaning, context, and cultural nuances.",
                  icon: "🌐",
                  features: ["Document translation", "Website localization", "Marketing content translation"],
                  link: "/services#translation",
                },
                {
                  title: "Interpretation",
                  description: "Facilitate real-time communication between parties speaking different languages with our interpretation services.",
                  icon: "🗣️",
                  features: ["Conference interpretation", "Business meeting interpretation", "Remote interpretation services"],
                  link: "/services#interpretation",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl shadow-md p-8 border border-slate-100 flex flex-col h-full"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={service.link} className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-100 text-blue-800">
                Our Process
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                How It Works
              </h2>
              <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                Our streamlined process ensures high-quality results and a seamless experience from start to finish.
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
                {
                  title: "Request a Quote",
                  description: "Submit your project details through our simple online form to receive a customized quote.",
                  icon: "📋",
                  step: "01",
                },
                {
                  title: "Project Assignment",
                  description: "We assign your project to the most qualified linguists based on your specific requirements.",
                  icon: "👥",
                  step: "02",
                },
                {
                  title: "Processing & Quality Check",
                  description: "Our experts work on your project and conduct thorough quality checks to ensure accuracy.",
                  icon: "⚙️",
                  step: "03",
                },
                {
                  title: "Delivery & Feedback",
                  description: "Receive your completed project on time and provide feedback for continuous improvement.",
                  icon: "✅",
                  step: "04",
                },
              ].map((step, index) => (
                <motion.div key={index} variants={scaleUp} className="relative">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 relative z-10">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  <div className="absolute mt-[-5%] -top-4 -right-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 z-0">
                      <ChevronRight size={24} className="text-blue-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-[#0F2549] to-[#1E3A5F] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 bg-blue-500/20 text-blue-300">
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                What Sets Us Apart
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Discover the JYH Transcript Agency difference and why clients trust us with their language needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-400 opacity-10 rounded-lg transform rotate-3"></div>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Team Collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Government Certified",
                      description: "Certified under MSME, Government of India, ensuring compliance with industry standards.",
                      icon: "🏆",
                    },
                    {
                      title: "Expert Linguists",
                      description: "Our team consists of professional linguists with specialized domain knowledge.",
                      icon: "👨‍🎓",
                    },
                    {
                      title: "Fast Turnaround",
                      description: "Quick delivery without compromising on quality, meeting your tight deadlines.",
                      icon: "⏱️",
                    },
                    {
                      title: "Confidentiality",
                      description: "Strict confidentiality protocols to protect your sensitive information.",
                      icon: "🔒",
                    },
                  ].map((feature, index) => (
                    <motion.div key={index} variants={scaleUp} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 text-sm font-medium rounded-full mb-4 bg-blue-100 text-blue-800 shadow-sm">
                Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                What Our <span className="text-blue-600">Clients Say</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Don’t just take our word for it—hear directly from our satisfied clients about their experiences with JYH Transcript Agency.
              </p>
            </motion.div>

            {/* Testimonials Carousel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="max-w-4xl mx-auto overflow-hidden relative"
            >
              <motion.div
                key={activeTestimonial}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 transform transition-all duration-300 hover:shadow-xl">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {Array(testimonials[activeTestimonial].rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 mb-8 text-lg italic leading-relaxed">
                    {testimonials[activeTestimonial].quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].author}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-blue-100"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonials[activeTestimonial].author}</h4>
                      <p className="text-slate-500 text-sm">{testimonials[activeTestimonial].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    aria-label={`View testimonial from ${testimonials[index].author}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 flex items-center -ml-12">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-md"
                  aria-label="Previous testimonial"
                >
                  <ChevronRight size={20} className="rotate-180" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center -mr-12">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">Ready to Get Started?</h2>
                  <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                    Partner with a trusted, government-certified agency for all your transcription and language needs. Let’s start a conversation today.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button text="Contact Us" onClick={() => (window.location.href = "/contact")} />
                    <Button text="Request a Quote" onClick={() => (window.location.href = "/contact#quote")} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}