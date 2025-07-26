"use client"

import { motion } from "framer-motion"
import { ChevronRight, Lightbulb, Lock, Zap } from "lucide-react"

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

interface ServiceFeatureCardProps {
    feature: {
        title: string
        desc: string
        icon: string
        color: string
    }
}

export function ServiceFeatureCard({ feature }: ServiceFeatureCardProps) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Zap":
                return <Zap className="h-6 w-6 text-blue-600" aria-hidden="true" />
            case "Lock":
                return <Lock className="h-6 w-6 text-green-600" aria-hidden="true" />
            case "Lightbulb":
                return <Lightbulb className="h-6 w-6 text-amber-600" aria-hidden="true" />
            default:
                return <Zap className="h-6 w-6 text-blue-600" aria-hidden="true" />
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
            <div className={`${getBgColor(feature.color)} p-3 rounded-full w-fit mb-4`}>{getIcon(feature.icon)}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            <motion.button
                whileHover={{ x: 5 }}
                className="mt-4 text-blue-600 font-medium flex items-center gap-1"
                aria-label={`Learn more about ${feature.title}`}
            >
                Learn More <ChevronRight size={16} />
            </motion.button>
        </motion.div>
    )
}

