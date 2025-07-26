"use client";

import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg shadow-md hover:bg-[#3f5572] transition-all hover:cursor-pointer "
        >
            {text}
        </button>
    );
};

export default Button;




