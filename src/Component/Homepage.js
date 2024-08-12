import React from 'react'
import { useSelector } from 'react-redux'

const Homepage = () => {
    const userdata = useSelector((state) => state.user);

    return (
        <div>
            <p>{userdata.name}</p>
        </div>
    )
}

export default Homepage