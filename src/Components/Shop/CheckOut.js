import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {Link} from 'react-router-dom';

const CheckoutPage = () => {

  return (
    <Container>
      <Wrapper>
        <ContactInfo>
          <div style={{
            color:"#003C58",
            fontSize: "18px",
            fontWeight: 500,
          }}>Contact Information</div>
          <Input type='email' placeholder='Email or Phone number'/>
        </ContactInfo>
        <AddressDiv>
          <div  style={{
            color:"#003C58",
            fontSize: "18px",
            fontWeight: 500,
          }}>Shipping Adress</div>
          <Input type='text' placeholder='country/region'/>
          <Div>
            <Input1 type='text' placeholder='First Name(optional)'/>
            <Input1 type='text' placeholder='Last Name'/>
          </Div>
          <Input type='text' placeholder='Address' />
          <Input type='text' placeholder='Apartment, Suite, etc (optional)' />
          <Div>
            <Input2 type='text' placeholder='City' />
            <Input2 type='text' placeholder='State' />
            <Input2 type='text' placeholder='postal code(optional)' />
          </Div>
          <TotalPrice>
            Total: #0.00
              </TotalPrice>
          <HoldButton>
          <ArrowDiv to='/cartpage'>
            <ArrowHold>
            <AiOutlineArrowLeft/>
            </ArrowHold>
            <BackToCart>Return to cart</BackToCart>
          </ArrowDiv>
          <Button>Pay Now</Button>
          </HoldButton>
        </AddressDiv>
      </Wrapper>
    </Container>
  )
}

export default CheckoutPage;

const Container = styled.div`
width: 100vw;
height: auto;
margin-top: 170px;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
width: 55vw;
height: auto;
margin-top: 70px;
padding: 30px 0 30px 40px;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

@media Screen and (max-width:768px){
  margin-top: 150px;
  align-items: center;
  width: 68vw;
  margin-bottom: 30px;
}
`;
const ContactInfo = styled.div`
margin-left: 10px;
width: 97%;
height: auto;

@media Screen and (max-width: 768px){
  width: 95%;
  margin-right: 10px;
}

`;
const AddressDiv = styled.div`
margin: 10px;
`;
const Input = styled.input`
  width: 89%;
  margin-top: 10px;
  padding: 8px 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media Screen and (max-width: 768px){
    width: 85%;

  }
`;
const Input1 = styled.input`
  width: 45%;
  padding: 8px 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media Screen and (max-width: 768px){
    width: 93%;
    margin-top: 10px;
  }
`;
const Input2 = styled.input`
  width: 28%;
  padding: 8px 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media Screen and (max-width: 768px){
    width: 93%;
    margin-top: 10px;
  }
`;

const TotalPrice = styled.div`
width: 120px;
font-weight: bold;
color: #003C58;
font-size: 15px;
margin-top: 15px;


@media Screen and (max-width: 768px){
    font-size: 17px;
    margin-top: 10px;
    width: 100px;
}

`;
const Div = styled.div`
width: 92%;
height: auto;
display: flex;
justify-content: space-between;
margin-top: 15px;

@media Screen and (max-width: 768px){
  flex-direction: column;
}
`;
const HoldButton = styled.div`
width: 92%;
display: flex;
margin-top: 30px;
justify-content: space-between;

@media Screen and (max-width: 768px){
  flex-direction: column;
  align-items: center;
}

`;
const BackToCart = styled.div`
color: #D50000;
margin-left: 10px;
transition: margin-left 2s;
:hover{
  margin-left: 20px;
}

@media  Screen and (max-width: 768px){
  margin-bottom: 10px;
}
`;
const ArrowDiv = styled(Link)`
width: 150px;
height: auto;
color: #003C58;
display: flex;
align-items: center;
text-decoration: none;

`;

const ArrowHold = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #D50000;

`;
const Button = styled.button`
    padding: 8px 69px;
    border-radius: 4px;
    font-weight: bold;
    color: #003C58;
    font-size: 13px;
    text-decoration: none;
    border: 1px solid #003C58;
    cursor: pointer;
    :hover{
        opacity: 70%;
        transition: all 1s;
    }
@media Screen and (max-width: 768px){
padding: 8px 85px;

}
`;