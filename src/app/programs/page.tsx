import ApplyCard from '@/components/ApplyCard'
import Heading from '@/components/Heading'
import React from 'react'

const ProgramsPage = () => {
    return (
        <div className='w-full h-auto flex flex-col justify-center lg:py-20 md:py-14 gap-16 sm:py-8 py-4 md:items-center'>
            <div className=' max-w-2xl items-center text-center h-auto flex flex-col gap-3 xl:pl-13 lg:pl-14 md:pl-10 px-5 justify-center'>
                <Heading title='How to Apply' />
                <p className='sm:text-base text-sm pr-5 pl-2 text-secondary'>
                    Whether you’re applying as a freshman, transfer student, international student, or for graduate studies — we’re here to guide you through every step of the process.
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
