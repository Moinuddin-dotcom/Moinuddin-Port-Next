"use client";

import { assets } from "@/assets/assets";
import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Email() {
    const { theme } = useTheme();
    const [result, setResult] = useState("");

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        setResult("Sending....");
        const formData = new FormData();

        formData.append("access_key", "f5a5e7ad-50e0-46c5-ba00-49b9243a34b7");
        formData.append("email", data.email);
        formData.append("name", data.name);
        formData.append("user_message", data.userMessage);


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const resData = await response.json();

            if (resData.success) {
                setResult("Form Submitted Successfully");
                reset();
            } else {
                console.log("Error", resData);
                setResult(resData.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("An error occurred while submitting the form.");
        }
    }
    return (
        <Card className="p-0 max-w-2xl mx-auto w-full shadow-none border-none">
            <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0"
            >
                <CardContent className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Enter your name</Label>
                                <Input id="name" type="text" {...register("name")} placeholder="Parsian Khan" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Enter your email</Label>
                                <Input id="email" type="email" {...register("email")} placeholder="name@example.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Enter your message</Label>
                                <Textarea {...register("userMessage")} placeholder="Type your message here." />
                            </div>
                        </div>
                        <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
                            <Button type='submit' className="w-full cursor-pointer flex justify-center items-center group">Submit now <ArrowRight className="group-hover:translate-x-2 transition duration-500" />
                            </Button>
                        </CardFooter>
                        <p className="mt-5">{result}</p>
                    </form>
                </CardContent>

            </MagicCard>
        </Card>
    )
}

{/* <Image src={assets.right_arrow_white} alt="right arrow" width={20} height={20} className="group-hover:translate-x-2 transition duration-500" /> */ }