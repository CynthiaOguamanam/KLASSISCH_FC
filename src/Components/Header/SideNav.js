import React from 'react';
import styled from 'styled-components';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const SideNav = ({setNav}) => {
  return (
    <Container>
        <Wrapper>
        <Button  onClick={()=>{
                setNav(false);
            }}  style={{border: "none", background: "none", width: 50, height: 50}}>
            <AiOutlineCloseSquare style={{width: 40, height: 40, color:"#003C58",}}/>
            </Button>
                <MidNav>
                    <Span to='/latest'>Latest</Span>
                    <Span to='/news'>News</Span>
                    <Span to='/matches'>Matches </Span>
                    <Span to='/gallery'>Gallery </Span>
                    <Span to='/shop'>Shop</Span>
                    <Span to='/'>Register</Span>
                </MidNav>
        </Wrapper>
    </Container>
  )
}

export default SideNav;

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
  color: #003c58;
  cursor: pointer;

  :hover{
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

  @media Screen and (max-width: 768px){
    margin: 15px 5px 15px 40px;
  }
`;

const Container = styled.div`
    width: 95%;
    height: 50vh;
    background-color: white;
    opacity: 90%;
    border: 2px solid #003C58;
    transition: all ease 2s;
    ::after{
      transition: ease-in-out 1s;
    }
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
`;

const MidNav = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
`;

const Span = styled(Link)`
            color: #003C58;
            text-decoration: none;
            font-size: 20px;
      :hover{
            cursor: pointer;
            text-decoration: underline #003C58 1.5px;
        }
`;