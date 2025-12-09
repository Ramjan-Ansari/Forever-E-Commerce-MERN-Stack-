import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Collection from "./pages/Collection.jsx"
import About from "./pages/About.jsx"

import Product from "./pages/Product.jsx"
import Card from "./pages/Card.jsx"
import Login from "./pages/Login.jsx"
import Placeorder from "./pages/Placeorder.jsx"
import Order from "./pages/Orders.jsx"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Searchbar from './components/Searchbar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './pages/Contact.jsx'
import Verify from './pages/Verify.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <ToastContainer />
       <Navbar />
       <Searchbar />
       <ScrollToTop />
       <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/collection' element={ <Collection /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/product/:productId' element={ <Product /> } />
        <Route path='/card' element={ <Card /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/place-order' element={ <Placeorder /> } />
        <Route path='/orders' element={ <Order /> } />
        <Route path='/verify' element={ <Verify /> } />
        <Route path='*' element={ <NotFound /> } />
       </Routes>
       <Footer />
    </div>
  )
}

export default App