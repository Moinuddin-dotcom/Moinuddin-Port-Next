import { assets } from '@/assets/assets'
import Image from 'next/image'
import { Ovo } from "next/font/google";
import { Download, MoveRight } from 'lucide-react';
import { motion } from "motion/react"

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Header() {
    return (
        <div className='w-11/12 max-w-3xl mx-auto text-center pt-10 flex flex-col items-center justify-center gap-4'>
            <motion.div className='mt-16'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_pic} alt='Profile' width={200} height={200} className='rounded-full border border-gray-500' />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className}`}>Hi there, I'm Moin Uddin <Image src={assets.hand_icon} alt='Hand' width={20} height={20} className='' /></motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className}`}>Frontend web devloper based in Bangladesh</motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className={`max-w-2xl mx-auto ${ovo.className}`}>I'm a passionate web developer with a strong focus on design and user experience. I love creating innovative and user-friendly websites that are both visually appealing and easy to navigate.</motion.p>
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact" className='px-10 py-3 border border-gray-500 bg-black dark:bg-[#ffff] rounded-full flex items-center gap-2 text-white dark:text-black'>Contact Me <MoveRight /> </motion.a>


                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/Moinuddin-Resume.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'>
                    My Resume <Download /> </motion.a>
            </div>
        </div>
    )
}
