"use client";

import { programmeingSkills } from "@/assets/assets";
import { TypingAnimation } from "@/components/magicui/typing-animation";
// import { Tabs } from "../ui/tabs";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export function TabsDemo() {
  const tabs = [
    {
      title: "Programming Languages",
      value: "Programming Languages",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 border-2 border-gray-600 dark:border-none text-black dark:text-white bg-white dark:bg-gradient-to-br from-purple-700 to-violet-900">
          {/* <p > */}
          <TypingAnimation className="text-xl md:text-xl font-semibold text-center">Core languages I use for development...</TypingAnimation>
          {/* </p> */}
          <ProgrammingLanguages />
        </div>
      ),
    },
    {
      title: "Libraries & Frameworks",
      value: "Libraries & Frameworks",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Libraries & Frameworks</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Database",
      value: "Database",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Database</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Tools & Platforms",
      value: "Tools & Platforms",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Tools & Platforms</p>
          <DummyContent2 />
        </div>
      ),
    }
  ];

  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col items-center justify-center mt-10 max-w-[90vw] mx-auto">
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
    </>
  );
};
const DummyContent2 = () => {
  return (
    <>
      Hey This is dummy content2
    </>
  );
};
