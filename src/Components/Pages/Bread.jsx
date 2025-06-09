/* eslint-disable react/prop-types */
// import React from 'react'
// import './css/Contact.css';
const Bread = ({title,small}) => {
  return (
    <div className='bread '>
    <div>
    <h2>{title}</h2>
    </div>
    <div>
    <p> <b>Home- </b>{small}</p>
    </div>
</div>
  )
}

export default Bread