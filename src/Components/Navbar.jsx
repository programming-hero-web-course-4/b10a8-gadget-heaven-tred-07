import React from 'react';
import wishList from '/images/wishList.png'
import cart from '/images/cart.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
  <div className="navbar bg-base-100 shadow-sm w-[90%] m-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        <li>
          <a href="">Statistics</a>
        </li>
        <li><NavLink to="/dasboard">Dashboard</NavLink></li>
        <li><NavLink to="/order">Your Orders</NavLink></li>
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li>
      <a href="">Statistics</a>
      </li>
      <li><NavLink to="/dasboard">Dashboard</NavLink></li>
      <li><NavLink to="/order">Your Orders</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-[5px]">
  <a className="btn rounded-[45%]"><img src={cart} alt="" className='h-[25px] w-[17px]'/></a>
    <a className="btn rounded-[45%]"><img src={wishList} alt="" className='h-[25px] w-[17px]'/></a>
  </div>
</div>
    );
};

export default Navbar;