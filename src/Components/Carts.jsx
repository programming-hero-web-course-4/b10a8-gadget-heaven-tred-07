import React, { useEffect, useState } from 'react';
import {getCartAmount,getCartProducts} from './dataSync.js'
import Cart from './Cart.jsx';
const Carts = () => {
    const [cartBalance,setCartBalance]=useState(0)

    useEffect(()=>{
        setCartBalance(getCartAmount())
    },[])

    const [products,setProducts]=useState([])

    useEffect(()=>{
        const cartItems=localStorage.getItem("cartItems")
        if(cartItems){
            setProducts(JSON.parse(cartItems))
        }
        else setProducts([])
    },[])


    const removeProduct=(item)=>{
        
        const cartItems=JSON.parse(localStorage.getItem("cartItems"))
        const newItems=cartItems.filter(el=>(el.product_id!=item.product.product_id))
        localStorage.setItem("cartItems",JSON.stringify(newItems))
        console.log("removeProduct func",item,cartItems,newItems)
        let balance=parseInt(JSON.parse(localStorage.getItem("balance")))-parseInt(item.product.price)
        console.log(balance);
        localStorage.setItem("balance",JSON.stringify(balance))
        setCartBalance(balance)
        setProducts(newItems)
    }

    return (
        <div>
            <h1>Carts</h1>
            <h1>{cartBalance}</h1>
            <h1>{getCartProducts().length}</h1>
            {
                products.map(product=>
                    <Cart key={product.product_id} product={product} removeProduct={removeProduct}></Cart>
                )
            }
        </div>
    );
};

export default Carts;