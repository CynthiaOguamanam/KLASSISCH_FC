import React, {useState} from 'react'
import {
  Container, Wrapper, Card, Img, ViewMore, Button, ModalDiv
} from './ShopStyle';
import {BsCart} from 'react-icons/bs'
import shirt from '../Assets/shirt2.png'
import pic from '../Assets/js.jpg'
import js2 from '../Assets/js2.jpg'
import jss from '../Assets/jersey2.jpg'
import pic2 from '../Assets/away1.jpg'
import boot from '../Assets/boot2.jpeg'
import boot1 from '../Assets/boot1.jfif'
import ball3 from '../Assets/boot5.jpg'
import boot3 from '../Assets/boot6.jpg'
import boot4 from '../Assets/boot4.jpg'
import glove from '../Assets/glove.png'
import glove2 from '../Assets/glove2.png'
import yellow from '../Assets/yellow.jpg';
import swal from 'sweetalert';

import CartDetailPage from '../Shop/CartDetailPage'

const Shop = () => {

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  return (
    <Container>
      <h1 style={{color: "#263238", fontStyle:"italic"}}>KLASSISCH FA SHOP</h1>
      <Wrapper>
      <Card>
          <Img src={shirt} alt='shop'/>
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
                })} to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={boot4} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={jss} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={glove} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={js2} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={boot1} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={boot3} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={glove} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={ball3} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={glove2} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      <Card>
          <Img src={yellow} alt='shop'/>
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
                })}  to='/cartpage'> <BsCart/> Add To Cart</Button>
        </Card>
      </Wrapper>
      {
        modal? (<ModalDiv><CartDetailPage/></ModalDiv>) : null
      }
    </Container>
  )
}

export default Shop;
