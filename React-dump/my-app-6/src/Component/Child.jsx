import React, { useContext } from 'react'
import { authContext } from '../Api/UserContext'

const Child = () => {
    let data = useContext(authContext);
    console.log(data);
    return (
        <>
            <h1>hello</h1>
        </>
    )
}

export default Child;