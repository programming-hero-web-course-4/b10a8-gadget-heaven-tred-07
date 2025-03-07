import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {saveCart,saveWish} from './dataSync.js'
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal.jsx';
const ProductDetails = () => {
    const data=useLoaderData()
    const {product_id}=useParams()
    const product=data.find(el=>(el.product_id==parseInt(product_id)))
    console.log(product_id,product);

    const handleCart=(item)=>{
        if(saveCart(item))notify("Successfully add to cart")
        else notify("Already Exist In Cart")
    }

    const handleWish=(item)=>{
        if(saveWish(item))notify("Successfully add to wish list")
        else notify("Already Exist In Wish List")
    }

    const notify = (str) => toast(`${str}`);

    return (
        <div className='w-[100%]'>
            <Modal></Modal>
        <div className='bg-[#9538E2] pb-[150px] pt-[70px]'>
                <h1 className='text-center text-[2rem] font-bold'>Product Details</h1>
                <h1 className='w-[70%] text-center text-wrap m-auto text-[1.5rem] font-bold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h1>
            </div>
        <div className='w-[100%] flex justify-center mt-[-100px] '>
            <div className='border-[2px] border-solid border-black w-[70%] rounded-2xl p-[25px] bg-[#FFFFFF] flex'>
            <div className='w-[40%]'><img src={product.product_image} alt="" className='w-[282px] h-[181px] m-auto border-[10px]
            border-solid border-[#D9D9D9] rounded-2xl
            '/></div>
            <div className='w-[60%]'>
            <h1 className='text-left font-bold py-[2.5px]'>{product.product_title}</h1>
            <h1 className='text-left font-bold py-[2.5px]'>Price: $ {product.price}</h1>
            {product.availability?<button className='btn btn-outline btn-success py-[2.5px]'>In Stock</button>
            :<button className='btn btn-error py-[2.5px]'>Out of Stock</button>}
            {/* <h1 className='text-left font-bold'>{product.category}</h1> */}
            <h1 className='text-left py-[2.5px]'>{product.description}</h1>
            <h1 className='text-left py-[2.5px]'> <span className='font-bold'>Specification:</span> <br /> {product.specification}</h1>
            <h1 className='text-left py-[2.5px]'> Rating: {product.rating}</h1>
            <div className='flex justify-items-start py-[2.5px]'>
            <button className='btn btn-primary rounded-[10px] flex gap-[10px]' onClick={()=>handleCart({product})}>
                <h1>Add To Cart</h1>
                <img src="/images/cartWhite.png" alt="" className='w-[20px] h-[20px]'/> 
            </button>
            <button onClick={()=>handleWish({product})} className='btn btn-outline rounded-[55%] p-[10px] ml-[10px]'><img src="/images/wishList.png" alt="" className='w-[20px] h-[20px]'/></button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ProductDetails;