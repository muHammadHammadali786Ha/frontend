// import React from 'react'
import './Products.css';
import { productdata } from "./productdata"

const Products = () => {
  return (
    <>
    <div className='prod'>
      <hr />
      <h2> Produts Found </h2>
    </div>
    <div className="grid grid-cols-1  xm:grid-cols-2 md:grid-cols-3 gap-3">
        {productdata.map((item)=>{
          return (
            <div key={item.id}>
                        <img src={item.img} alt="" className=''/>
                        <div className='sm:text-center my-2'>
                        <p>{item.title}</p>
                        <span className='font-bold'>{item.price}</span>
                        </div>
                </div>
            )
          })
          
          
        }
    </div>
        </>
  )
}

export default Products