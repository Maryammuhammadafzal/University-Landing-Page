import React from 'react'

type HeadingProp = {
    title : string
}
const Heading = ({title}: HeadingProp) => {
    return (
        <h2 className='lg:text-5xl w-full md:text-4xl sm:text-3xl text-2xl font-bold font-sans uppercase md:px-2 text-[#C5A100]'>
            {title}
        </h2>
    )
}

export default Heading
