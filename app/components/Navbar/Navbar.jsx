import { assets } from '@/assets/assets'
import Image from 'next/image'
import { Ovo } from "next/font/google";
import { useEffect, useRef, useState } from 'react';
import DarkLight from './components/DarkLight';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { motion, useScroll } from "motion/react"

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});


export default function Navbar() {
    const { scrollYProgress } = useScroll()
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 200) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        });
    }, [])


    return (
        <>

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                {/* <Image src={assets.header_bg_color} alt='Bg' className='w-full' /> */}
            </div>
            <nav className={`flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50
                ${isScroll ? ' bg-white/20 dark:bg-[#2a004a] opacity-80 backdrop-blur-lg shadow-sm' : ''}`}>

                <a href="#top">
                    {/* <Image src={assets.logo} alt="logo" width={100} height={50} className='cursor-pointer mr-14' /> */}
                    <div>
                        <span className='text-2xl font-bold'>Moinuddin</span>
                        <span className='text-4xl text-red-600'>.</span>
                    </div>
                </a>
                <ul className={`hidden md:flex  items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                    ${isScroll ? '' : 'bg-white dark:bg-white/10 dark:border dark:border-white shadow-sm bg-opacity-50'} `}>
                    <motion.div
                        id="scroll-indicator"
                        style={{
                            scaleX: scrollYProgress,
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 10,
                            originX: 0,
                        }}
                        className='bg-black dark:bg-white'
                    ></motion.div>
                    <li><a className={ovo.className} href="#top">Home</a></li>
                    <li><a className={ovo.className} href="#about">About Me</a></li>
                    {/* <li><a className={ovo.className} href="#services">Services</a></li> */}
                    <li><a className={ovo.className} href="#skills">Skills</a></li>
                    <li><a className={ovo.className} href="#work">My Work</a></li>
                    <li><a className={ovo.className} href="#contact">Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <DarkLight />


                    <a href="#contact" className='hidden lg:flex items-center gap-1.5 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white'>
                        <span>Contact</span>
                        <span>
                            {/* <Image src={assets.arrow_icon} width={10} height={3} alt='arrow icon' className='' /> */}
                            <ArrowUpRight className='w-5 h-5' />
                        </span>
                    </a>
                    <button onClick={openMenu} className='block md:hidden ml-3'>
                        {/* <Image src={assets.menu_black} alt='Menu' width={20} height={20} className='cursor-pointer' /> */}
                        <Menu />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-[#2a004a] transition duration-500'>

                    <div onClick={closeMenu} className='absolute right-6 top-6'>
                        {/* <Image src={assets.close_black} alt='Close' width={20} height={20} className='cursor-pointer' /> */}
                        <X />
                    </div>

                    <li><a onClick={closeMenu} className={ovo.className} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} className={ovo.className} href="#about">About Me</a></li>
                    {/* <li><a onClick={closeMenu} className={ovo.className} href="#services">Services</a></li> */}
                    <li><a onClick={closeMenu} className={ovo.className} href="#skills">Skills</a></li>
                    <li><a onClick={closeMenu} className={ovo.className} href="#work">My Work</a></li>
                    <li><a onClick={closeMenu} className={ovo.className} href="#contact">Contact Me</a></li>
                </ul>
            </nav >
            {/* </motion.div> */}
        </>
    )
}
