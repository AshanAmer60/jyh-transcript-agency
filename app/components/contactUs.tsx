"use client";

import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail } from "lucide-react";

// Dynamically load Map components to prevent SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

const ContactUs: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Ensure the component only renders on the client after mounting
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMounted(true);
        }
    }, []);

    if (!isMounted) {
        return null; // Prevent rendering until fully mounted on client
    }

    return (
        <section className="py-12 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-blue-50 to-white text-gray-900">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
                {/* Left: Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
                        Get in <span className="text-blue-500">Touch</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700">
                        Have a question or need assistance? Reach out to us—we’re here to help.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <MapPin className="text-blue-500 w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base">
                                India, Maharashtra, Mumbai
                            </span>
                        </div>
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <Phone className="text-blue-500 w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base">
                                +91 9321417757
                            </span>
                        </div>

                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <Mail className="text-blue-500 w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base">
                                jyhlanguageservices@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: OpenStreetMap */}
                <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg border border-gray-300 relative z-10">
                    {isMounted && (
                        <MapContainer
                            center={[19.076, 72.8777]}
                            zoom={12}
                            className="w-full h-full"
                            scrollWheelZoom={false}
                            style={{ zIndex: 10 }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[19.076, 72.8777]}>
                                <Popup>Mumbai, Maharashtra, India</Popup>
                            </Marker>
                        </MapContainer>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;