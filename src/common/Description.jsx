import React from 'react'

const Description = (props) => {
    return (
        <p className={`${props.className} font-space lg:text-base text-sm max-w-[570px] text-white`}>{props.title}</p>
    )
}

export default Description