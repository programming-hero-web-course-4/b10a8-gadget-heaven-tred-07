import React from 'react';

const Footer = () => {
    return (
 <footer>
  <h1 className='text-[2.5rem] text-center font-bold pt-[100px]'>Gadget Heaven</h1>
  <p className='text-[1.5rem] text-center font-medium'>Leading the way in cutting-edge technology and innovations.</p>
  <div className='flex py-[100px] justify-between footer sm:footer-horizontal bg-base-200 text-neutral-content w-[80%] m-auto'>
  <nav>
    <h6 className="footer-title text-black text-center">Services</h6>
    <a className="link link-hover text-black">Branding</a>
    <a className="link link-hover text-black">Design</a>
    <a className="link link-hover text-black">Marketing</a>
    <a className="link link-hover text-black">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Company</h6>
    <a className="link link-hover text-black">About us</a>
    <a className="link link-hover text-black">Contact</a>
    <a className="link link-hover text-black">Jobs</a>
    <a className="link link-hover text-black">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Legal</h6>
    <a className="link link-hover text-black">Terms of use</a>
    <a className="link link-hover text-black">Privacy policy</a>
    <a className="link link-hover text-black">Cookie policy</a>
  </nav>
  </div>
  
</footer>
    );
};

export default Footer;