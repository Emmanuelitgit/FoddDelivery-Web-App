import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate()

  const[user, setUser] = useState({ 
    username: "", 
    email: "", 
    password: ""
 })

 const[err, setErr] = useState()
  
  const handleChange = (e) =>{
    const{name, value} = e.target
    setUser((prevUser)=>{
      return{
        ...prevUser, [name]:value
      }
    })
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
     await axios.post("http://localhost:5000/register", user)
     navigate("/login")
    }catch(err){
     setErr(err.response.data)
    }
}

  console.log(user)

  return (
    <div className='flex justify-center items-center flex-col mt-32 w-full'>
        <h1>Welcome to ManuelEats App</h1>
        <input className='mt-5 py-2 px-8 border-2  
        focus:outline-none' type="text"
        name='username'
        onChange={handleChange}
        placeholder='username' />
        <input className='mt-5 py-2 px-8 border-2  
        focus:outline-none' type="email" 
        name='email'
        onChange={handleChange}
        placeholder='email' />
        <input className='mt-5 py-2 px-8 border-2  
        focus:outline-none' type="password" 
        name='password'
        onChange={handleChange}
        placeholder='password' />
        {err && <p className="text-red-600">{err}</p>}
        <button onClick={handleClick} className='bg-green-600 text-white border-green-600 rounded-md mt-5 px-24 py-2'>Register</button>
        <p className='mt-2'>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register