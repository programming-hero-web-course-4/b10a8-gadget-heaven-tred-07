import React from 'react';
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div className=''>
           <h1 className='text-center text-[10rem] font-black'>404 page</h1> 
           <div className='flex justify-center'>
           <NavLink to="/" className='btn btn-primary'> Back to home page</NavLink>
           </div>
        </div>
    );
};

export default Error;