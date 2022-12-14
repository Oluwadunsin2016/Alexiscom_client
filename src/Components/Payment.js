  import axios from 'axios';
import React, { useEffect, useState } from 'react';
  // import logo from './logo.svg';
  // import './App.css';
import { usePaystackPayment } from 'react-paystack';
import { useNavigate } from 'react-router-dom';
  


const Payment = ({orderData,total,address,zipCode,country,city}) => {
const [converted, setConverted] = useState(null)
const navigate=useNavigate()

useEffect(() => {
const changed=JSON.stringify(total * 440)
    setConverted(`${changed}00`);
}, [])


  const config = {
      reference: (new Date()).getTime().toString(),
       email: orderData.customer.email,
      amount: converted,
      publicKey: 'pk_test_bc994b313ae14fef8d8f893742a7a68f283527b9',
  };
  
  
  const onSuccess = (reference) => {
    reference={...reference, products: orderData.products,...orderData.customer,...orderData.shipping,total};
    axios.post(`http://localhost:3700/customer/sendMail`,reference).then(res=>{
    console.log(res);
    })
    console.log(reference);
    localStorage.removeItem('selectedProducts')
    navigate('/')
    window.location.reload()
  };
  
  const onClose = () => {
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button disabled={address=='' || zipCode=='' || country=='' || city==''} className="btn buttonColor text-white" onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Proceed to make payment</button>
        </div>
      );
  };
  
  return (
    <>
      <PaystackHookExample />
    </>
  );
};

export default Payment;
