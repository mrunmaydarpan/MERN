import React, { memo } from 'react'

const Header = ({ data, name }) => {
    console.log("child component render");

    return (
        <div>
            <h1>                {name}  </h1>
            <button onClick={data}>change name</button>
        </div>
    )
}

export default memo(Header)