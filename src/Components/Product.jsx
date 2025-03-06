import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    return (
        <div className='p-[25px] bg-[#FFFFFF]'>
            <img src={product.product_image} alt="" className='w-[282px] h-[181px] m-auto border-[10px]
            border-solid border-[#D9D9D9] rounded-2xl
            '/>
            <h1 className='text-center font-bold'>{product.product_title}</h1>
            <h1 className='text-center font-bold'>Price: $ {product.price}</h1>
            {/* <h1 className='text-center font-bold'>{product.category}</h1>
            
            <h1 className='text-center font-bold'>{product.description}</h1>
            <h1 className='text-center font-bold'>{product.specification}</h1>
            <h1 className='text-center font-bold'>{product.availability}</h1>
            <h1 className='text-center font-bold'>{product.rating}</h1> */}
            <div className='flex justify-center'><Link to={`/product/${product.product_id}`} className='btn btn-outline btn-primary'>View Detail</Link></div>
        </div>
    );
};

export default Product;