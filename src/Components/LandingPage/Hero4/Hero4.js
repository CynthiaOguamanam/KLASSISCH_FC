import React, {useState} from 'react';
import {
  Container, Wrapper, Card, Button, ViewMore, Img, H1, ModalDiv
} from './Hero4Style';
import Marquee from "react-fast-marquee";
import pic from '../../Assets/js.jpg'
import js2 from '../../Assets/js2.jpg'
import jss from '../../Assets/jersey2.jpg'
import pic2 from '../../Assets/away1.jpg'
import boot from '../../Assets/boot2.jpeg'
import boot1 from '../../Assets/boot1.jfif'
import {BsCart3 } from 'react-icons/bs'
import CartDetailPage from '../../Shop/CartDetailPage';
import swal from 'sweetalert'

const Hero4 = () => {

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);


  return (
   <Container>
      <Wrapper>
        <H1>New Jerseys & Training Outfits</H1>
       <Marquee speed={50} pauseOnHover={true} gradientColor="white">
       <Card>
          <Img src={jss} alt='shop'/>
          <ViewMore onClick={() =>{
            setModal(true)
          }}>Quick View</ViewMore>
          <Button onClick={(() =>{
                    setLoading(true)
                    swal({
                       title: 'Item added to cart',
                       text: "This product is now in your cart",
                       icon: "success",
                       timer: 2000
                     });
                })}  to='/cartpage'> <BsCart3/> Add To Cart</Button>
        </Card>
       <Card>
          <Img src={boot1} alt='shop'/>
          <ViewMore onClick={() =>{
            setModal(true)
          }}>Quick View</ViewMore>
          <Button onClick={(() =>{
                    setLoading(true)
                    swal({
                       title: 'Item added to cart',
                       text: "This product is now in your cart",
                       icon: "success",
                       timer: 2000
                     });
                })}  to='/cartpage'> <BsCart3/> Add To Cart</Button>
        </Card>
       <Card>
          <Img src={js2} alt='shop'/>
          <ViewMore onClick={() =>{
            setModal(true)
          }}>Quick View</ViewMore>
          <Button onClick={(() =>{
                    setLoading(true)
                    swal({
                       title: 'Item added to cart',
                       text: "This product is now in your cart",
                       icon: "success",
                       timer: 2000
                     });
                })}  to='/cartpage'> <BsCart3/> Add To Cart</Button>
        </Card>
       <Card>
          <Img src={pic2} alt='shop'/>
          <ViewMore onClick={() =>{
            setModal(true)
          }}>View More</ViewMore>
          <Button onClick={(() =>{
                    setLoading(true)
                    swal({
                       title: 'Item added to cart',
                       text: "This product is now in your cart",
                       icon: "success",
                       timer: 2000
                     });
                })}  to='/cartpage'> <BsCart3/> Add To Cart</Button>
        </Card>
       <Card>
          <Img src={boot} alt='shop'/>
          <ViewMore onClick={() =>{
            setModal(true)
          }}>View More</ViewMore>
          <Button onClick={(() =>{
                    setLoading(true)
                    swal({
                       title: 'Item added to cart',
                       text: "This product is now in your cart",
                       icon: "success",
                       timer: 2000
                     });
                })}  to='/cartpage'> <BsCart3/> Add To Cart</Button>
        </Card>
       <Card>
          <Img src={pic} alt='shop'/>
          <ViewMore onClick={() =>{
            setModal(true)
          }}>View More</ViewMore>
          <Button onClick={(() =>{
                    setLoading(true)
                    swal({
                       title: 'Item added to cart',
                       text: "This product is now in your cart",
                       icon: "success",
                       timer: 2000
                     });
                })}  to='/cartpage'> <BsCart3/> Add To Cart</Button>
        </Card>
       </Marquee>
      </Wrapper>
      {
        modal? (<ModalDiv> <CartDetailPage setModal={setModal}/> </ModalDiv>) : null
      }
   </Container>
  )
}

export default Hero4;