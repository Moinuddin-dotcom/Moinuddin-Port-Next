import { assets } from '@/assets/assets'
import Image from 'next/image'
import { Ovo } from "next/font/google";

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Header() {
    return (
        <div className='w-11/12 max-w-3xl mx-auto text-center pt-10 flex flex-col items-center justify-center gap-4'>
            <div className='mt-16'>
                <Image src={assets.profile_img} alt='Profile' width={150} height={150} className='rounded-full' />
            </div>
            <h3 className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className}`}>Hi there, I'm Moin Uddin <Image src={assets.hand_icon} alt='Hand' width={20} height={20} className='' /></h3>
            <h1 className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className}`}>Frontend web devloper based in Bangladesh</h1>
            <p className={`max-w-2xl mx-auto ${ovo.className}`}>I'm a passionate web developer with a strong focus on design and user experience. I love creating innovative and user-friendly websites that are both visually appealing and easy to navigate.</p>
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-gray-500 bg-black rounded-full flex items-center gap-2 text-white'>Contact Me <Image src={assets.right_arrow_white} alt='Hand' width={20} height={20} className='' /> </a>


                <a href="/sample-resume.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2'>
                    My Resume <Image src={assets.download_icon} alt='Hand' width={20} height={20} className='' /> </a>
            </div>
        </div>
    )
}
