import React from 'react';
import { ToastContainer} from 'react-toastify';
const PaymentModal = () => {
    return (
        <div>
            <ToastContainer position="top-center" autoClose={false} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    
        </div>
    );
};

export default PaymentModal;