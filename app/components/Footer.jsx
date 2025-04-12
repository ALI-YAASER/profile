import React from 'react'
import Image from "next/image";
import { assets } from '@/assets/assets';

const Footer = () => {
return (
    <footer className="border-t mt-20 text-center py-8 text-sm bg-blue-50 text-gray-500">
    <div className="mb-4">
    <h2 className="text-3xl font-semibold text-black">
        Ali Yasser<span className="text-pink-600">.</span>
    </h2>
    <p className="flex justify-center items-center gap-2 mt-2 text-gray-600">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75M21.75 6.75A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25M21.75 6.75l-9.72 7.29a.75.75 0 01-.9 0L2.25 6.75"
        />
        </svg>
        yly741689@gmail.com
    </p>
</div>
    <div className="flex justify-center gap-6 mt-4 text-gray-500 text-sm">
    <a href="#">Terms of Services</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Connect with me +201123434175</a>
    </div>

    <p className="mt-6">&copy; 2025 Eng.Ali Yasser. All rights reserved.</p>
    </footer>
);
}


export default Footer
