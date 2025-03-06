import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const products=useLoaderData()
    const product_id=useParams()
    const product=products.find(el=>(el.product_id===parseInt(product_id)))
    console.log(product_id)
    return (
        <div>
            {/* <div className='border-[2px] border-solid border-black w-[30%] p-[25px] bg-[#FFFFFF]'>
            <img src={product.product_image} alt="" className='w-[282px] h-[181px] m-auto border-[10px]
            border-solid border-[#D9D9D9] rounded-2xl
            '/>
            <h1 className='text-center font-bold'>{product.product_title}</h1>
            <h1 className='text-center font-bold'>Price: $ {product.price}</h1>
            <h1 className='text-center font-bold'>{product.category}</h1>
            <h1 className='text-center font-bold'>{product.description}</h1>
            <h1 className='text-center font-bold'>{product.specification}</h1>
            <h1 className='text-center font-bold'>{product.availability}</h1>
            <h1 className='text-center font-bold'>{product.rating}</h1>
            <div className='flex justify-center'><button className='btn btn-outline btn-primary'>View Detail</button></div> */}
        {/* </div> */}
        </div>
    );
};

export default ProductDetails;