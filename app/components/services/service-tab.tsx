"use client"


import type { Dispatch, SetStateAction } from "react"

interface ServiceTabProps {
    tab: string
    activeTab: "Accuracy" | "Speed" | "Security" | "Technology" | "Support";
    setActiveTab: Dispatch<SetStateAction<"Accuracy" | "Speed" | "Security" | "Technology" | "Support">>;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({ tab, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(tab as "Accuracy" | "Speed" | "Security" | "Technology" | "Support");
    };

    return (
        <button
            onClick={handleClick}
            className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
        >
            {tab}
        </button>
    );
};