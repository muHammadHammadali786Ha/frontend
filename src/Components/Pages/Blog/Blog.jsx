// import React from 'react'
// import Bread from '../Bread';
import Searchbar from '../../Searchbar/Searchbar'
import Recent from '../../Recent/Reacnt'
import Searchby from '../../SearchBy/SearchBy'
import Content from '../../BlogsContent/Content'
const Blog = () => {
  return (
    <div>
      {/* <Brea d/> */}
      <div className="flex flex-col md:flex-row mx-[3rem] my-[2rem] ">
        {/* left div */}
          <div className="left flex flex-col ">
            <Searchbar/>
            <Recent/>
            <Searchby/>
          </div>
          {/* right div */}
          <div className="right">
          <Content />
          </div>
      </div>
    </div>
  )
}

export default Blog