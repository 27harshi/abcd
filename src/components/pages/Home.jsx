import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import Layout from '../Layout/Layout'

function Home() {
  return (
    <Layout>

    <div >
        <img  src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80" alt="" />
        <div className='px-[700px] ' > 
        <p className='absolute top-10  m-60  text-7xl italic font-semibold w-80 h-28  capitalize '>
            fashion reflects who you are...<br/>
            <Link to={'/Product'}>
            
            <button className= ' border-black border w-28 h-8 text-lg hover:bg-slate-300'>Shop Now</button>
            </Link>
        </p>
        
        </div>

    </div>
    </Layout>
  )
}

export default Home