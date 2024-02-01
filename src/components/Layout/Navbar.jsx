import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='w-full h-[10vh] bg-black   text-white  flex flex-wrap justify-between items-center'>
            <h1 className='mx-14 text-5xl font-light capitalize font-serif '>wow  fashion</h1>
            <div className='flex gap-5 mx-10 text-3xl'>
                <Link to={"/"}>
                    <FaHome />
                </Link>
                <Link to={"/contact"}>
                    <IoMdContact />
                </Link>

                <Link to={"/cart"}>
                    <FaShoppingCart />
                </Link>
            </div>


        </div>
    )
}

export default Navbar