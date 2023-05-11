import React from 'react'
import { BiUser, BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div className=' bg-initialColor py-4'>
        <div className="container mx-auto flex justify-between">
            <Link to="/" className="navbar">
                <h2 className='text-gray-50 font-semibold text-2xl'>E-commerce</h2>
            </Link> 
            <div className="searchBar flex items-center">
                <input type="text" className=' pl-4 w-[450px] py-2 pr-12 text-lg outline-none text-gray-700 font-medium rounded-xl' placeholder='Search Products Or Catagories' />
                <a href="#" className=' w-[40px] '> <AiOutlineSearch id='SearchBtn' size={25} className=' w-full -ml-12 text-gray-500 h-[40px] rounded-[5px] duration-100' /> </a>
            </div>

            <div className="navlinks flex space-x-6 items-center">
                <div className="SignUp mr-10"> 
                    <a href="#" className='flex space-x-2 items-center text-white hover:text-gray-300 duration-300'> <BiUser size={40} /> <p className=' leading-5 font-semibold '> Sign In OR  <br /> Join for Free</p> </a>
                </div>
                <div className="notise">
                    <a href="#" className='flex flex-col -space-y-1 items-center text-white hover:text-gray-300 duration-300'> <BiMessageAltDetail size={25} /> <p> mgs </p> </a>
                </div>
                <div className="cart">
                    <Link to={"cart"} className=' text-white hover:text-gray-300 duration-300'> <AiOutlineShoppingCart size={35} /> </Link>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Navbar