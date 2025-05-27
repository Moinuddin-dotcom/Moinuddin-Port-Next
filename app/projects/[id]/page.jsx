"use client";

import { Ovo } from "next/font/google";
import { motion } from "motion/react"
import Link from "next/link";
import { useParams } from "next/navigation";
import { slideData } from "@/assets/projects";
import Image from "next/image";

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});


export default function ProjectDetails() {
    const params = useParams();
    const { id } = params;

    const project = slideData.find((slide) => slide.id === id);

    if (!project) {
        return <div className="text-center mt-20">Project not found</div>;
    }

    const { projectName, title, description, technologies, liveLink, gitLink, src, images } = project;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-full px-[12%] pt-20 pb-20 ${ovo.className}`}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-5xl font-semibold text-center mb-6">
                {projectName}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={500}
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-8" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
                <div className="">
                    <Link href={liveLink} target="_blank" className="text-blue-600 hover:underline pr-2">
                        Visit Live Site
                    </Link>
                    <span className="text-blue-600">|</span>
                    <Link href={gitLink} target="_blank" className="text-blue-600 hover:underline pl-2">
                        Git Repo Link
                    </Link>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    <span className="font-semibold">About this project:</span> {description.about}
                    <br />
                    <span className="font-semibold">Difficulties:</span> {description.difficulties}
                    <br />
                    <span className="font-semibold">Upcomings:</span> {description.upcomings}
                </p>
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <ul className="list-disc list-inside mb-6">
                    {technologies.map((tech, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">{tech}</li>
                    ))}
                </ul>

                {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Additional Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${title} screenshot ${index + 1}`}
                            className="w-full rounded-lg shadow-md"
                        />
                    ))}
                </div> */}
                <Link
                    href="/#work"
                    className="mt-8 inline-block px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition duration-200">
                    Back to Projects
                </Link>
            </motion.div>
        </motion.div>
    );
}