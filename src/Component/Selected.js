import React from 'react'
import { RxCross1 } from "react-icons/rx";


const Selected = ({ text, removeCategory }) => {
    return (

        <div className='text-white p-1 bg-customDarkGreen max-w-fit px-5 rounded-3xl flex items-center justify-center gap-2'>
            <p>{text}</p>
            <RxCross1 onClick={() => removeCategory(text)} className='text-customGray cursor-pointer' />
        </div>

    )
}

export default Selected