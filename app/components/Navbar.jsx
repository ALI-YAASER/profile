"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = () => {
const sideMenuRef = useRef();
const [isMenuOpen, setIsMenuOpen] = useState(false);

const openMenu = () => {
    setIsMenuOpen(true);
    sideMenuRef.current.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
    setIsMenuOpen(false);
    sideMenuRef.current.style.transform = 'translateX(100%)';
    document.body.style.overflow = '';
};

useEffect(() => {
    const handleClickOutside = (event) => {
    if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target)
    ) {
        closeMenu();
    }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

return (
    <>
    {/* Background Shape */}
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="Background" className="w-full" />
    </div>

    <nav className="w-full fixed px-6 lg:px-9 xl:px-[8%] py-5 flex items-center justify-between z-50">
        <a href="#top" className="text-2xl text-blue-400 sm:text-4xl cursor-pointer mr-14">
        Ali Yasser
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-5 py-3 bg-white shadow-sm bg-opacity-50">
        <li><a className="font-Ovo" href="#top">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">My work</a></li>
        <li><a href="#contact">Contact me</a></li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
        <button aria-label="Toggle dark mode">
            <Image src={assets.moon_icon} alt="Moon icon" className="w-6" />
        </button>
        <a className="hidden lg:flex items-center gap-3 px-10 py-2.5 border bg-white shadow-xl text-blue-400 border-gray-500 rounded-full ml-4" href="#contact">
            Contact <Image src={assets.arrow_icon} alt="Arrow icon" className="w-3" />
        </a>
        <button onClick={openMenu} className="block md:hidden ml-3" aria-label="Open menu">
            <Image src={assets.menu_black} alt="Menu icon" className="w-6 cursor-pointer" />
        </button>
        </div>

        {/* Mobile Menu */}
        <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition-transform duration-500"
        style={{ transform: 'translateX(100%)' }}
        >
        <div
            className="absolute right-6 top-6"
            onClick={(e) => {
            e.stopPropagation();
            closeMenu();
            }}
        >
            <Image src={assets.close_black} alt="Close menu" className="w-6 cursor-pointer" />
        </div>
        <li><a onClick={closeMenu} href="#home">Home</a></li>
        <li><a onClick={closeMenu} href="#about">About me</a></li>
        <li><a onClick={closeMenu} href="#services">Services</a></li>
        <li><a onClick={closeMenu} href="#work">My work</a></li>
        <li><a onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>

        {/* Overlay */}
        {isMenuOpen && (
        <div
            className="fixed inset-0  bg-opacity-30 z-40 md:hidden"
            onClick={closeMenu}
        />
        )}
    </nav>
    </>
);
};

export default Navbar;


