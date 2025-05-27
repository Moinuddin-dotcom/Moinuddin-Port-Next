"use client";

import { slideData } from "@/assets/projects";
import Carousel from "@/components/ui/carousel";

export default function ProjectsCurosel() {
   
    return (
        <div className="relative overflow-hidden w-full h-full pb-20">
            <Carousel slides={slideData} />
        </div>
    )
}
