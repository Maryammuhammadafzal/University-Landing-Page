import React from 'react'

type HeadingProp = {
    title : string
}
const Heading = ({title}: HeadingProp) => {
    return (
        <h2 className='lg:text-5xl w-full sm:text-4xl text-3xl font-bold font-sans uppercase md:px-2 text-[#C5A100]'>
            {title}
        </h2>
    )
}

export default Heading
