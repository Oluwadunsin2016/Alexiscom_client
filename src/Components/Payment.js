  import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useNavigate } from 'react-router-dom';
  


const Payment = ({orderData,total,address,zipCode,country,city,user}) => {
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
    axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT_LOCAL}sendMail`,reference).then(res=>{
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
            <button disabled={address=='' || zipCode=='' || country=='' || city==''|| user.firstname=='' || user.lastname=='' || user.email==''} className="btn buttonColor text-white" onClick={() => {
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
