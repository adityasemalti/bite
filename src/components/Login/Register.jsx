import React, { useState } from 'react';

const Register = ({ handleRegister }) => {
  const [fname,setFname]=useState("")
  const [lname,setLname]=useState("")
  const [email,setemail]=useState("")
  const [pass,setPass]=useState("")
  const [ConfirmPass,setConfirmPass]=useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fname || !lname || !email || !pass || !ConfirmPass) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    handleRegister(formData);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="border-2 border-black w-full max-w-md text-center rounded-xl p-5 bg-white shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl">
        <h1 className="font-bold text-2xl">Register</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="flex flex-col items-start">
            <label htmlFor="firstName" className="font-medium">First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={fname}
              onChange={(e)=>{e.preventDefault();setFname(e.target.value)}}
              className="w-full h-12 border-2 border-black rounded-full outline-none px-4 transition-all duration-300 focus:border-blue-500 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="lastName" className="font-medium">Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={lname}
              onChange={(e)=>{e.preventDefault();setLname(e.target.value)}}
              className="w-full h-12 border-2 border-black rounded-full outline-none px-4 transition-all duration-300 focus:border-blue-500 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="email" className="font-medium">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter e-mail ID"
              value={email}
              onChange={(e)=>{e.preventDefault();setemail(e.target.value)}}
              className="w-full h-12 border-2 border-black rounded-full outline-none px-4 transition-all duration-300 focus:border-blue-500 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="password" className="font-medium">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={pass}
              onChange={(e)=>{e.preventDefault();setPass(e.target.value)}}
              className="w-full h-12 border-2 border-black rounded-full outline-none px-4 transition-all duration-300 focus:border-blue-500 focus:shadow-md"
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="confirmPassword" className="font-medium">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={ConfirmPass}
              onChange={(e)=>{e.preventDefault();setConfirmPass(e.target.value)}}
              className="w-full h-12 border-2 border-black rounded-full outline-none px-4 transition-all duration-300 focus:border-blue-500 focus:shadow-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white text-lg font-semibold py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-green-700 active:scale-95"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
