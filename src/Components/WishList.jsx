import React, { useEffect, useState } from 'react';
import Modal from './Modal';
const WishList = () => {
    const [products,setProducts]=useState([])
    return (
        <div>
            <Modal></Modal>
            <div className='flex justify-evenly items-center w-[80%] m-auto py-[50px]'>
            <div className='w-[60%]'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            </div>
            <div className='flex justify-evenly gap-[5px] items-center w-[40%]'>
            {/* <h1 className='text-[1.25rem] font-bold'>Total Cost: {cartBalance}</h1> */}
            {/* <button className='btn'>Sort By Price</button> */}
            {/* <button className='btn btn-primary'>Purchase</button> */}
            </div>
            </div>
            {/* {
                products.map(product=>
                    <Cart key={product.product_id} product={product} removeProduct={removeProduct}></Cart>
                )
            } */}
        </div>
    );
};

export default WishList;