import React, { useState } from 'react'
import {
    Container, Wrapper, NavHold, Nav, Logo, Img, Img2,
    BurgerHold, H4, Wrapper2, SearchHold, Search, Categories,
    Nav2, NavDiv
} from './HeaderStyle';
import pic from '../Assets/logo2.png'
import {AiFillMessage, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineSearch} from 'react-icons/ai'
import {BsBuildingFillExclamation, BsCart, BsFillPatchCheckFill, BsImage, BsInfoCircle,BsPersonFill,
} from 'react-icons/bs';
import SideNav from './SideNav';


const Header = () => {

  const [nav, setNav] = useState(false);


  return (
    <Container>
      <Wrapper>
        <Logo to='/home'>
          <Img src={pic} alt='logo'/>
          <H4>Klassisch <br/><span style={{color: "#DD2C00"}}>Football</span><br/> Academy</H4>
        </Logo>
        <NavHold>
          <Nav to='/home'> <BsBuildingFillExclamation/> Latest</Nav>
          <Nav to='/news'> <BsInfoCircle/> News</Nav>
          <Nav to='/matches'> <BsFillPatchCheckFill/> Matches</Nav>
          <Nav to='/gallery'> <BsImage/> Gallery</Nav>
          <Nav to='/shop'><BsCart/> Shop</Nav>
          <Nav to='/'><BsPersonFill/> Register</Nav>
        </NavHold>
        <BurgerHold onClick={() =>{
          setNav(true)
        }}> 
          <AiOutlineMenu style={{color: "white", width: "40px", height: "40px"}}/>
        </BurgerHold>
      </Wrapper>
      <Wrapper2>
        <SearchHold>
          <AiOutlineSearch style={{color: "white", width: "25px", height: "25px"}}/>
          <Search placeholder='Search' type='search'/>
        </SearchHold>
        <Categories>
          <Nav2> <AiFillMessage/> <a style={{textDecoration: "none", color: "white"}} href='https://hotmail.com/'>klassischfc@hotmail.com</a></Nav2>
          <Nav2> <AiOutlinePhone/>+2348122346578 / +2349067892345</Nav2>
          <Nav2> <AiOutlineMail/> <a style={{textDecoration: "none", color: "white"}} href='https://google.mail.com/'>klassischfc@gmail.com</a> </Nav2>
        </Categories>
      </Wrapper2>
      {
        nav? (<NavDiv> 
          <SideNav setNav={setNav}/>
        </NavDiv>) : null
      }
    </Container>
  )
};

export default Header;