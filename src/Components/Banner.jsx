import React from 'react';
import bannerImage from '/images/banner.jpg'
const Banner = () => {
    return (
        <div>
        <div className='bg-[#9538E2] pt-[150px] pb-[250px]'>
            <h1 className='text-center text-[56px] text-white font-bold w-[80%] m-auto text-wrap'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <h1 className='text-center text-[26px] text-white w-[80%] m-auto text-wrap'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</h1>
            <div className='flex justify-center mt-[65px]'><button className='btn bg-white'>Shop Now</button></div>
        </div>
        <div className='flex justify-center mt-[-170px] mb-[25px] '>
            <div style={{background:"rgba(255, 255, 255, 0.3)"}} className='w-[50%] border-[3px] border-solid rounded-2xl border-white p-[15px]'>
            <img src={bannerImage} alt="" className='w-[100%] rounded-2xl '/>
            </div>
       </div>
       </div>
    );
};

export default Banner;