import { assets, serviceData } from "@/assets/assets";
import { Ovo } from "next/font/google";
import Image from "next/image";
import { motion } from "motion/react"

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services" className={`w-full px-[12%] py-0 scroll-mt-20`}>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className={`text-center mb-2 text-lg ${ovo.className}`}>What I offer</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-center text-5xl ${ovo.className}`}>My Services</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}>I am a passionate web developer with a strong focus on design and user experience. I love creating innovative and user-friendly websites that are both visually appealing and easy to navigate. I'm a self-taught developer who has always been fascinated by the world of web development and has a strong desire to learn and grow as a professional.</motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
                {serviceData.map(({ icon, title, description, link }, idx) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={idx} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-2xl hover:shadow-black dark:hover:shadow-fuchsia-200 transition-all hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:-translate-y-2 duration-500">
                        <Image src={icon} alt="Icon" width={20} height={20} className='w-7 mt-3' />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-gray-300">{title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-5">{description}</p>
                        <a href={link} className="flex items-center gap-2 text-sm mt-5 ">Read More <Image src={assets.right_arrow} alt="Right Arrow" width={10} height={5} className='w-4 mt-1' /></a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
