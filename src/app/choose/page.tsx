import Heading from '@/components/Heading'
import Image from 'next/image'
import React from 'react'

const ChoosePage = () => {
    const choose_data = [
        ' Renowned faculty & rigorous academics.',
        ' Modern labs, libraries, and learning spaces.',
        ' Strong focus on research & innovation.',
        'Global partnerships & exchange programs.',
        'Career services & internship opportunities.',
        'Supportive and inclusive campus community.'
    ]
    return (
        <div className='w-full h-auto flex md:flex-row flex-col justify-center lg:py-20 lg:gap-0 md:py-14 gap-4 sm:py-8 py-4 md:items-center'>
            <div className='md:w-1/2 max-md:max-w-md h-auto flex flex-col gap-5 xl:pl-13 lg:pl-14 md:pl-10 px-5 justify-center order-2'>
                <Heading title='Why Choose Us?' />
                <p className='sm:text-base text-sm pr-5 pl-2 max-w-lg text-secondary'>
                   {` Life at [Your University Name] is more than just academics — it’s about building
                    friendships, discovering passions, and creating memories.`}
                </p>
                <ul className="w-auto max-w-md h-auto p-2 flex gap-3 flex-col">
                    {choose_data.map((item , index) => (
                        <li key={index} className='w-full h-auto lg:px-3 px-1 text-center py-3 rounded-[10px] bg-secondary text-white lg:text-xl sm:text-base xs:text-sm text-xs font-medium font-sans'>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='md:w-1/2 w-full h-auto flex justify-start items-center order-1'>
                <Image src='/images/choose-image.png' alt='image' width={590} height={550} />
            </div>
        </div>
    )
}

export default ChoosePage
