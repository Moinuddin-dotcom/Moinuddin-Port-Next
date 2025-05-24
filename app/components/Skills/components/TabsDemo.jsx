"use client";

import { database, libiriesFrameworks, programmeingSkills, toolsPlatforms } from "@/assets/assets";
import { TypingAnimation } from "@/components/magicui/typing-animation";
// import { Tabs } from "../ui/tabs";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

import { motion } from "motion/react"
import { Ovo } from "next/font/google";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export function TabsDemo() {
  const tabs = [
    {
      title: "Programming Languages",
      value: "Programming Languages",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 border-2 border-gray-600 dark:border-none text-black dark:text-white bg-white dark:bg-gradient-to-br from-purple-950 to-violet-950 ">
          <TypingAnimation className="text-xl md:text-xl font-semibold text-center">Core languages I use for development...</TypingAnimation>
          <ProgrammingLanguages />
        </div>
      ),
    },
    {
      title: "Libraries & Frameworks",
      value: "Libraries & Frameworks",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 border-2 border-gray-600 dark:border-none text-black dark:text-white bg-white dark:bg-gradient-to-br from-purple-950 to-violet-950 ">
          <TypingAnimation className="text-xl md:text-xl font-semibold text-center">Tools that accelerate my development workflow...</TypingAnimation>
          <LibrariesFrameworks />
        </div>
      ),
    },
    {
      title: "Database",
      value: "Database",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 border-2 border-gray-600 dark:border-none text-black dark:text-white bg-white dark:bg-gradient-to-br from-purple-950 to-violet-950 ">
          <TypingAnimation className="text-xl md:text-xl font-semibold text-center">Solutions I use for data storage and management...</TypingAnimation>
          <Database />
        </div>
      ),
    },
    {
      title: "Tools & Platforms",
      value: "Tools & Platforms",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 border-2 border-gray-600 dark:border-none text-black dark:text-white bg-white dark:bg-gradient-to-br from-purple-950 to-violet-950 ">
          <TypingAnimation className="text-xl md:text-xl font-semibold text-center">Essential tools that support my development process...</TypingAnimation>
          <Tools />
        </div>
      ),
    }
  ];

  return (
    <div
      className="h-[80rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col items-center justify-center mt-10 md:max-w-[90vw] mx-auto ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const ProgrammingLanguages = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {programmeingSkills.map(({ name, level, icon }, idx) =>
          <div key={idx} className="flex items-center justify-center gap-4 p-10 border-2 border-gray-600 dark:border-[#fcf4ff] dark:hover:border-none rounded-lg hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:-translate-y-1 duration-500 hover:shadow-2xl hover:shadow-black dark:hover:shadow-fuchsia-200 transition-all">
            <Image src={icon} alt="JavaScript" width={50} height={30} className='w-7 h-7' />
            <p className="text-lg font-bold">{name}</p>
            {/* <p className="text-lg font-bold">{level}</p> */}
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`max-w-[95vw] md:max-w-[60vw] mx-auto mt-40 px-[12%] scroll-mt-20 border-2 border-gray-600 dark:border-gray-400 flex flex-col items-center justify-center space-y-5 p-5 rounded-lg`}>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className={`text-center mb-2 text-lg ${ovo.className}`}>Looking to collaborate on a project?</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`text-center md:text-2xl ${ovo.className}`}>I'm always open to discussing new projects and opportunities.</motion.h2>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="#contact">
          <Button className={'cursor-pointer'}>Let's Connect <MoveRight /></Button>
        </motion.a>
      </motion.div>
    </>
  );
};
const LibrariesFrameworks = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        {libiriesFrameworks.map(({ librariesName, level, librariesIcon }, idx) =>
          <div key={idx} className="flex items-center justify-center gap-4 p-10 border-2 border-gray-600 dark:border-[#fcf4ff] dark:hover:border-none rounded-lg hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:-translate-y-1 duration-500 hover:shadow-2xl hover:shadow-black dark:hover:shadow-fuchsia-200 transition-all">
            <Image src={librariesIcon} alt="JavaScript" width={50} height={30} className='w-7 h-7' />
            <p className="text-lg font-bold">{librariesName}</p>
            {/* <p className="text-lg font-bold">{level}</p> */}
          </div>
        )}
      </div>
    </>
  );
};
const Database = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {database.map(({ dbname, level, dbicon }, idx) =>
          <div key={idx} className="flex items-center justify-center gap-4 p-10 border-2 border-gray-600 dark:border-[#fcf4ff] dark:hover:border-none rounded-lg hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:-translate-y-1 duration-500 hover:shadow-2xl hover:shadow-black dark:hover:shadow-fuchsia-200 transition-all">
            <Image src={dbicon} alt="JavaScript" width={50} height={30} className='w-7 h-7' />
            <p className="text-lg font-bold">{dbname}</p>
            {/* <p className="text-lg font-bold">{level}</p> */}
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`max-w-[95vw] md:max-w-[60vw] mx-auto mt-40 px-[12%] scroll-mt-20 border-2 border-gray-600 dark:border-gray-400 flex flex-col items-center justify-center space-y-5 p-5 rounded-lg`}>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className={`text-center mb-2 text-lg ${ovo.className}`}>Looking to collaborate on a project?</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`text-center md:text-2xl ${ovo.className}`}>I'm always open to discussing new projects and opportunities.</motion.h2>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="#contact">
          <Button className={'cursor-pointer'}>Let's Connect <MoveRight /></Button>
        </motion.a>
      </motion.div>
    </>
  );
};
const Tools = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {toolsPlatforms.map(({ toolsName, level, toolsIcon }, idx) =>
          <div key={idx} className="flex items-center justify-center gap-4 p-10 border-2 border-gray-600 dark:border-[#fcf4ff] dark:hover:border-none rounded-lg hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:-translate-y-1 duration-500 hover:shadow-2xl hover:shadow-black dark:hover:shadow-fuchsia-200 transition-all">
            <Image src={toolsIcon} alt="JavaScript" width={50} height={30} className='w-7 h-7' />
            <p className="text-lg font-bold">{toolsName}</p>
            {/* <p className="text-lg font-bold">{level}</p> */}
          </div>
        )}
      </div>

    </>
  );
};
