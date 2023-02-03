import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
const [message, setMessage] = useState('')
const [customerDetails, setcustomerDetails] = useState({
firstname:'',
lastname:'',
email:'',
password:'',
})

const navigate=useNavigate()

const handleInput=(e)=>{
const name=e.target.name
const value=e.target.value
setcustomerDetails({...customerDetails,[name]:value})
}
const handleSubmit=(e)=>{
e.preventDefault()
axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT_LOCAL}register`,customerDetails).then(res=>{
console.log(res);
setMessage(res.data.message)
navigate('/signin')
})
}

  return (
      <main className="form-signin w-100 p-4 ">
      <form className='col-md-6 mx-auto bg-light shadow my-5 p-5' onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal text-center">Please sign up</h1>
         <small className="my-2 text-success text-center">{message}</small>

         <div className="form-floating my-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name='firstname'
            placeholder="First Name"
            value={customerDetails.firstname}
            onChange={handleInput}
          />
          <label htmlFor="floatingInput" className='text-muted'>First Name</label>
        </div>

         <div className="form-floating my-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name='lastname'
            placeholder="Last Name"
            value={customerDetails.lastname}
            onChange={handleInput}
          />
          <label htmlFor="floatingInput" className='text-muted'>Last Name</label>
        </div>

        <div className="form-floating my-4">
          <input
            type="email"
            className="form-control"
            name='email'
            id="floatingInput"
            placeholder="email"
            value={customerDetails.email}
            onChange={handleInput}
          />
          <label htmlFor="floatingInput" className='text-muted'>Email address</label>
        </div>
        <div className="form-floating my-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name='password'
            placeholder="Password"
            value={customerDetails.password}
            onChange={handleInput}
          />
          <label htmlFor="floatingPassword" className='text-muted'>Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
       <div className="text-center">
          <button
            className=" btn buttonColor text-white fw-bold px-3 py-2"
            type="submit"
          >
            Sign up
          </button>
          <p className="mt-3">
            Already have an account?
            <Link to="/signin"> Sign In Here</Link>
          </p>
        </div>
      </form>
    </main>
  )
}

export default SignUp