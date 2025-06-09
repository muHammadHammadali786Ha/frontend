// import React from 'react'

import Color from "../../Shop/Color/Color";
import Department from "../../Shop/Department/Department";
import Sixes from "../../Shop/Sixes/Sixes";
import Products from "../../Shop/Products/Products";
import Sales from "../../Shop/SaleOff/Sales";

const Shop = () => {
  return (
    <div className="flex flex-wrap mmd:flex-nowrap mx-[3rem] gap-[2rem] my-[3rem] ">
      <div className="w-full mmd:w-[18rem] flex flex-col gap-[4rem] mt-[1rem] justify-center ">
          <Department/>
          <Color/>
          <Sixes/>
      </div>

      <div className="rightside flex-2 w-[62rem]">
        <Sales/>
        <Products/>
      </div>
    </div>
  )
}

export default Shop