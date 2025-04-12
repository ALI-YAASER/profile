import React from 'react'
import Image from "next/image";
import { assets } from "@/assets/assets"; 

const Workes = () => {
return (
    <div id="work" className="py-20 px-6 md:px-12 lg:px-20" >
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
            My <span className="text-blue-400">Work</span>
        </h2>
        <div className="mt-2 mx-auto w-24 h-1 bg-blue-400 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className=" border border-gray-400 shadow-md hover:shadow-lg rounded-lg cursor-pointer transition-transform duration-500 hover:scale-105  ">
            <div className="flex justify-center mb-4">
                <Image src={assets.project1} alt='' className='w-84 h-40'  />
            </div>
            <hr />
            <a href='https://appointment-doctor-5be8.vercel.app/'    target="_blank"
                rel="noopener noreferrer"
                className="block px-7 py-4 hover:text-blue-500 transition-colors duration-300"  >Appointment doctor</a>
        </div>
 
        <div className=" border border-gray-400 shadow-md  rounded-lg cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-lg ">
            <div className="flex justify-center mb-4">
                <Image src={assets.project2} alt='' className='w-84 h-40'  />
            </div>
            <hr />
            <a href='https://eduction-website-beta.vercel.app/'    target="_blank"
                rel="noopener noreferrer"
                className="block px-7 py-4 hover:text-blue-500 transition-colors duration-300" >Eduction wbsite</a>
        </div>
        <div className=" border border-gray-400 shadow-md hover:shadow-lg rounded-lg cursor-pointer transition-transform duration-500 hover:scale-105  ">
            <div className="flex justify-center mb-4">
                <Image src={assets.project3} alt='' className='w-84 h-40'  />
            </div>
            <hr />
            <a href='https://e-commerce-opal-five-41.vercel.app/'    target="_blank"
                rel="noopener noreferrer"
                className="block px-7 py-4 hover:text-blue-500 transition-colors duration-300"  >E-commerce website</a>
        </div>
        </div>
    </div>
)
}

export default Workes
