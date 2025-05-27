import { Ovo } from "next/font/google";
import { motion } from "motion/react"
import { MoveRight } from "lucide-react";
import ProjectsCurosel from "./components/curosel";
import Link from "next/link";

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function MyProjects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work" className={`w-full px-[12%] pt-40 scroll-mt-20 `}>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-center mb-2 text-lg ${ovo.className}`}>My Portfolio</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-center text-5xl ${ovo.className}`}>My latest work</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}>These projects highlight my skills in building modern, responsive, and user-friendly interfaces using technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js. I focus on delivering seamless user experiences through clean design, interactive elements, and optimized performance. Each project showcases my ability to translate design concepts into functional, accessible, and maintainable code. Whether it's a single-page application, a dynamic dashboard, or a responsive landing page, my goal is always to create interfaces that are not only visually appealing but also intuitive and efficient.</motion.p>
            <ProjectsCurosel />
            {/* <Link href={'/HeroParalaxWork'}>
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-max cursor-pointer flex items-center justify-center gap-2 text-gray-700 border-2 border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a]">
                    Show more <MoveRight />
                </motion.button>
            </Link> */}
        </motion.div>
    )
}
