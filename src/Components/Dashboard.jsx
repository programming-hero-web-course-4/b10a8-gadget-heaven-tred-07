import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carts from './Carts';
import WishList from './WishList';
const Dashboard = () => {
    const [isActive,setIsActive]=useState(true)

    const handleCartAndWishList=()=>{
        if(isActive){
            setIsActive(false)
        }
        else{
            setIsActive(true)
        }
        console.log("Ok");
    }

    return (
        <div>
            <div className='bg-[#9538E2] pb-[150px] pt-[70px]'>
                <h1 className='text-center text-[2rem] font-bold'>Dashboard</h1>
                <h1 className='w-[70%] text-center text-wrap m-auto text-[1.5rem] font-bold'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h1>
                {
                    isActive?<div className='flex justify-center gap-[10px]'>
                    <button className='btn' onClick={()=>handleCartAndWishList()}>Cart</button> <button className='btn btn-primary' onClick={()=>handleCartAndWishList()}>Wishlist</button>
                </div>:<div className='flex justify-center gap-[10px]'>
                    <button className='btn btn-primary' onClick={()=>handleCartAndWishList()}>Cart</button> <button className='btn' onClick={()=>handleCartAndWishList()}>Wishlist</button>
                </div>
                }
            </div>
            <div>
                {
                    isActive? <Carts></Carts>: <WishList></WishList>
                }
            </div>
        </div>
    );
};

export default Dashboard;