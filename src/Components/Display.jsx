import React from 'react';
import Products from './Products';
const Display = () => {
    return (

        



        <div>
            <div>
            <h1 className='text-center text-[2rem] font-bold py-[40px]'>Explore Cutting-Edge Gadgets</h1>
            <div className='w-[90%] mx-auto grid grid-cols-6 gap-[5px]'>
                <div className='col-span-1 flex flex-col'>
                    <button className='btn btn-outline btn-primary w-[70%] my-[5px] rounded-2xl'>All</button>
                    <button className='btn btn-outline btn-primary w-[70%] my-[5px] rounded-2xl'>Smartphones</button>
                    <button className='btn btn-outline btn-primary w-[70%] my-[5px] rounded-2xl'>Laptops</button>
                    <button className='btn btn-outline btn-primary w-[70%] my-[5px] rounded-2xl'>Earbuds</button>
                </div>
                <div className='col-span-5 border-2 border-solid border-black'>
                <Products></Products>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Display;