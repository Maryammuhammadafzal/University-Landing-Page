import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full flex justify-center relative'>
        <Header />
      </div>
      <div className='w-full h-auto flex md:flex-row flex-col justify-center lg:py-20 lg:gap-0 md:py-14 gap-4 sm:py-8 py-4 md:items-center'>
        <div className='md:w-1/2 max-md:max-w-md h-auto flex flex-col gap-5 xl:pl-13 lg:pl-14 md:pl-10 px-5 justify-center'>
    <h1 className=''></h1>
          <p className='sm:text-base text-sm pr-5 pl-2 text-secondary'>
            Apply now or visit our beautiful campus to see why thousands of students choose [Your University Name] every year.
          </p>
          <div className="w-auto h-auto p-2">
            <button className="bg-secondary text-white px-8 py-2 uppercase rounded-lg font-semibold">
              Apply Now
            </button>
          </div>
        </div>
        <div className='md:w-1/2 w-full h-auto flex justify-end items-center'>
          <Image src='/images/hero-image.png' alt='image' width={590} height={650} />
        </div>
      </div>
    </div>
  )
}

export default HeroPage
