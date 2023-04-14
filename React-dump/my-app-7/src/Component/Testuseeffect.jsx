import React, { useEffect, useState } from 'react'
import axios from 'axios';

let Testuseeffect = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(a => setProducts(a.data.products));
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((a) => {
                            return (
                                <tr>
                                    <td>{a.id}</td>
                                    <td>{a.title}</td>
                                    <td>{a.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Testuseeffect;