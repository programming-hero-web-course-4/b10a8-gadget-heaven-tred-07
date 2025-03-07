import React, { useEffect, useState } from 'react';
import { getOrders } from './dataSync';
const Order=({product})=>{
    return(
        <div className='flex items-center gap-[10px] w-[80%] m-auto py-[10px]'>
            <div className='w-[25%]'><img className='w-[150px] h-[100px]' src={product.product_image} alt="" /></div>
            <div className='w-[70%]'>
            <h1 className='font-bold text-[1.25rem]'>{product.product_title}</h1>
            <h1>{product.description}</h1>
            <h1 className='font-bold text-[1rem]'>Price: $ {product.price}</h1>
            </div>
            {/* <div className='w-[5%] items-center'>
                <button onClick={()=>removeProduct({product})}><img className='w-[25px] h-[25px]' src="../images/remove.png" alt="" /></button>
            </div> */}
        </div>
    )
}
const Orders = () => {
    const [products,setProducts]=useState([])   
    
    useEffect(()=>{
        setProducts(getOrders())
    },[])
    console.log(products);
    return (
        <div>
            <div className='bg-[#9538E2] pb-[150px] pt-[70px]'>
                <h1 className='text-center text-[2rem] font-bold'>Your Orders</h1>
                <h1 className='w-[70%] text-center text-wrap m-auto text-[1.5rem] font-bold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h1>
                <h1 className='w-[70%] text-center text-wrap m-auto text-[1.5rem] font-bold'>Total Orders: {products.length}</h1>
            </div>
            <div className='flex flex-wrap justify-evenly items-center w-[80%] m-auto py-[50px]'>
            {
                
                    products.map(product=>
                        <Order product={product}></Order>
                    )
                
            }
            </div>
        </div>
    );
};

export default Orders;