import React, { useEffect, useState } from 'react';
import {getCartAmount,getCartProducts} from './dataSync.js'
import Cart from './Cart.jsx';
const Carts = () => {
    const [cartBalance,setCartBalance]=useState(0)
    useEffect(()=>{
        setCartBalance(getCartAmount)
    })
    const [products,setProducts]=useState(getCartProducts())

    return (
        <div>
            <h1>Carts</h1>
            <h1>{cartBalance}</h1>
            <h1>{getCartProducts().length}</h1>
            {
                products.map(product=>
                    <Cart key={product.product_id} product={product}></Cart>
                )
            }
        </div>
    );
};

export default Carts;