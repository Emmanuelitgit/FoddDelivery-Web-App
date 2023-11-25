import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  
} from "react-icons/ai";
import { BsFillCartFill, BsPerson,} from "react-icons/bs";
import {TbTruckReturn} from 'react-icons/tb'
import { FaGoogleWallet} from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../store/auth";
import { useDispatch } from "react-redux";
import axios from "axios";
import Notification from "./Notification";
import { ShoppingCartOutlined } from "@mui/icons-material";





const TopNav = () => {

  const dispatch = useDispatch()
  const username= useSelector((state)=>state.auth.currentUser);
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  
  const [sideNav, setSideNav] = useState(false);

  const handleClick = async()=>{
    try{
      await axios.post("http://localhost:5000/logout")
      dispatch(logout())
    }catch(err){
      console.log(err)
    }
  }

  const handleAlert = () =>{
    alert("You dont have an account yet.Please Login or create one")
  }
 
  return (
    <div className="max-w-[1520px] mx-auto flex justify-evenly items-center p-4 shadow">
      <div className="flex items-center">
        {/* <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div> */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Manuel
          <span className="font-bold">Eats</span>
        </h1>
      </div>
      <div className="flex bg-gray-200 rounded-lg ">
      <AiOutlineSearch size={25} className="text-green-600 mt-2"/>
        <input
          className="bg-transparent p-2 border-none focus:outline-none w-72"
          type="text"
          placeholder="search meals"
        />
      </div>
      <Notification/>

      <nav className="flex  items-center">
        <Link className="m-2 text-green-600 font-semibold cursor-pointer">Home</Link>
        <Link className="m-2 text-green-600 font-semibold cursor-pointer">Our Meal</Link>
        {!username && 
        <Link to="/register" className="m-2 text-green-600 font-semibold cursor-pointer">Register</Link>}
        {!username && 
        <Link to="/login" className="m-2 text-green-600 font-semibold cursor-pointer">Login</Link>}
        {username && 
        <Link className="m-2 text-green-600 font-semibold cursor-pointer" onClick={handleClick} >Logout</Link> }
         {username && <span>{username}</span>}
        {username &&  <Link className="link m-2" to="/cart"><ShoppingCartOutlined/></Link>}
        {!username &&  <Link className="link m-2" onClick={handleAlert}><ShoppingCartOutlined/></Link>}
      </nav>

      {sideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
        onClick={() => setSideNav(!sideNav)} 
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25}
        className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>Manuel <span className='text-green-700 font-bold'>Eats</span></h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-900">
               <li className="text-xl py-4 flex">
                <BsPerson size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Account
               </li>
               <li className="text-xl py-4 flex">
                <TbTruckReturn size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                Delivery
               </li>
               <li className="text-xl py-4 flex">
                <MdOutlineFavorite size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Favourite
               </li>
               <li className="text-xl py-4 flex">
                <FaGoogleWallet size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                My Wallet
               </li>
               <li className="text-xl py-4 flex">
                <MdHelp size={25}
                className='mr-4 text-white bg-black rounded-full'
                />
                Help
               </li>
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default TopNav;
