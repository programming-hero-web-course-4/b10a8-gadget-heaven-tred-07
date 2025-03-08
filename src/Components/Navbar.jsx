import React, { useState } from 'react';
import wishList from '/images/wishList.png'
import cart from '/images/cart.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isHome,setIsHome]=useState(true)
  const [isStatistics,setIsStatistics]=useState(false)
  const [isDashboard,setIsDashboard]=useState(false)
  const [isOrder,setIsOrder]=useState(false)

  const handle1=()=>{
    setIsHome(true)
    setIsStatistics(false)
    setIsDashboard(false)
    setIsOrder(false)
  }
  const handle2=()=>{
    setIsHome(false)
    setIsStatistics(true)
    setIsDashboard(false)
    setIsOrder(false)
  }

  const handle3=()=>{
    setIsHome(false)
    setIsStatistics(false)
    setIsDashboard(true)
    setIsOrder(false)
  }

  const handle4=()=>{
    setIsHome(false)
    setIsStatistics(false)
    setIsDashboard(false)
    setIsOrder(true)
  }
    return (
  <div className="navbar bg-base-100 w-[80%] m-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/" className={`${isHome?"btn btn-primary":"btn"}`}>Home</NavLink></li>
        <li>
          <a href="" className={`${isStatistics?"btn btn-primary":""}`} onClick={handle2}>Statistics</a>
        </li>
        <li><NavLink to="/dasboard" className={`${isDashboard?"btn btn-primary":""}`} onClick={handle3}>Dashboard</NavLink></li>
        <li><NavLink to="/order" className={`${isOrder?"btn btn-primary":""}`} onClick={handle4}>Order History</NavLink></li>
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/" className={`${isHome?"btn btn-primary":""}`} onClick={handle1}>Home</NavLink></li>
      <li>
      <a href="" className={`${isStatistics?"btn btn-primary":""}`} onClick={handle2}>Statistics</a>
      </li>
      <li><NavLink to="/dasboard" className={`${isDashboard?"btn btn-primary":""}`} onClick={handle3}>Dashboard</NavLink></li>
      <li><NavLink to="/order" className={`${isOrder?"btn btn-primary":""}`} onClick={handle4}>Order History</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-[5px]">
  <a className="btn rounded-[45%] py-[25px]"><img src={cart} alt="" className='h-[25px] w-[17px]'/></a>
    <a className="btn rounded-[45%] py-[25px]"><img src={wishList} alt="" className='h-[25px] w-[17px]'/></a>
  </div>
</div>
    );
};

export default Navbar;