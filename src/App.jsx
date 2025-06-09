// import React from 'react'

import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import Shop from "./Components/Pages/Shop/Shop"
import Page from "./Components/Pages/Page/Page"
import Blog from "./Components/Pages/Blog/Blog"
import Contact from "./Components/Pages/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from './Components/Navbar/Navbar'
import Header from "./Components/Header/Header"
import Login from "./Components/Login/Login"
import { useContext, useEffect } from "react"
import { StoreContext } from "./Context/StoreContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import StoreContextProvider from "./Components/Context/StoreContext"

const App = () => {
  const {logined} = useContext(StoreContext);
  useEffect(()=>{

  },[]);
  return (
    <div>
      
      <BrowserRouter>
      <ToastContainer/>
      {logined && <Navbar/>}
      {logined && <Header/>}
        <Routes>
          
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={logined?<Home/>:<Login/>}/>
            <Route path="/shop" element={logined?<Shop/>:<Login/>}/>
            <Route path="/page" element={logined?<Page/>:<Login/>}/>
            <Route path="/blog" element={logined?<Blog/>:<Login/>}/>
            <Route path="/contact" element={logined?<Contact/>:<Login/>}/>
          
        </Routes>
        {logined && <Footer/>}
      </BrowserRouter>
    </div>
  )
}

export default App