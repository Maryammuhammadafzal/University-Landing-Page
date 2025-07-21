import Heading from '@/components/Heading'
import TeamCard from '@/components/TeamCard'

import React from 'react'

const TeamPage = () => {
    return (
        <div className='w-full h-auto flex flex-col justify-center lg:py-20 md:py-14 gap-10 sm:py-8 py-4 md:items-center'>
            <div className=' max-w-2xl items-center text-center h-auto flex flex-col gap-3 xl:pl-13 lg:pl-14 md:pl-10 px-5 justify-center'>
                <Heading title='What Students Say' />
                <p className='sm:text-base text-sm pr-5 pl-2 text-secondary'>
                    Behind every success story at [Your University Name], there is a teacher who believed in their students.
                </p>

            </div>
            <div className=' w-full h-auto flex justify-center gap-5 items-center'>
        <TeamCard/>
            </div>
        </div>
    )
}

export default TeamPage
