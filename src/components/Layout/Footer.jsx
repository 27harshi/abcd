import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div  className='w-full h-28 bg-slate-300 flex justify-center items-center gap-10 text-2xl   '>
      <h1 className=' hover:text-blue-700 cursor-pointer'>Privacy Policy |  </h1>
      <h1 className='flex justify-center items-center  hover:text-blue-700 cursor-pointer'><FaRegCopyright/>2023 copyright </h1>
      <div className='flex gap-5 justify-center items-center '>
       <div className=' hover:text-blue-700 cursor-pointer flex items-center gap-5'>|<FaFacebook/></div> 
        <div className=' hover:text-blue-700 cursor-pointer'><FaInstagram/></div>
        <div className=' hover:text-blue-700 cursor-pointer '> <FaXTwitter/></div>
</div>
    </div>
  )
}

export default Footer