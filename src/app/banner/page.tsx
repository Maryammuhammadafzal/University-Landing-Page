import Heading from '@/components/Heading'
import Image from 'next/image'
import React from 'react'

const BannerPage = () => {
    return (
        <div className='w-full h-auto  lg:my-20 lg:gap-0 md:my-14 gap-4 sm:my-8 my-4 flex justify-center items-center'>
            <div className='w-full h-full min-h-[400px] flex md:flex-row relative flex-col bg-[#C5A100] justify-center md:items-center'>
            {/* <div className='overlay absolute top-0 left-0 w-full h-[400px] z-10 bg-cover bg-center' style={{backgroundImage: 'url(`/images/hero-bg.png`)'}}></div> */}
            <Image src='/images/hero-bg.png' alt='image' width={600} height={440} className='object-cover absolute top-0 left-0 object-center z-10 w-full h-full' />
            <div className='md:w-1/2 py-3 max-md:max-w-md h-auto flex flex-col gap-5 xl:pl-13 lg:pl-14 md:pl-10 px-5 justify-center'>
                <h2 className='lg:text-5xl w-full md:text-4xl sm:text-3xl text-2xl font-bold font-sans uppercase md:px-2 text-white'>
                    Research & Innovation
                </h2>
                <p className='sm:text-base text-sm pr-5 pl-2 text-secondary'>
                    We are at the forefront of discovery, driving solutions to some of the world’s most pressing challenges. From groundbreaking medical research to sustainability initiatives and technological advancements, our students and faculty push boundaries and create impact.
                </p>
                <div className="w-auto h-auto p-2">
                    <button className="bg-secondary text-white px-8 py-2 uppercase rounded-lg font-semibold">
                        Learn More About Our Research
                    </button>
                </div>
            </div>
            <div className='md:w-1/2 w-full h-full min-h-[300px] flex justify-end items-center'>
                <Image src='/images/banner-image.png' alt='image' width={600} height={440} className='w-[700px] absolute right-0 z-20  h-[400px]' style={{width: '600px'}} />
                <Image src='/images/banner-image2.png' alt='image' width={600} height={440} className='w-[300px] z-20 absolute right-10' />
            </div>
        </div>
        </div>
    )
}

export default BannerPage
