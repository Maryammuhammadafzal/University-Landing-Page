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
        <Carousel className="w-full xs:max-w-[80%] max-w-[95%]">
            <CarouselContent className='w-[99%] pl-6'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className=" mx-3 min-h-[100px] py-10 rounded-lg bg-secondary ">
                        <div className="p-1 w-full flex h-full flex-col justify-center items-center relative text-center gap-8">
                            <p className="text-white lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-base font-semibold md:w-[80%] w-[98%]" >"Professor Khan not only taught me how to solve problems but also how to think differently — he changed my life!"</p>
                            <p className="text-white lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-sm font-semibold">– Ayesha R., Computer Science Graduate</p>
                        <CarouselPrevious className="absolute left-0 md:top-37 sm:top-40 xs:top-40 top-43 " />
                        <CarouselNext className="absolute md:top-37 sm:top-40 xs:top-40 top-43  right-5" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
