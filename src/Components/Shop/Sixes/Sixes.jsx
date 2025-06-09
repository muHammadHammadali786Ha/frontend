// import React from 'react'
import './Sixes.css'

const Sixes = () => {
  return (
    <div className='flex flex-col flex-wrap'>
            <h2>Popular Size</h2>
            <div className="flex gap-3 my-3">
                <div className=" flex mmd:flex-col gap-3">
                    <button className='btn'>Large</button>
                    <button className='btn'>Medium</button>
                </div>
                <div className="flex mmd:flex-col gap-3">
                    <button className='btn'>Small</button>
                    <button className='btn'>Tiny</button>
                </div>
            </div>
    </div>
  )
}

export default Sixes