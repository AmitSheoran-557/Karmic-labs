import React from 'react'

const CustomHeading = (props) => {
    return (
        <h2 className={`${props.className} font-light xl:text-[56px] lg:text-5xl md:text-4xl text-3xl !leading-[108%] uppercase`}>{props.title}</h2>
    )
}

export default CustomHeading