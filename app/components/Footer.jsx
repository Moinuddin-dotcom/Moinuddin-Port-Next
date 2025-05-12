// import { assets } from '@/assets/assets'
import { Mail } from 'lucide-react'
// import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <span className='text-2xl font-bold'>Moinuddin</span>
                <span className='text-4xl text-red-600'>.</span>
            </div>
            <div className="email flex justify-center items-center gap-2 ">
                <Mail />
                moinchy7@gmail.com
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Moinuddin. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href='https://github.com/Moinuddin-dotcom'>Github</a></li>
                    <li><a target='_blank' href='https://www.linkedin.com/in/md-moinuddin-chowdhury-67098123b/'>Linkedin</a></li>
                    <li><a target='_blank' href='https://x.com/moinchy7'>Twitter</a></li>
                    {/* <li><a target='_blank' href='https://www.instagram.com/moinchy7/'>Instagram</a></li>
                    <li><a target='_blank' href='https://www.youtube.com/channel/UC1x2-9-8x7-1-2-3-4-5-6-7-8-9'>Youtube</a></li> */}
                </ul>
            </div>
        </div>
    )
}

{/* <Image src={assets.mail_icon} alt='mail icon' width={20} height={20} className='cursor-pointer' /> */ }