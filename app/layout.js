import { Poppins, Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${outfit.className} ${ovo.className} dark:bg-[#1c0032] antialiased leading-6 overflow-x-hidden`}
      >
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
