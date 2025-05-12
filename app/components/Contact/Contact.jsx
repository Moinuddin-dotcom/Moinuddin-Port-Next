import { Ovo } from "next/font/google";
import Email from "./Email";




const ovo = Ovo({
    weight: ["400"],
    subsets: ["latin"],
});

export default function Contact() {
    return (
        <div id="contact" className={"w-full px-[12%] py-20 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"}>
            {/* bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] */}
            {/* bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] */}
            <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>Connect with me</h4>
            <h2 className={`text-center text-5xl ${ovo.className}`}>Get in touch</h2>

            <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}> Lets connect and chat about your project, I'm always happy to help you out.</p>

            {/* Email Section */}
            <Email />
        </div>
    )
}
