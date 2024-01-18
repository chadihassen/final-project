import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import ProductCard from './ProductCard';

function Shop({ping, setping}) {
  const [category, setcategory] = useState("man")
  const products=useSelector((state)=>state.product.productlist);
  
  console.log(products)
  return (

    <>
    <div style={{display:'flex', justifyContent:"center", marginTop:"30px"}}>
      <button onClick={()=>setcategory("man")}>Man</button>
      <button onClick={()=>setcategory("women")}>Women</button>
      <button onClick={()=>setcategory("kids")}> Kids</button>
      {/* <select>
        <option>Man</option>
        <option>Woman</option>
        <option>kids</option>
      </select> */}
    </div> 
    <div className='products'>
{products?.filter((el)=>el.category==category).map((el)=> <ProductCard ping={ping} setping={setping} el={el} />)}
    </div>
    </>
  )
}

export default Shop