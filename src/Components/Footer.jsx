import React from 'react';

const Footer = () => {
    return (
 <footer className="footer sm:footer-horizontal bg-base-200 text-neutral-content flex justify-between w-[80%] m-auto">
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
</footer>
    );
};

export default Footer;