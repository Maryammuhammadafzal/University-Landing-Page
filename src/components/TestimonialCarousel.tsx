import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function TestimonialCarousel() {
    return (
        <Carousel className="w-full max-w-[80%]">
            <CarouselContent className='w-[99%] pl-6'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className=" mx-3 min-h-[100px] py-10 rounded-lg bg-secondary ">
                        <div className="p-1 w-full flex h-full flex-col justify-center items-center relative text-center gap-8">
                            <p className="text-white text-3xl font-semibold w-[80%]" >"Professor Khan not only taught me how to solve problems but also how to think differently — he changed my life!"</p>
                            <p className="text-white text-3xl font-semibold">– Ayesha R., Computer Science Graduate</p>
                        <CarouselPrevious className="absolute left-0 top-37" />
                        <CarouselNext className="absolute top-37 right-5" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
