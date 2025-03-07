import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {saveCart} from './dataSync.js'
const ProductDetails = () => {
    const data=useLoaderData()
    const {product_id}=useParams()
    const product=data.find(el=>(el.product_id==parseInt(product_id)))
    console.log(product_id,product);

    const handleCart=(item)=>{
        saveCart(item)
    }

    return (
        <div className='w-[100%]'>
        <div className='bg-[#9538E2] pb-[150px] pt-[70px]'>
                <h1 className='text-center text-[2rem] font-bold'>Product Details</h1>
                <h1 className='w-[70%] text-center text-wrap m-auto text-[1.5rem] font-bold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h1>
            </div>
        <div className='w-[100%] flex justify-center mt-[-100px] '>
            <div className='border-[2px] border-solid border-black w-[70%] rounded-2xl p-[25px] bg-[#FFFFFF] flex'>
            <div className='w-[40%]'><img src={product.product_image} alt="" className='w-[282px] h-[181px] m-auto border-[10px]
            border-solid border-[#D9D9D9] rounded-2xl
            '/></div>
            <div className='w-[60%]'><h1 className='text-center font-bold'>{product.product_title}</h1>
            <h1 className='text-center font-bold'>Price: $ {product.price}</h1>
            <h1 className='text-center font-bold'>{product.category}</h1>
            <h1 className='text-center font-bold'>{product.description}</h1>
            <h1 className='text-center font-bold'>{product.specification}</h1>
            <h1 className='text-center font-bold'>{product.availability}</h1>
            <h1 className='text-center font-bold'>{product.rating}</h1>
            <div className='flex justify-center'><button className='btn btn-outline btn-primary' onClick={()=>handleCart({product})}>Add To Cart</button></div></div>
        </div>
        </div>
        </div>
    );
};

export default ProductDetails;