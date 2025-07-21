import Heading from '@/components/Heading'
import React from 'react'

const QuickActionPage = () => {
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-1/2 h-auto flex flex-col gap-5 justify-center'>
                <Heading title='Start your journey with us today!' />
                <p className='sm:text-base text-sm'>
                    Apply now or visit our beautiful campus to see why thousands of students choose [Your University Name] every year.
                </p>
            </div>
        </div>
    )
}

export default QuickActionPage
