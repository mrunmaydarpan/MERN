import React from 'react'

const Display = (props) => {
    function delteHandler(id) {
        props.setArr((prevalue) => {
            return prevalue.filter((data) => {
                return data.id !== id;
            })
        })

    }

    return (
        props.arr.map((data) => {
            return (
                <>
                    <div className="card" key={data.id}>
                        <div className="card-body">
                            {data.text}<span><button className="btn btn-danger" onClick={() => { delteHandler(data.id) }}>delete</button></span>
                        </div>
                    </div>
                </>
            )
        }))
}

export default Display