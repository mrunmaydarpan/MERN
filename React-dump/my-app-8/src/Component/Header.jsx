import React from "react";
import Hoc from '../Utils/Hoc'

function Header({ data }) {
    return (
        <div>
            <h1>{data.plan}</h1>
        </div>
    )
}

export default Hoc(Header);