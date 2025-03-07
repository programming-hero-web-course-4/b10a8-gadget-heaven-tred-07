import React, { useEffect, useState } from 'react';
import { getCartAmount } from './dataSync.js'
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal.jsx';
import Cart from './Cart.jsx';
import PaymentModal from './PaymentModal.jsx';
import { useNavigate } from 'react-router-dom';
const Carts = () => {
    const [cartBalance, setCartBalance] = useState(0)

    useEffect(() => {
        setCartBalance(getCartAmount())
    }, [])

    const [products, setProducts] = useState([])

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems")
        if (cartItems) {
            setProducts(JSON.parse(cartItems))
        }
        else setProducts([])
    }, [])


    const removeProduct = (item) => {

        const cartItems = JSON.parse(localStorage.getItem("cartItems"))
        const newItems = cartItems.filter(el => (el.product_id != item.product.product_id))
        localStorage.setItem("cartItems", JSON.stringify(newItems))
        console.log("removeProduct func", item, cartItems, newItems)
        let balance = parseInt(JSON.parse(localStorage.getItem("balance"))) - parseInt(item.product.price)
        console.log(balance);
        localStorage.setItem("balance", JSON.stringify(balance))
        setCartBalance(balance)
        setProducts(newItems)
        notify("Remove Successfully")
    }

    const notify = (str) => toast(`${str}`);

    const payment=()=>{
        console.log("payment done");
        document.getElementById('my_modal_1').showModal()
        const items=JSON.parse(localStorage.getItem("cartItems"))
        let pitems=[]
        if(localStorage.getItem("orderItems")){
            pitems=JSON.parse(localStorage.getItem("orderItems"))
        }
        const newItems=[... pitems,items]
        localStorage.setItem("orderItems",JSON.stringify(newItems))
        localStorage.setItem("cartItems",JSON.stringify([]))
        localStorage.setItem("balance",JSON.stringify(0))
        setProducts([])
    }

    const navigate=useNavigate()

    const clearPayment=()=>{
        setCartBalance(0)
        navigate('/')
    }

    return (
        <div>
            <Modal></Modal>
            <div className='flex justify-evenly items-center w-[80%] m-auto py-[50px]'>
                <div className='w-[60%]'>
                    <h1 className='text-2xl font-bold'>Cart</h1>
                </div>
                <div className='flex justify-evenly gap-[5px] items-center w-[40%]'>
                    <h1 className='text-[1.25rem] font-bold'>Total Cost: {cartBalance}</h1>
                    <button className='btn'>Sort By Price</button>
                    {cartBalance>0?<button className='btn btn-primary' onClick={payment}>Purchase</button>:
                    <button className='btn btn-primary btn-disabled' onClick={payment}>Purchase</button>}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <img src="/images/Group.png" alt="" className='m-auto'/>
                            <h3 className="font-bold text-lg text-center">Payment Successful</h3>
                            <p className="py-4 text-center">Thanks for purchasing</p>
                            <p className='text-center'>Total: {cartBalance}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" onClick={clearPayment}>Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            {
                products.map(product =>
                    <Cart key={product.product_id} product={product} removeProduct={removeProduct}></Cart>
                )
            }
        </div>
    );
};

export default Carts;