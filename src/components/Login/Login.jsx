import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = ({handleLogin}) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    else{
        handleLogin(email,password)
    }
    setEmail("")
    setPassword("")
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="border-2 border-black w-full max-w-md text-center rounded-xl p-5 bg-white shadow-lg">
        <h1 className="font-bold text-2xl">Login</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="font-medium">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email-id here"
              value={email}
              onChange={(e)=>{e.preventDefault(); setEmail(e.target.value)}}
              className="w-full h-12 border-2 border-black rounded-full outline-none px-4"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="email" className="font-medium">Password:</label>
            <input
              type="Password"
              name="Password"
              id="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>{e.preventDefault(); setPassword(e.target.value)}}
              className="w-full h-12 border-2 border-black rounded-full outline-none px-4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-md hover:bg-blue-700 active:scale-95 transition"
          >
            Login
          </button>
        </form>

        <h2 className="text-lg mt-4 mb-2">Don't have an account?</h2>
        <Link to={"/register"} className="w-full bg-green-600 mt-3 rounded-md py-2 px-2 font-semibold text-lg text-white border-2 border-black hover:bg-green-700 active:scale-95 transition">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Login;
