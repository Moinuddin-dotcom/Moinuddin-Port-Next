"use client";

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
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";

export default function Email() {
    const { theme } = useTheme();

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <Card className="p-0 max-w-sm w-full shadow-none border-none">
            <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0"
            >
                {/* <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader> */}
                <CardContent className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Enter your name</Label>
                                <Input id="name" type="text" {...register("name")} placeholder="Moinuddin Chy" />
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
                            <Button type='submit' className="w-full">Sign In</Button>
                        </CardFooter>
                    </form>
                </CardContent>

            </MagicCard>
        </Card>
    )
}
