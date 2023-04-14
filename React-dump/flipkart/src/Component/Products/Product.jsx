import React, { useEffect, useState } from 'react'
import './Products.css'
import { product } from './ProductJson'

const Product = () => {
    let [data, setData] = useState();

    useEffect(() => {
        if (product.name === "mobile") {
            setData(product.product.filter((a) => {
                console.log(a);
            }))
        }
    })
    return (
        <div className="card mt-5" style={{ width: "18rem" }}>
            <img src="https://cdn4.buysellads.net/uu/1/127419/1670532337-Stock2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Product