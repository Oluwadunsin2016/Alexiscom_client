import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loginDetail, setloginDetail] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setloginDetail({ ...loginDetail, [name]: value });
  };

  const navigate=useNavigate()

  const URL = "http://localhost:3700/customer/login";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetail);
    axios.post(URL, loginDetail).then((res) => {
      console.log(res);
      localStorage.myToken = res.data.token;
      setMessage(res.data.message);
      navigate('/')
    });
    
  };

  return (
    <main className="form-signin col-md-6 px-5 m-auto min-vh-100">
      <form onSubmit={handleSubmit} className="bg-light shadow my-5 p-5">
        <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
        <small className="my-2 text-success text-center">{message}</small>

        <div className="form-floating my-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            name="email"
            value={loginDetail.email}
            onChange={handleChange}
            placeholder="email"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            value={loginDetail.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
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
            Sign in
          </button>
          <p className="mt-3">
            Don't have an account?
            <Link to="/signup"> Sign Up Here</Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignIn;
