import React, { useEffect, useState } from 'react';
import Product from './Product';
const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log(products);
    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                products.map(product=>
                    <Product key={product.product_id} product={product}></Product>
                )
            }
        </div>
    );
};

export default Products;