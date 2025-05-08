import { Poppins, Outfit, Ovo } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Moinuddin | Portfolio",
  description: "Get known about my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} ${outfit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
