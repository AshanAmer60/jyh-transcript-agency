"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [activeItem, setActiveItem] = useState("home");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);

        // Sync activeItem with the current pathname
        const currentPath = pathname === "/" ? "home" : pathname.replace("/", "");
        setActiveItem(currentPath || "home");

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    if (!mounted) return null;

    // Function to handle navigation
    const handleNavigation = (item: string) => {
        setActiveItem(item);
        router.push(`/${item === "home" ? "" : item}`);
    };

    const navItems = ["home", "about", "features", "services", "languages", "contact"];

    return (
        <>
            {/* Navbar */}
            <nav
                className={`w-full fixed lg:top-0 z-50 transition-all duration-300 ${scrolled && !isOpen
                        ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
                        : isOpen && !scrolled
                            ? "bg-white shadow-lg py-4" // Force solid white background when menu is open and not scrolled on mobile
                            : "bg-gradient-to-r from-white to-blue-50 py-4"
                    }`}
            >
                <div className="w-11/12 md:w-4/5 mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 group">
                        <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105">
                            <Image
                                src={Logo || "/placeholder.svg"}
                                alt="Transcript Agency Logo"
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0F2549] to-[#3B82F6] bg-clip-text text-transparent">
                            Transcript Agency
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8 text-[#1E3A5F]">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleNavigation(item)}
                                        className={`relative font-medium transition-all duration-300 cursor-pointer px-2 py-1 ${activeItem === item
                                            ? "text-[#0F2549] font-semibold"
                                            : "text-[#1E3A5F]/80 hover:text-[#0F2549]"
                                            }`}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 transform origin-left transition-transform duration-300 ${activeItem === item ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center gap-2 bg-gradient-to-r from-[#0F2549] to-[#3B82F6] text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5">
                            <Phone size={16} />
                            <span>Contact Us</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors duration-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} className="text-[#0F2549]" /> : <Menu size={24} className="text-[#0F2549]" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-white to-blue-50 shadow-2xl p-6 transform transition-all duration-500 ease-in-out z-50 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
                >
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center space-x-2">
                            <Image src={Logo || "/placeholder.svg"} alt="logo" width={40} height={40} />
                            <h2 className="text-lg font-bold bg-gradient-to-r from-[#0F2549] to-[#3B82F6] bg-clip-text text-transparent">
                                Transcript Agency
                            </h2>
                        </div>
                        <button
                            className="p-1.5 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={20} className="text-[#0F2549]" />
                        </button>
                    </div>

                    <ul className="flex flex-col space-y-5 text-[#1E3A5F]">
                        {navItems.map((item) => (
                            <li key={item} className="border-b border-blue-100 pb-2">
                                <button
                                    onClick={() => {
                                        handleNavigation(item);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center justify-between w-full ${activeItem === item ? "text-[#0F2549] font-semibold" : "text-[#1E3A5F]/80"}`}
                                >
                                    <span className="text-lg">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                                    <ChevronRight size={16} className="text-blue-500" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10">
                        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0F2549] to-[#3B82F6] text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                            <Phone size={18} />
                            <span>Contact Us</span>
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-[#1E3A5F]/60">
                        © 2024 Transcript Agency
                    </div>
                </div>
            </nav>

            {/* Backdrop for mobile menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 md:hidden z-40 transition-all duration-500"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;