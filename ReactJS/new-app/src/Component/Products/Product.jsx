import React, { useEffect, useState } from 'react'
import './Products.css'
import { product } from './ProductJson'
import { AddToCart } from '../../Redux/Action/Action'
import { RemoveFromCart } from '../../Redux/Action/Action'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
    let [data, setData] = useState();
    let productParam = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        setData(product.filter((a) => a.category === productParam.name));
    }, [product]);

    return (
        <>
            {
                data ?
                    data.map(a => {
                        return (
                            <div className="card d-inline-block" style={{ width: "18rem" }} key={a.id}>
                                <img src={a.thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{a.brand}</h5>
                                    <h6>{a.price}$</h6>
                                    <p className="card-text">{a.description}</p>
                                    <Link to="/" className="btn btn-primary">Add to Cart</Link>
                                </div>
                            </div>
                        )
                    }) : null
            }
        </>
    )
}

export default Product