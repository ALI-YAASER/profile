

"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        "service_gk7qwec",
        "template_uhwjp0d",
        form.current,
        "B_fhg5eWsWMIy0eAR"
    )
    .then(
        (result) => {
        console.log("Message sent ✅", result.text);
        alert("Message sent successfully!");
        },
        (error) => {
        console.error("❌ Error sending message:", error.text);
        alert("Failed to send message!");
        }
    );
};

return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4">
    <h2 className="text-3xl font-bold mb-2">Connect with me</h2>
    <p className="text-gray-600 text-center mb-8 max-w-md">
        I'd love to hear from you! Please fill out the form below.
    </p>
    <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
        <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-md"
            required
        />
        <input
            type="email"
            name="reply_to"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-md"
            required
        />
        </div>
        <textarea
        name="message"
        placeholder="Enter your message"
        rows="5"
        className="w-full p-3 border rounded-md"
        required
        />
        <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
        Submit now →
        </button>
    </form>
    </div>
);
}
