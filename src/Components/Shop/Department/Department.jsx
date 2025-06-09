/* eslint-disable react/prop-types */
// import React from 'react'
import './Department.css';
const Department = ({show}) => {
  return (
    <div className='department w-full'>
        <div className="depart w-full">
            <h3>All Departments</h3>
        </div>
        { show ?<div className="dropDown">
            <p>Fresh Meat</p>
            <p>Vegetables</p>
            <p>Fruit & Nut Gifts</p>
            <p>Fresh Berries</p>
            <p>Ocean Foods</p>
            <p>Butter & Eggs</p>
            <p>Fastfood</p>
              <p>Fresh Onion</p>
            <p>Papayaya & Crisps</p>  
            <p>Oatmeal</p>   
            <p>Fresh Bananas</p>   
        </div>:""}
    </div>
  )
}

export default Department