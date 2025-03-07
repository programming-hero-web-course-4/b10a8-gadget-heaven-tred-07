import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
const WishList = () => {
    const [products,setProducts]=useState([])

        useEffect(()=>{
            const items=localStorage.getItem("wishItems")
            if(items){
                setProducts(JSON.parse(items))
            }
            else{
                setProducts([])
            }
            console.log(products);
        },[])


        const removeProduct=(item)=>{
        
            const cartItems=JSON.parse(localStorage.getItem("wishItems"))
            const newItems=cartItems.filter(el=>(el.product_id!=item.product.product_id))
            localStorage.setItem("wishItems",JSON.stringify(newItems))
            setProducts(newItems)
            notify("Remove Successfully From Wishlist")
        }

        const notify = (str) => toast(`${str}`);

    return (
        <div>
            <Modal></Modal>
            <div className='flex justify-evenly items-center w-[80%] m-auto py-[50px]'>
            <div className='w-[60%]'>
            <h1 className='text-2xl font-bold'>WishList</h1>
            </div>
            <div className='flex justify-evenly gap-[5px] items-center w-[40%]'>
            {/* <h1 className='text-[1.25rem] font-bold'>Total Cost: {cartBalance}</h1> */}
            {/* <button className='btn'>Sort By Price</button> */}
            {/* <button className='btn btn-primary'>Purchase</button> */}
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

export default WishList;