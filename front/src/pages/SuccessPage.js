import React from 'react'
import { useLocation } from 'react-router-dom'

const SuccessPage = () => {
    const location = useLocation();

    console.log(location);
    return (
        <div>Successfull</div>
    )
}

export default SuccessPage