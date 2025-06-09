// import React from 'react'
import './Color.css'
const Color = () => {
  return (
    <div className='color'>
        <h2>Colors</h2>
        <div className="colors">
            <div className='colorLeft'>
            <div className='flexdiv'>
           <div className="bg bg1"></div>
           <p>White</p>
            </div>

            <div className='flexdiv'>
           <div className="bg bg2"></div>
           <p>Red</p>
            </div>

            <div className='flexdiv'>
           <div className="bg bg3"></div>
           <p>Blue</p>
            </div>
            </div>

            <div className="colorRight">
            <div className='flexdiv'>
           <div className="bg bg4"></div>
           <p>Yellow</p>
            </div>

            <div className='flexdiv'>
           <div className="bg bg5"></div>
           <p>Black</p>
            </div>

            <div className='flexdiv'>
           <div className="bg bg6"></div>
           <p>Green</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Color