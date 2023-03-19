import React from 'react';
import styled from 'styled-components';
import pic from '../Assets/DAY 1/D1.JPG'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Right>
          <InputHold>
            <p>Username: </p>
             <Input placeholder='Igoh Paulo'/>
          </InputHold>
          <br/>
          <InputHold>
            <p>Email: </p>
             <Input placeholder='pauloigoh22@gmail.com'/>
          </InputHold>
          <br/>
          <InputHold>
            <p>Password: </p>
             <Input placeholder='*************'/>
          </InputHold>
          <br/>
          <InputHold>
            <p>Confirm Password</p>
             <Input placeholder='*************'/>
          </InputHold>
          <br/>
          <br/>
          <Button>Sign Up </Button>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Register;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
margin-top: 100px;
`;
const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 150px;

@media Screen and (max-width: 768px){
  justify-content:center;
}
`;
const Left = styled.div`
width: 50%;
height: 500px;
background-color: red;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-bottom: 120px;
background-image: url(${pic});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-origin: border-box;
border-radius: 4px;

@media Screen and (max-width: 768px){
  display: none;
}


@media Screen and (max-width: 425px){
  display: none;
}
`;

const Right = styled.div`
width: 26%;
height: 80%;
margin-bottom: 120px;
border-radius: 3px;
border: 1px solid #a5a5a5;
padding: 12px 30px;

@media Screen and (max-width: 768px){
  width: 70%;
  padding: 20px 30px;
}
`;

const InputHold = styled.div`
height: auto;
width: auto;
display: flex;
flex-direction: column;

p{
  font-style: oblique;
  font-weight: 500;
}

`;
const Input = styled.input`
padding: 10px 5px;
outline: none;
/* border: 1px solid #a5a5a5; */
border: none;
background-color: #263238;
color: white;
border-radius: 2px;

::placeholder{
  color: #e5e5e5;
}

`;
const Button = styled.button`
padding: 15px 70px;
border-radius: 4px;
border: none;
background-color: #D50000;
color: white;
cursor: pointer;
font-weight: bold;
box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
@media Screen and (max-width: 320px){
  padding: 13px 75px;
}
`;
