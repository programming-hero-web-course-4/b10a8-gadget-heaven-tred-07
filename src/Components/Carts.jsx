import React, { useEffect, useState } from 'react';
import {getCartAmount,getCartProducts} from './dataSync.js'
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal.jsx';
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
        notify("Remove Successfully")
    }

    const notify = (str) => toast(`${str}`);

    return (
        <div>
            <Modal></Modal>
            <div className='flex justify-evenly items-center w-[80%] m-auto py-[50px]'>
            <div className='w-[60%]'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            </div>
            <div className='flex justify-evenly gap-[5px] items-center w-[40%]'>
            <h1 className='text-[1.25rem] font-bold'>Total Cost: {cartBalance}</h1>
            <button className='btn'>Sort By Price</button>
            <button className='btn btn-primary'>Purchase</button>
            </div>
            </div>
            {
                products.map(product=>
                    <Cart key={product.product_id} product={product} removeProduct={removeProduct}></Cart>
                )
            }
        </div>
    );
};

export default Carts;