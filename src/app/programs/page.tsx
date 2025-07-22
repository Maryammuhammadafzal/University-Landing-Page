
import Heading from '@/components/Heading'
import ProgramCard from '@/components/ProgramCard'
import React from 'react'

const ProgramsPage = () => {
    return (
        <div className='w-full h-auto flex flex-col justify-center lg:py-20 md:py-14 gap-16 sm:py-8 py-4 md:items-center'>
            <div className=' max-w-2xl items-center text-center h-auto flex flex-col gap-3 xl:pl-13 lg:pl-14 md:pl-10 px-5 justify-center'>
                <Heading title='Academic Programs' />
                <p className='sm:text-base text-sm pr-5 pl-2 text-secondary'>
                    We offer a wide range of undergraduate, graduate, and doctoral programs designed to meet the needs of today’s dynamic world:
                </p>

            </div>
            <ProgramCard />

            <div className="w-auto h-auto p-2">
                <button className="bg-secondary text-white px-8 py-2 uppercase rounded-lg font-semibold">
                    More Details
                </button>
            </div>
        </div>
    )
}

export default ProgramsPage
