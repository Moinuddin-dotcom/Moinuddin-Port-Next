import { motion } from "motion/react"
import { Ovo } from "next/font/google";
import { TabsDemo } from "./components/TabsDemo";

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Skills() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                id="skills" className={`w-full px-[12%] py-0 scroll-mt-20`}>
                <motion.h4
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className={`text-center mb-2 text-lg ${ovo.className}`}>Expertices</motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`text-center text-5xl ${ovo.className}`}>My Skills</motion.h2>
            </motion.div>
            <TabsDemo />
        </>
    )
}
