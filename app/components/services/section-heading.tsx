"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
}

interface SectionHeadingProps {
    badge: string
    title: string
    description: string
    children?: ReactNode
}

export function SectionHeading({ badge, title, description, children }: SectionHeadingProps) {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-6 bg-blue-100 text-blue-800">
                {badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
            {children}
        </motion.div>
    )
}

