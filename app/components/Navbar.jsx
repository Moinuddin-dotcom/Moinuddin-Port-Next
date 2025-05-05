import { assets } from '@/assets/assets'
import Image from 'next/image'
import { Ovo } from "next/font/google";

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});


export default function Navbar() {
    return (
        <>
            <nav className='flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50'>
                <a href="#top">
                    <Image src={assets.logo} alt="logo" width={100} height={50} className='cursor-pointer mr-14' />
                </a>
                <ul className='hidden md:flex  items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
                    <li><a className={ovo.className} href="#top">Home</a></li>
                    <li><a className={ovo.className} href="#about">About Me</a></li>
                    <li><a className={ovo.className} href="#services">Services</a></li>
                    <li><a className={ovo.className} href="#work">My Work</a></li>
                    <li><a className={ovo.className} href="#contact">Contact Me</a></li>
                </ul>
                <div >
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                        <span>Contact</span>
                        <span>
                            <Image src={assets.arrow_icon} width={10} height={3} alt='arrow icon' className='' />
                        </span>
                    </a>
                </div>
            </nav >
        </>
    )
}
