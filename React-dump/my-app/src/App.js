import React from 'react'
import { useState } from 'react'
import data from './data'
import Product from './Product'

const App = () => {
    console.log(data);
    let [products, setProducts] = useState(data);
    return (
        <div className='d-flex flex-wrap'>
            {
                products.map(a => {
                    return (
                        <product data={a} />
                    )
                })
            }
        </div>
    )
}

export default App