import { assets, workData } from "@/assets/assets";
import { Ovo } from "next/font/google";
import Image from "next/image";

const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Work() {
    return (
        <div id="work" className={`w-full px-[12%] py-20 scroll-mt-20 `}>
            <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>My Portfolio</h4>
            <h2 className={`text-center text-5xl ${ovo.className}`}>My latest work</h2>

            <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}>Welcome! I am a passionate web developer with a strong focus on design and user experience. I love creating innovative and user-friendly websites that are both visually appealing and easy to navigate. I'm a self-taught developer who has always been fascinated by the world of web development and has a strong desire to learn and grow as a professional.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-10">
                {workData.map((project, idx) => (
                    <div key={idx} style={{ backgroundImage: `url(${project.bgImage})` }} className="w-full h-60 bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer group">
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-6 -translate-1 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold text-black">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 h-9 aspect-square p-1 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <Image src={assets.send_icon} alt="Send Icon" width={20} height={20} className='w-7 p-1' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-2 border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 dark:text-white dark:border-white dark:hover:bg-[#2a004a]">
                Show more <Image src={assets.right_arrow_bold} alt="right arrow" width={10} height={5} className='w-4' />
            </a>
        </div>
    )
}
