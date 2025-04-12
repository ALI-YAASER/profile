import React from 'react'
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
return (
    <div  className='w-11/12 max-w-3xl text-center  mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div className="">
            <Image src={assets.ali} className=' rounded-full w-36' alt='' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 ' >Hi! I’m Ali Yasser <Image src={assets.hand_icon} className='w-6' alt=''/></h3>
        <div className="flex items-center space-x-3 ">
                    <a className='transition-transform duration-200 hover:scale-105' href="https://www.facebook.com/profile.php?id=100035505964639" target="_blank">
                    <i className="fa-brands fa-facebook w-8"></i>
                    </a>
                    <a className='transition-transform duration-200 hover:scale-105 ' href="https://www.linkedin.com/in/ali-yasser-amer-aa06202a2/" target="_blank">
                        <i className="fa-brands fa-linkedin w-8"></i>
                    </a>
                    <a className='transition-transform duration-200 hover:scale-105 ' href="https://www.instagram.com/ali_akila_16/?hl=ar" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a className='transition-transform duration-200 hover:scale-105 ' href="https://github.com/ALI-YAASER" target="_blank">
                        <i className="fa-brands fa-github w-8"></i>
                    </a>
                </div>
        <h1 className='text-5xl sm:text-7xl lg:text-[66px] font-semibold'>frontend web developer.</h1>
        <p className='max-w-2xl mx-auto text-gray-700 font-serif'>I am a frontend developer from Elfayoum, EGYPT with 3 years of experience in multiple projects</p>
        <div className="flex flex-col md:flex-row gap-4 mt-4  ">
            <a href='#contact' className='bg-black py-7 px-10 text-white flex items-center cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-lg border border-white rounded-full gap-2'>Connect with me <Image className='w-6 mx-3' src={assets.right_arrow_white} alt=''/></a>
            <a href='/sample-resume.pdf' download className='flex px-10  py-7 items-center cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-lg border border-gray-700 rounded-full gap-2 '>My resume <Image src={assets.download_icon} alt='' className='w-6 mx-3'/></a>
        </div>
    </div>
)
}

export default Header