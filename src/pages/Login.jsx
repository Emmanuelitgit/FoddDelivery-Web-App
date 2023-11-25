import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/auth';
import { useDispatch } from 'react-redux';
import { notification } from '../store/notification';
import { CircularProgress } from '@mui/material';



const Login = () => {

  const message = "Login Success"
  const open = true

  const [showProgress, setProgress] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const[user, setUser] = useState({
    username: "",
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
    e.preventDefault();
    try{
      setProgress((prev)=>!prev)
      const response = await axios.post("http://localhost:5000/login", user);
      const {username, id} = response.data
      dispatch(login({username:username, id:id}))
      dispatch(notification.showNotification(open,message))
      navigate("/")
    }catch(err){
      setProgress(false)
      setErr(err.response.data)
    }
  }

  
  return (
    <div className='flex justify-center items-center flex-col mt-32'>
       <h1>Welcome to ManuelEats App</h1>
        <input className='mt-5 py-2 px-8 border-2  
        focus:outline-none' type="text"
        name='username'
        onChange={handleChange}
        placeholder='username' />
        <input className='mt-5 py-2 px-8 border-2  
        focus:outline-none' type="text" 
        name='password'
       onChange={handleChange}
       placeholder='password' />
        <button onClick={handleClick} className='bg-green-600 text-white border-green-600 rounded-md mt-5 px-[105px] py-2'>
          Login
        </button>
        {err && <p className='text-red-600 mt-2'>{err}</p>}
        <p className='mt-2'>Dont have an account? <Link to="/register">Register</Link></p>
        
    </div>
  )
}

export default Login