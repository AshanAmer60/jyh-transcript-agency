"use client"

import { motion } from "framer-motion"
import {
    ChevronRight,
    Database,
    FileText,
    Globe,
    Headphones,
    Lightbulb,
    Lock,
    MessageSquare,
    Mic,
    PenTool,
    Zap,
} from "lucide-react"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
}

const scaleHover = {
    hover: {
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" },
    },
}

interface ServiceCardProps {
    service: {
        title: string
        desc: string
        icon: string
        color: string
    }
    onLearnMore: () => void
}

export function ServiceCard({ service, onLearnMore }: ServiceCardProps) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "FileText":
                return <FileText className="h-6 w-6 text-blue-600" aria-hidden="true" />
            case "Globe":
                return <Globe className="h-6 w-6 text-green-600" aria-hidden="true" />
            case "PenTool":
                return <PenTool className="h-6 w-6 text-amber-600" aria-hidden="true" />
            case "Headphones":
                return <Headphones className="h-6 w-6 text-purple-600" aria-hidden="true" />
            case "MessageSquare":
                return <MessageSquare className="h-6 w-6 text-pink-600" aria-hidden="true" />
            case "Mic":
                return <Mic className="h-6 w-6 text-red-600" aria-hidden="true" />
            case "Database":
                return <Database className="h-6 w-6 text-cyan-600" aria-hidden="true" />
            case "Zap":
                return <Zap className="h-6 w-6 text-blue-600" aria-hidden="true" />
            case "Lock":
                return <Lock className="h-6 w-6 text-green-600" aria-hidden="true" />
            case "Lightbulb":
                return <Lightbulb className="h-6 w-6 text-amber-600" aria-hidden="true" />
            default:
                return <FileText className="h-6 w-6 text-blue-600" aria-hidden="true" />
        }
    }

    const getBgColor = (color: string) => {
        switch (color) {
            case "blue":
                return "bg-blue-100"
            case "green":
                return "bg-green-100"
            case "amber":
                return "bg-amber-100"
            case "purple":
                return "bg-purple-100"
            case "indigo":
                return "bg-indigo-100"
            case "pink":
                return "bg-pink-100"
            case "red":
                return "bg-red-100"
            case "cyan":
                return "bg-cyan-100"
            case "teal":
                return "bg-teal-100"
            default:
                return "bg-blue-100"
        }
    }

    return (
        <motion.div
            variants={fadeIn}
            whileHover="hover"
            custom={scaleHover}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            <div className={`${getBgColor(service.color)} p-3 rounded-full w-fit mb-4`}>{getIcon(service.icon)}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            <motion.button
                whileHover={{ x: 5 }}
                onClick={onLearnMore}
                className="mt-4 text-blue-600 font-medium flex items-center gap-1"
                aria-label={`Learn more about ${service.title}`}
            >
                Learn More <ChevronRight size={16} />
            </motion.button>
        </motion.div>
    )
}