import React from "react";
import Image from "next/image";
import TELUS from "../assets/TELUS_2020_Int_EN_Vert_Digital_RGB.webp";
import Undraw from "../assets/WhatsApp-Image-2023-07-17-at-4.25.06-PM.webp";
import R from '../assets/R.webp';
import SpeachOcean from '../assets/spechOcean.webp';

// Brand Logos Data
const brands = [
    { name: "TELUS", image: TELUS },
    { name: "Undraw", image: Undraw },
    { name: "R", image: R },
    { name: "SpeechOcean", image: SpeachOcean }
];

const Brand = () => {
    return (
        <div className="py-10 bg-white">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
                Our Trusted Partners
            </h2>

            {/* Brand Logos in a Single Row */}
            <div className="flex justify-center items-center gap-16">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="w-40 h-24 flex justify-center items-center transition-all duration-300"
                    >
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            width={160}
                            height={80}
                            className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;
