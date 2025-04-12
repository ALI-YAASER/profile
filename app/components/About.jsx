import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';

const About = () => {
  return (
    <div id='about'  className='w-full  text-center py-10 px-[12%] scroll-mt-20  items-center justify-center gap-4'>
        <p className='text-lg'>Introduction</p>
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
                About<span className="text-blue-400">Me</span>
            </h2>
            <div className="mt-2 mx-auto w-24 h-1 bg-blue-400 rounded"></div>
        </div>
        <div className=" flex flex-col md:flex-row  items-center my-20 gap-20">
            <Image src={assets.ali} alt='user' className='w-full rounded-3xl '  />
            <div className="">
                <p className='text-gray-600'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p className='text-gray-600'>Proficient in HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Redux.js; experienced with Git, GitHub, and MySQL.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="text-gray-800 font-medium mb-1">Languages</div>
                        <p className="text-sm text-gray-600">HTML, CSS, JavaScript<br />React Js, Next Js, Redux Js <br />MongoDB, MySQL</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="text-gray-800 font-medium mb-1">Education</div>
                        <p className="text-sm text-gray-600">Egyptian E-Learning University (EELU) in  Information Technology</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                        <div className="text-gray-800 font-medium mb-1">Projects</div>
                        <p className="text-sm text-gray-600">Built more than 10 projects</p>
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-gray-700 text-start font-medium">Tools I use</p>
                    <div className="flex gap-4">
                        <Image src={assets.vscode} alt="VSCode" className="w-8" />
                        <Image src={assets.firebase} alt="Firebase" className="w-8" />
                        <Image src={assets.mongodb} alt="Node" className="w-8" />
                        <Image src={assets.figma} alt="Figma" className="w-8" />
                        <Image src={assets.git} alt="Git" className="w-8" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About