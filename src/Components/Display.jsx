import React, { useState,useEffect } from 'react';
import Products from './Products';
const Display = () => {
    const [products,setProducts]=useState([])
    const [allProducts,setAllProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{setProducts(data);setAllProducts(data)})
    },[])
    const [isAll,setIsAll]=useState(true)
    const [isSmartphones,setIsSmartphones]=useState(false)
    const [isLaptops,setIsLaptops]=useState(false)
    const [isEarbuds,setIsEarbuds]=useState(false)

    

    const handleFilter=(param)=>{
        if(param==="a"){
            setProducts(allProducts)
            setIsAll(true)
            setIsSmartphones(false)
            setIsLaptops(false)
            setIsEarbuds(false)
        }
        else if(param==="s"){
            const fiterProducts=allProducts.filter(el=>(el.category==="Smartphones"))
            setProducts(fiterProducts)
            setIsAll(false)
            setIsSmartphones(true)
            setIsLaptops(false)
            setIsEarbuds(false)
        }
        else if(param==="l"){
            const fiterProducts=allProducts.filter(el=>(el.category==="Laptops"))
            setProducts(fiterProducts)
            setIsAll(false)
            setIsSmartphones(false)
            setIsLaptops(true)
            setIsEarbuds(false)
        }
        else if(param==="e"){
            const fiterProducts=allProducts.filter(el=>(el.category==="Earbuds"))
            setProducts(fiterProducts)
            setIsAll(false)
            setIsSmartphones(false)
            setIsLaptops(false)
            setIsEarbuds(true)
        }
        console.log(param);
    }



    return (
        <div>
            <div>
            <h1 className='text-center text-[2rem] font-bold py-[40px]'>Explore Cutting-Edge Gadgets</h1>
            <div className='w-[90%] mx-auto grid grid-cols-6 gap-[5px]'>
                <div className='col-span-1 flex flex-col'>
                    <button onClick={()=>handleFilter("a")} className={`btn   w-[70%] my-[5px] rounded-2xl ${isAll?"btn-primary":"btn-outline"}`}>All</button>
                    <button onClick={()=>handleFilter("s")} className={`btn   w-[70%] my-[5px] rounded-2xl ${isSmartphones?"btn-primary":"btn-outline"}`}>Smartphones</button>
                    <button onClick={()=>handleFilter("l")} className={`btn  w-[70%] my-[5px] rounded-2xl ${isLaptops?"btn-primary":"btn-outline"}`}>Laptops</button>
                    <button onClick={()=>handleFilter("e")} className={`btn  w-[70%] my-[5px] rounded-2xl ${isEarbuds?"btn-primary":"btn-outline"}`}>Earbuds</button>
                </div>
                <div className='col-span-5 border-2 border-solid border-black'>
                <Products products={products}></Products>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Display;