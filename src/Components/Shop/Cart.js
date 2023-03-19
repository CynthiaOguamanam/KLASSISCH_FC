import React, {useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import pic from '../Assets/boot2.jpeg'
import pic2 from '../Assets/boot3.jpg'


const CartPage = () => {

    const [loading, setLoading] = useState(false);

  return (
    <Container>
        <Wrapper1>
                <Wrapper>
            <CartDiv>
               <Card>
                <ImageHold>
                    <Img src={pic} alt='cartimage'/>
                </ImageHold>
                <Details>
                    <Title></Title>
                    <Desc>On the biggest fashion industry nights in the capital,
                    a whiff of scandal is in the air. Outrageous, extreme, intoxicating. At each appearance,
                    her outburst of orange blossom, jasmine and tuberose bowls her audience over with a sensual 
                    elegance. Her addictive milky notes envelop and exhilarate the senses.</Desc>
                    <DivDiv>
                        <NumDiv>
                            <Sub>-</Sub>
                            <Value>0</Value>
                        <Add>+</Add>
                        </NumDiv>
                        <ButtonHold>
                            <Price>price per item #0.00</Price>
                            <SingleTotal onClick={(() =>{
                    setLoading(true)
                    swal({
                        
                       title: 'Item removed from cart',
                       text: "This product is out of your cart",
                       icon: "success",
                       timer: 2000
                     });
                })} >Remove Item</SingleTotal>
                        </ButtonHold>
                    </DivDiv>
                </Details>
               </Card>
               <Card>
                <ImageHold>
                    <Img src={pic2} alt='cartimage'/>
                </ImageHold>
                <Details>
                    <Title></Title>
                    <Desc>On the biggest fashion industry nights in the capital,
                    a whiff of scandal is in the air. Outrageous, extreme, intoxicating. At each appearance,
                    her outburst of orange blossom, jasmine and tuberose bowls her audience over with a sensual 
                    elegance. Her addictive milky notes envelop and exhilarate the senses.</Desc>
                    <DivDiv>
                        <NumDiv>
                            <Sub>-</Sub>
                            <Value>0</Value>
                        <Add>+</Add>
                        </NumDiv>
                        <ButtonHold>
                            <Price>price per item #0.00</Price>
                            <SingleTotal onClick={(() =>{
                    setLoading(true)
                    swal({
                        
                       title: 'Item removed from cart',
                       text: "This product is out of your cart",
                       icon: "success",
                       timer: 2000
                     });
                })} >Remove Item</SingleTotal>
                        </ButtonHold>
                    </DivDiv>
                </Details>
               </Card>
            </CartDiv>
                </Wrapper>
              <PayDiv>
                <PaymentBox>
                    <Left>
                        <SubTotal> Items added to cart</SubTotal>
                        <Taxes>Taxes: 0%</Taxes>
                        <Shipping>Shipping: #0.00</Shipping>
                    </Left>
                    <Right>
                        <TotalPrice>Total: #0.00</TotalPrice>
                        <CheckOutButton to='/checkout'>CheckOut</CheckOutButton>
                    </Right>
                </PaymentBox>
            </PayDiv>
        </Wrapper1>
    </Container>
  )
}

export default CartPage;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
margin-top: 170px;

@media Screen and (max-width: 768px){
    margin-top: 300px
}
`;
const Wrapper1 = styled.div`
width: 95vw;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;
const Wrapper = styled.div`
width: 95vw;
height: auto;
display: flex;
flex-direction: column;
`;
const CartDiv = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;

`;
const Card = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin: 30px 0;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

@media Screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
}
`;
const ImageHold = styled.div`
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-left: 20px;

    @media Screen and (max-width: 768px){
        width: 80%;
        height: 200px;
        object-fit: cover;
        margin-left: 0;
        margin-bottom: 10px;
        margin-top: 40px;
    }

`;
const Img = styled.img`
    width: 100%;
    height: inherit;
    border-radius: 5px;

    @media Screen and (max-width: 768px){
        object-fit: contain;
    }
`;
const Details = styled.div`
width: 80%;
margin-right: 20px;
display:flex;
flex-direction: column;

@media Screen and (max-width: 768px){
    margin-right: 0;
    text-align: center;
    align-items: center;
    margin-left: 20px;
    margin-top: 40px;
}
@media Screen and (max-width: 71280px){
    margin-right: 0;
    /* text-align: center; */
    align-items: center;
    margin-left: 20px;
}
`;
const Title = styled.div`
font-size: 20px;
font-weight: bold;
color: #003C58;
`;
const Desc = styled.div`
font-size: 15px;
width: 90%;
color: #003C58;
margin-top: 10px;
`;
const DivDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 10px;
border-top: 1px solid lightgrey;
border-bottom: 1px solid lightgrey;
padding-top: 5px;
padding-bottom: 5px;

@media Screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;

}
`;

const NumDiv = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){

}
`;
const Sub = styled.button`
font-size: 20px;
font-weight: bold;
color: #003C58;
border: none;
background: none;
transition: cursor 4s;
:hover{
    cursor: pointer;
}
`;
const Add = styled.button`
font-size: 20px;
font-weight: bold;
color: #003C58;
border: none;
background: none;
transition: cursor 4s;
:hover{
    cursor: pointer;
}
`;
const Value = styled.div`
font-size: 20px;
font-weight: bold;
color: #003C58;
transition: cursor 4s;
`;
const ButtonHold = styled.div`
width: auto;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    width: 100vw;
    margin-top: 60px;
}
`;
const Price = styled.div`
padding: 10px 65px;
border-radius: 4px;
margin: 5px;
font-weight: bold;
color: #003C58;
text-decoration: none;
font-size: 13px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

@media Screen and (max-width: 320px){
    padding: 10px 35px;
}

`;

const SingleTotal = styled.button`
padding: 10px 65px;
background-color: #D50000;
border-radius: 4px;
margin: 5px;
font-weight: 600;
color: white;
text-decoration: none;
font-size: 13.5px;
text-align: center;
border: none;
cursor: pointer;

@media Screen and (max-width: 320px){
    padding: 10px 35px;
}
`;
const Left = styled.div`
width: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media Screen and (max-width: 768px){
    text-align: center;
};
`;
const SubTotal = styled.div`
font-size: 20px;
font-weight: bold;
color: #003C58;

`;
const Taxes = styled.div`
font-size: 15px;
color: #003C58;
margin-top: 10px;
@media Screen and (max-width: 768px){
    font-size: 17px
}
`;
const Shipping = styled.div`
font-size: 15px;
/* font-weight: bold; */
color: #003C58;
margin-top: 10px;
@media Screen and (max-width: 768px){
    font-size: 17px
}

`;

const Right = styled.div`
width: auto;
height: auto;

@media Screen and (max-width: 768px){
    margin-top: 20px;
}
`;
const TotalPrice = styled.div`
padding: 10px 65px;
border-radius: 4px;
font-weight: bold;
color: #003C58;
text-decoration: none;
font-size: 15px;
text-align: center;
margin-bottom: 15px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

@media Screen and (max-width: 768px){
    font-size: 17px
}

`;
const CheckOutButton = styled(Link)`
padding: 10px 90px;
background-color: #D50000;
border-radius: 4px;
font-weight: bold;
color: white;
text-decoration: none;
font-size: 15px;
text-align: center;

:hover{
    cursor: pointer;
    transition: all 2s;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background: transparent;
}
@media Screen and (max-width: 768px){
    font-size: 17px
}
`;


const PayDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
`;
const PaymentBox = styled.div`
width: 97%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
}

`;



