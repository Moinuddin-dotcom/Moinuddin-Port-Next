'use client';

// import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkLight() {
    const { theme, setTheme } = useTheme();
    return (

        <Toggle
className={'cursor-pointer'}
            aria-label="Toggle bold"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {
                theme === 'light' ? <Moon className="h-50 w-50 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 " /> :
                    <Sun className="h-50 w-50 rotate-90 scale-0 dark:-rotate-0 dark:scale-100 " />
            }
        </Toggle>
    )
}
