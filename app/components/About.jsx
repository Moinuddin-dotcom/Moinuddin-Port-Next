import { assets, infoList, toolsData } from "@/assets/assets";
import { Ovo } from "next/font/google";
import Image from "next/image";
import { motion } from "motion/react"

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className={`w-full px-[12%] pt-20 pb-10 scroll-mt-20`}>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-center mb-2 text-lg ${ovo.className}`}>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-center text-5xl ${ovo.className}`}>About Me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={assets.profile_pic_full} alt="User" className='w-full rounded-3xl border border-gray-500' />
                </motion.div>
                {/* fcf4ff */}
                {/* black: 4px 4px 0 #000 */}
                {/* white: 4px 4px 0 #fff */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className={` max-w-2xl ${ovo.className}`}>I'm Moin Uddin, a passionate web developer from Bangladesh. I specialize in building clean, user-friendly web applications using React, Node.js, and Firebase.
                        Currently, I’m expanding my skills with Next.js and TypeScript to build more robust and scalable projects.
                        I love solving problems, learning new technologies, and collaborating with others to turn ideas into real products.</p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl p-6 cursor-pointer">
                        {infoList.map(({ icon, iconDark, title, description }, idx) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                key={idx} className="border-2 border-gray-400 rounded-xl px-4 py-5 hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:-translate-y-1 duration-500 hover:shadow-2xl hover:shadow-black dark:hover:shadow-fuchsia-200 transition-all">
                                {/* style={{ boxShadow: theme === 'dark' ? '4px 4px 0 #fff' : '4px 4px 0 #000' }} */}
                                <Image src={icon} alt={title} width={20} height={20} className='w-7 mt-3' />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`mb-4 text-gray-700 dark:text-gray-200 ${ovo.className}`}>Tools I Use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-3 sm:gap-5">
                        {toolsData.map((tool, idx) => (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                key={idx} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <Image src={tool} alt='Tool' width={20} height={20} className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
