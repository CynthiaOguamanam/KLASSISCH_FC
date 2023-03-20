import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillFacebook,AiOutlineCloseSquare, AiFillLinkedin, AiFillMail, AiFillTwitterSquare, AiOutlineSelect} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import pic from '../Assets/ball3.jpg'

const CartDetailPage = ( {setModal} ) =>{

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount (count +1)
    };

    const redCount = () =>{
        setCount (count -1);
        if(count <= 0){
            setCount(0)
        }
    };

    

    return(
        <Container>
            <Button  onClick={()=>{
                setModal(false)
            }}  style={{border: "none", background: "none", width: 50, height: 50}}>
            <AiOutlineCloseSquare style={{width: 40, height: 40, color:"#003C58"}}/>
            </Button>
            <Left>
                <img src={pic} alt='imageview'/>
            </Left>
            <Line></Line>
            <Right>
                <h2>Frank oliver Oud Touch EDP 100ml</h2>
                <Social>
                    <AiFillFacebook style={{width: 30, height: 30, color:"#003C58"}}/>
                    <AiFillLinkedin style={{width: 30, height: 30, color:"#003C58"}}/>
                    <AiFillTwitterSquare style={{width: 30, height: 30, color:"#003C58"}}/>
                    <AiFillMail style={{width: 30, height: 30, color:"#003C58"}}/>
                </Social>
            <Line2></Line2>
            <Div>
                <h5>price: </h5>
                <price >#14, 500</price>
            </Div>
            <Div>
                <h5>Stock: </h5>
                <Price style={{color: "green"}}> <AiOutlineSelect/> In Stock</Price>
            </Div>
            <Div>
                <h5>Quantity: </h5>
                <Box>
                    <Minus onClick={redCount}>-</Minus>
                    <Value>{count}</Value>
                    <Add onClick={addCount}>+</Add>
                </Box>
            </Div>
            <Divv>
            <Button2 to='/cartpage' >Add To Cart</Button2>
            <Button2 to='/checkout'>Buy Now</Button2>
            </Divv>
            </Right>
        </Container>
    )
};

export default CartDetailPage;

const Container = styled.div`
    width: 85%;
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: white;
    box-shadow: #D50000 0px 1px 2px;
    border-radius: 5px;
    @media Screen and (max-width: 768px){
        width: 90%;
        flex-direction: column;
        align-items: center;
        margin-left: 18px;
        margin-top: 100px;
        height: 500px;
    }
`;
const Left = styled.div`
width: 35%;
margin-right: 120px;
display: flex;
justify-content: center;
align-items: center;
    img{
        width: 80%;
        height: 320px;
        object-fit: cover;
        margin: 10px 0;
        border-radius: 3px;
    }

@media Screen and (max-width: 768px){
    img{
        height: 120px;
    }
}
`;
const Right = styled.div`
    width: 50%;
    height: auto;

    h2{
        color: #003C58;
    }

    @media Screen and (max-width: 768px){
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            font-size: 15px;
        }
    }
    
`;
const Line = styled.div`
    width: 1px;
    height: 80%;
    background-color: #003C58;

`;
const Line2 = styled.div`
    width: 85%;
    height: 1px;
    margin: 10px 0;
    background-color: lightgrey;
`;

const Social = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`;

const Div = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #003C58;
    margin: 5px 10px 0px 0px;

    price{
        font-size: 15px;
        font-weight: 450;
    }

    @media Screen and (max-width: 768px){
        width: 100%;
    }

`;

const Price = styled.div`
    margin-left: 40px;
    font-size: 17px;
    font-weight: 450;
`;
const Box = styled.div`
    width: 150px;
    height: 35px;
    padding: 5px 10px;
    border: 1px solid #003C58;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 110px;
    border-radius: 5px;
    padding: 5 0px;
`;

const Minus = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    font-size: 40px;
    color: #003C58;
    margin: 0 0 10px 0;
    font-weight: bold;

`;
const Add = styled.div`
    cursor: pointer;
    border: none;
    background: none;
    font-size: 40px;
    color: #003C58;
    margin: 0 0 10px 0;


`;
const Value = styled.div`
    font-size: 35px;
    color: #003C58;
    margin: 0 0 10px 0;
    font-weight: 500;

`;
const Button2 = styled(Link)`
  width: 200px;
  height: 30px;
  border: none;
  background-color: #D50000;
  padding: 7px 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  margin: 20px 15px 20px 0;
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  :hover{
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

  @media Screen and (max-width: 768px){
    margin: 15px 5px 15px 0;
  }
`;
const Button = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  background-color: #C6DDF2;
  padding: 5px o;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  margin: 20px 15px 20px 0;
  color: #003c58;
  cursor: pointer;

  :hover{
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

  @media Screen and (max-width: 768px){
    margin: 15px 5px 15px 0;
  }
`;

const Divv = styled.div`
    width: 83%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #003C58;
    margin-right: 20px;

  @media Screen and (max-width: 768px){
    width: 100%;
    justify-content: space-between;
  }
`;

