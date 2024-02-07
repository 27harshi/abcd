import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
    const cartItems = useSelector((store) => store.ttb.items);
    return (
        <div className=' sm:fixed w-full h-[10vh] bg-black/40 text-white flex flex-wrap justify-between items-center  top-0 
                          '>
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
                <p className="text-sm text-white font-bold">{cartItems.length}</p>
            </div>


        </div>
    )
}

export default Navbar