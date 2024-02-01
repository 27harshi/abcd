import React, { useEffect, useState } from 'react'

function useProduct(id) {
    const [select,setSelect]= useState([]);
     useEffect(()=>{
        getSingle();
     },[])

     async function getSingle(){
        const data = await fetch ("https://fakestoreapi.com/products/"+id)
        const json = await data.json()
        setSelect(json) 
     }
  return select
}

export default useProduct