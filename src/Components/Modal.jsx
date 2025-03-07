import React from 'react';
import { ToastContainer} from 'react-toastify';
const Modal = () => {
    return (
        <ToastContainer position="top-center" autoClose={500} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    );
};

export default Modal;