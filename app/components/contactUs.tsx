/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail } from "lucide-react";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix missing marker icons in Leaflet
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src ?? markerIcon,
    shadowUrl: markerShadow.src ?? markerShadow,
});


const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), {
    ssr: false,

}) as unknown as React.ComponentType<any>;

const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), {
    ssr: false,
}) as unknown as React.ComponentType<any>;

const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), {
    ssr: false,
}) as unknown as React.ComponentType<any>;

const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), {
    ssr: false,
}) as unknown as React.ComponentType<any>;

const ContactUs: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const position: LatLngExpression = [19.076, 72.8777];

    if (!isMounted) return null;

    return (
        <section className="py-12 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-blue-50 to-white text-gray-900">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
                {/* Contact Info */}
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

                {/* Map */}
                <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg border border-gray-300 relative z-10">
                    <MapContainer
                        center={position}
                        zoom={12}
                        scrollWheelZoom={false}
                        className="w-full h-full"
                        style={{ zIndex: 10 }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='© OpenStreetMap contributors'
                        />
                        <Marker position={position}>
                            <Popup>Mumbai, Maharashtra, India</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
