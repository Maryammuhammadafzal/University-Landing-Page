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
        <div className='lg:w-[85%] h-auto justify-center 2xl:justify-between items-center gap-6 flex flex-wrap'>
            {apply_data.map((item, index) => (
                <div key={index} className='w-[247px] bg-white h-[247px] flex group justify-center items-center'>
                    <div className='w-full h-full border border-[#C5A100]/50 rounded-lg flex relative'>
                        <div className='w-10 h-10 transition-transform rounded-full group-hover:scale-100 scale-0 duration-300'></div>
                        <div className='w-full min-h-[100px] absolute top-5 left-4'>
                            <div className='w-full h-full flex flex-col gap-2 '>
                                <h5 className='step text-2xl'>{item.step}</h5>
                                <h4 className='font-bold text-lg text-secondary'>{item.title}</h4>
                                <p className='text-secondary max-w-[200px]'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-auto absolute bottom-0 right-0 flex justify-end items-end min-h-[100px]'>
                            <div className='w-full h-[60px] relative flex flex-col justify-end items-end'>
                                <Image src='/images/vector.png' alt='image' width={600} height={440} className='absolute bottom-0 w-[133px] h-[60px] right-0' />
                                <Image src={item.image} alt='image' width={600} height={440} className='w-[45px] h-[45px] absolute right-8 rotate-6 bottom-6' />
                                <div className={`flex flex-col gap-4 max-2xl:hidden w-[42%] h-fit ${index === 0 &&  'bottom-10' || index === 1 && 'bottom-50' || index === 2 && 'bottom-30' || index === 3 && 'hidden'} absolute left-61 bg-white`}>
                                    <hr className='w-full border border-[#C5A100]/50' />
                                    <hr className='w-full border border-[#C5A100]/50' />
                                </div>
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
