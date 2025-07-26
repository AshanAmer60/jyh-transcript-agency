'use client';

import { motion } from 'framer-motion';
import {
    PiMicrophoneStageBold,
    PiPencilLineBold,
    PiVideoBold,
    PiDatabaseBold,
    PiPenNibBold,
    PiSpeakerHighBold
} from 'react-icons/pi';

// Motion Variants for Smooth Animations
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
};

// Services List with Content & Icons
const servicesList = [
    {
        title: 'Transcription',
        description: 'Convert audio and video files into accurate, time-stamped text format with precision.',
        icon: PiMicrophoneStageBold,
    },
    {
        title: 'Translation',
        description: 'Expert translation services for multiple languages, ensuring cultural and linguistic accuracy.',
        icon: PiPencilLineBold,
    },
    {
        title: 'Captioning & Subtitling',
        description: 'Enhance accessibility with high-quality captions and subtitles for video content.',
        icon: PiVideoBold,
    },
    {
        title: 'Data Collection',
        description: 'Collect and curate high-quality datasets for AI, research, and machine learning models.',
        icon: PiDatabaseBold,
    },
    {
        title: 'Annotation',
        description: 'Precise annotation services for text, images, and videos to train AI and ML algorithms.',
        icon: PiPenNibBold,
    },
    {
        title: 'Voice Over',
        description: 'Professional voice-over services for various languages, accents, and industries.',
        icon: PiSpeakerHighBold,
    },
];

const Services = () => {

    return (
        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#0A0F1D] to-[#1B263B] text-white">
            {/* Heading Section */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Our <span className="text-blue-400">Services</span>
                </h2>
                <p className="text-lg text-gray-300 mt-4">
                    We provide top-tier language and data services to enhance accessibility, AI training, and global communication.
                </p>
            </motion.div>

            {/* Services Grid with Animations */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {servicesList.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group flex flex-col items-center text-center space-y-4 p-6 bg-[#1E293B] rounded-2xl shadow-md transition-all duration-300 border border-gray-700 
                        hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#9333EA] hover:shadow-lg hover:shadow-blue-500/50"
                    >
                        {/* Centered Icon */}
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-md transition-all duration-300 
                        group-hover:bg-white group-hover:text-blue-500">
                            <service.icon className="w-8 h-8" />
                        </div>

                        {/* Centered Text */}
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
