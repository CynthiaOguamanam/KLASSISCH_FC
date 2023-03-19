import React , {useEffect} from 'react';
import ScrollToTop from "react-scroll-to-top";
import {
    Container, H1, Social, Img, Line3, Col1, 
    Col2, Col3, Line4, P, Input, Button, H2
} from './FooterStyle';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {

    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth"
        })
    }, [])

  return (
    <Container>
        <H1>KLASSISCH FC.COM</H1>
        <Social>
            <Img> <AiOutlineFacebook style={{width: "50px", height: "50px"}}/> </Img>
            <Img> <AiOutlineTwitter style={{width: "50px", height: "50px"}}/> </Img>
            <Img> <AiOutlineInstagram style={{width: "50px", height: "50px"}}/> </Img>
            <Img> <AiOutlineYoutube style={{width: "50px", height: "50px"}}/> </Img>
        </Social>
        <Line3>
            <Col1>
                <span>Latest</span>
                <span>News</span>
                <span>Gallery</span>
                <span>Home</span>
            </Col1>
            <Col2>
                <span>Privacy Policy</span>
                <span>KFC History</span>
                <span>Register</span>
                <span>klassisch fc.com</span>
            </Col2>
            <Col3>
                <span>Matches</span>
                <span>Shop</span>
                <span>Academy</span>
                <span>Club</span>
            </Col3>
        </Line3>
        <ScrollToTop style={{
                    width: 150, height: 50, border: "1px solid grey", backgroundColor: "#D50000", opacity: "80%", color: "#fff"
                }} smooth/> 
        <Line4>
                <H2>Subscribe To Our Newsletter</H2>
                <P>Redundant alt attribute. Screen-readers already announce Redundant alt attribute. Redundant alt attribute. Screen-readers already announce</P>
                <Input type='email' placeholder='your email address'/>
                <Button>Subscribe</Button>
        </Line4>
    </Container>
  )
};

export default Footer;

