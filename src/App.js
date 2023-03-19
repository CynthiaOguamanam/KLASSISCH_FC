import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Latest from './Components/Latest/Latest';
import News from './Components/News/News';
import Matches from './Components/Matches/Matches'
import Gallery from './Components/Gallery/Gallery'
import Shop from './Components/Shop/Shop'
import Landingpage from './Components/LandingPage/landingpage';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import CartDetailPage from './Components/Shop/CartDetailPage';
import CartPage from './Components/Shop/Cart';
import NewsDetailPage from './Components/News/NewsDetailPage';
import CheckoutPage from './Components/Shop/CheckOut';

const App = () =>{
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Landingpage/>}/>
        <Route path="/home" element={<Latest/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path='/detail' element-={<NewsDetailPage/>}/>
        <Route path='/matches' element={<Matches/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cartdetail' element={<CartDetailPage/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;