"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Replace with your image imports

const services = [
{
title: "web development",
desc: "I can build a website by using HTML, CSS , Javascript , React Js and Next Js.",
icon: assets.webDev,
},
{
title: "responsive",
desc: "Your website will be 100% responsive for all devices: tablets and smart phone.",
icon: assets.responsive,
},
{
title: "creating Design",
desc: "I can edit your current website by adding a new content to make it much better.",
icon: assets.design,
},
{
title: "web Ideas",
desc: "I could turn your ideas into a real project with high quality.",
icon: assets.idea,
},
{
title: "support",
desc: "Support available if you wanna make any changes after delivering it.",
icon: assets.support,
},
{
title: "Retouch",
desc: "I can help you by redesigning your current website to look much better.",
icon: assets.retouch,
},
];

const Services = () => {
return (
<section id="services" className="py-20 px-6 md:px-12 lg:px-20 bg-[#110a31] text-white">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold">
    My <span className="text-blue-400">Services</span>
</h2>
<div className="mt-2 mx-auto w-24 h-1 bg-blue-400 rounded"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{services.map((service, idx) => (
    <div
    key={idx}
    className="bg-white text-gray-800 p-6 rounded-xl shadow-md  cursor-pointer  transition-transform duration-500 hover:scale-105 hover:shadow-lg"
    >
    <div className="flex justify-center mb-4">
        <Image src={service.icon} alt={service.title} className="w-14 h-14" />
    </div>
    <h3 className="text-center font-semibold text-lg mb-2">{service.title}</h3>
    <p className="text-center text-sm text-gray-600">{service.desc}</p>
    </div>
))}
</div>
</section>
);
};

export default Services;
