import React from 'react';

const Cart = ({product}) => {
    return (
        <div className='flex items-center gap-[10px] w-[80%] m-auto'>
            <div className='w-[25%]'><img className='w-[150px] h-[100px]' src={product.product_image} alt="" /></div>
            <div className='w-[70%]'>
            <h1>{product.product_title}</h1>
            <h1>{product.description}</h1>
            <h1>Price: $ {product.price}</h1>
            </div>
            <div className='w-[5%] items-center'>
                <button><img className='w-[25px] h-[25px]' src="../images/remove.png" alt="" /></button>
            </div>
        </div>
    );
};

export default Cart;