import Image from 'next/image'
import React from 'react'

const ProgramCard = () => {
    const program_data = [
        {
            title: 'Undergraduate Programs',
            description: 'From arts and humanities to science and technology, explore programs that lay the foundation for a successful career.',
        },
        {
            title: 'Graduate Programs',
            description: 'Advance your knowledge with master’s, doctoral, and professional degrees guided by experienced mentors and cutting-edge research.',
        },
        {
            title: 'Online Education',
            description: 'Flexible and accessible programs designed for lifelong learners and working professionals.',
        },
    ]
  return (
    <div className='w-full h-auto flex justify-center items-center lg:gap-7 gap-4 max-lg:flex-wrap'>
                  {program_data.map((item, index) => (
                      <div key={index} className='w-[330px] bg-secondary  rounded-[20px] h-[325px] flex group justify-center items-center'>
                          <div className='w-full h-full rounded-lg justify-center items-center-safe flex relative'>
                              <div className='w-full min-h-[100px] absolute z-10 flex justify-center items-center text-white top-10'>
                                  <div className='w-full h-full flex flex-col gap-2 items-center text-center justify-center '>
                                      <h4 className='font-bold text-3xl px-10'>{item.title}</h4>
                                      <p className='px-8'>
                                         {`${item.description}`}
                                      </p>
                                  </div>
                              </div>
                              <div className='w-full h-auto absolute bottom-0 right-0 flex justify-end items-end min-h-[100px]'>
                                  <div className='w-full h-[60px] relative flex flex-col justify-end items-end'>
                                      <Image src='/images/vector2.png' alt='image' width={600} height={440} className='absolute bottom-0 w-[133px] h-[60px] right-0' />
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
      
                  }
          
    </div>
  )
}

export default ProgramCard
