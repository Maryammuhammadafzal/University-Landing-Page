import Image from 'next/image'
import React from 'react'

const ApplyCard = () => {
    const apply_data = [
        {
            step: 'Step 1:',
            title: 'Choose your program',
            description: 'Explore our [Undergraduate], [Graduate], or [Online] programs.',
            image: '/images/apply-icon1.png'
        },
        {
            step: 'Step 2:',
            title: 'Prepare your documents',
            description: 'Transcripts, test scores (if required), recommendation letters, and a personal statement.',
            image: '/images/apply-icon2.png'
        },
        {
            step: 'Step 3:',
            title: 'Complete The Process',
            description: 'Complete the online application and pay the application fee.',
            image: '/images/apply-icon3.png'
        },
        {
            step: 'Step 4:',
            title: 'Track Status',
            description: 'Track your application status through our online portal.',
            image: '/images/apply-icon4.png'
        },
    ]
    return (
        <div className='lg:w-[85%] h-auto justify-between items-center flex flex-wrap'>
            {apply_data.map((item, index) => (
                <div className='w-[247px] bg-white h-[247px] flex justify-center items-center'>
                    <div className='w-full h-full border border-secondary rounded-lg flex relative'>
                        <div className='w-full min-h-[100px] absolute top-5 left-4'>
                            <div className='w-full h-full flex flex-col gap-2 '>
                                <h4 className='font-bold text-lg text-secondary'>{item.title}</h4>
                                <p className='text-secondary max-w-[200px]'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-auto absolute bottom-0 right-0 min-h-[100px]'>
                            <div className='w-full h-full relative flex justify-end items-end'>
                                <Image src='/images/vector.png' alt='image' width={600} height={440} className='absolute bottom-0 w-[100px] right-0' />
                                <Image src={item.image} alt='image' width={600} height={440} className='w-[100px] absolute right-10 bottom-4' />

                            </div>
                        </div>
                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default ApplyCard
