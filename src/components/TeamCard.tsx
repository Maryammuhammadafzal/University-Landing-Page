import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

const TeamCard = () => {
    const team_data = [
        {
            name: 'Dr. Sarah Khan',
            profession: 'Professor of Computer Science & Head of AI Research',
            image: '/images/team-image1.png'
        },
        {
            name: 'Prof. Daniel Lee',
            profession: 'Chair of Mechanical Engineering & Robotics Expert',
            image: '/images/team-image2.png'
        },
        {
            name: 'Dr. Ayesha Rehman',
            profession: 'Dean of Humanities & Cultural Studies',
            image: '/images/team-image3.png'
        },
    ];
    return (
        <div className=' w-full h-auto flex justify-center gap-5 flex-wrap items-center'>
            {
                team_data.map((team, index) => (
                    <Card key={index} className='w-[330px] group h-[470px] border-0 shadow-none flex mt-20 justify-center items-center'>
                        <CardContent className='w-full h-full flex flex-col justify-center items-center text-center'>
                            <div className='w-[330px] h-[330px] flex justify-center text-center relative items-center group-hover:bg-[text-[#C5A100]] bg-secondary rounded-2xl'>
                                <div className='absolute -top-41 left-0 w-auto h-auto'>
                                    <Image src={team.image} alt='image' width={330} height={440} className='w-full h-full' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 pt-2'>
                                <h3 className='font-sans text-3xl font-bold text-[#C5A100]'>{team.name}</h3>
                                <p className='text-secondary text-sm'>{team.profession}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }

        </div>

    )
}

export default TeamCard
