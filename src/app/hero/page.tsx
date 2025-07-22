import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full h-screen flex flex-col relative bg-secondary bg-blend-multiply items-center'>
      <div className='w-full h-full bg-cover bg-center absolute top-0 left-0 bg-blend-multiply' style={{ backgroundImage: `url('/images/hero-bg.png')`}}>
      {/* <Image src='' alt='image' width={590} height={650} className='w-full h-full z-10 absolute bg-blend-multiply' /> */}
      </div>
     <div className='w-full h-full absolute top-0 left-0 z-20'>
       <div className='w-full h-[100px] flex justify-center  items-center'>
        <Header />
      </div>
      <div className='w-full h-full flex md:flex-row  flex-col lg:py-20 lg:gap-0 md:py-14 gap-4 sm:py-8 py-4 md:items-center'>
        <div className='md:w-1/2 max-md:max-w-md xl:max-w-2xl lg:max-w-lg font-sans h-auto flex flex-col gap-5 xl:pl-13 lg:pl-14 md:pl-10 px-5 justify-center'>
    <h1 className='font-bold 2xl:text-6xl xl:text-5xl sm:text-4xl text-3xl text-white'>Where Knowledge Meets Opportunity</h1>
          <p className='sm:text-base text-sm pr-20 pl-2 text-white'>
            Apply now or visit our beautiful campus to see why thousands of students choose [Your University Name] every year.
          </p>
          <div className="w-auto h-auto flex flex-wrap gap-4 p-2">
            <button className="text-white border-2 border-white px-8 py-2 uppercase rounded-lg font-semibold">
              Explore Programs
            </button>
            <button className="text-secondary bg-white px-8 py-2 uppercase rounded-lg font-semibold">
              Apply Now
            </button>
          </div>
        </div>
        <div className='md:w-1/2 w-full h-auto flex justify-end items-center'>
          <Image src='/images/hero-image.png' alt='image' width={590} height={650}  className='absolute w-[50%] md:h-[95%] h-[60%] md:top-9 bottom-0 right-0' />
        </div>
      </div>
     </div>
    </div>
  )
}

export default HeroPage
