import { assets, infoList, toolsData } from "@/assets/assets";
import { Ovo } from "next/font/google";
import Image from "next/image";

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function About() {
    return (
        <div id='about' className={`w-full px-[12%] py-20 scroll-mt-20`}>
            <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>Introduction</h4>
            <h2 className={`text-center text-5xl ${ovo.className}`}>About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.profile_pic_full} alt="User" className='w-full rounded-3xl border border-gray-500' />
                </div>
                {/* fcf4ff */}
                {/* black: 4px 4px 0 #000 */}
                {/* white: 4px 4px 0 #fff */}
                <div className="flex-1">
                    <p className={`mb-10 max-w-2xl ${ovo.className}`}>I'm Moin Uddin, a passionate web developer with a strong focus on design and user experience. I love creating innovative and user-friendly websites that are both visually appealing and easy to navigate. I'm a self-taught developer who has always been fascinated by the world of web development and has a strong desire to learn and grow as a professional.</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl p-6 cursor-pointer">
                        {infoList.map(({ icon, iconDark, title, description }, idx) => (
                            <li key={idx} className="border-2 border-gray-400 rounded-xl px-4 py-5 hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:-translate-y-1 duration-500 hover:shadow-2xl hover:shadow-black dark:hover:shadow-fuchsia-200 transition-all">
                                {/* style={{ boxShadow: theme === 'dark' ? '4px 4px 0 #fff' : '4px 4px 0 #000' }} */}
                                <Image src={icon} alt={title} width={20} height={20} className='w-7 mt-3' />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className={`my-6 text-gray-700 dark:text-gray-200 ${ovo.className}`}>Tools I Use</h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {toolsData.map((tool, idx) => (
                            <li key={idx} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <Image src={tool} alt='Tool' width={20} height={20} className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
