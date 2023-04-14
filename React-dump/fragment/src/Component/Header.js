import React from 'react'

const Header = () => {
    let arr = ['apple', 'banana', 'orange', 'pineapple'];
    return (
        arr.map((a, i) => {
            return <React.Fragment key={i}>
                <ol>{a}</ol>
            </React.Fragment>
        })
    )
}

export default Header