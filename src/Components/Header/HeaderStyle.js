import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 160px;
background-color: #263238;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
left: 0;
top: 0;
z-index: 990;
overflow-x: hidden;
`;
export const Wrapper = styled.div`
width: 90%;
height: 50%;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Img = styled.img`
width: 80px;
height: 75px;
cursor: pointer;
`;
export const Logo = styled(Link)`
object-fit: contain;
width: 12%;
height: 100%;
/* background-color: green; */
display: flex;
align-items: center;
justify-content: space-between;
text-decoration: none;
@media Screen and (max-width: 768px){
width: 35%;
}
`;
export const NavHold = styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media Screen and (max-width: 768px){
    display: none;
}
`;
export const Nav2 = styled.div`
color: white;
font-size: 18px;
cursor: pointer;
transition: all 400ms;
display: flex;
align-items: center;
justify-content: space-between;
:hover{
    font-size: 19px;
    transition: ease-in 400ms;
    font-weight: bold;
    color: #263238;
}
`;
export const Nav = styled(Link)`
color: white;
font-size: 18px;
cursor: pointer;
transition: all 400ms;
text-decoration: none;
display: flex;
align-items: center;
height: auto;
justify-content: space-between;

:hover{
    font-size: 19px;
    transition: ease-in 400ms;
    color: #DD2C00;
}
`;
export const BurgerHold = styled.button`
display: none;
@media Screen and (max-width: 768px){
    display: block;
    background-color: red;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    opacity: 90%;
    border: none;
    overflow-x: hidden;
    transition: 0.5s;
    cursor: pointer;
}
`;

export const NavDiv = styled.div`
position: fixed;
height: 50vh;
width: 90%;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
bottom: 100px;
top: 200px;

`;
export const Logo2 = styled.div`

`;
export const Img2 = styled.img`
width: 60px;
height: 60px;
`;
export const NavHold2 = styled.div``;
export const Burger = styled.div`
background-color: white;
`;
export const H4 = styled.h3`
color: white;
font-family: Cochin;
cursor: pointer;
font-style: oblique;
`;
export const Wrapper2 = styled.div`
width: 100%;
height: 50%;
background-color: #D50000;
/* background-color: #1441A3; */
display: flex;
justify-content: space-around;
align-items: center;
`;
export const SearchHold = styled.div`
width: 30%;
background-color: #263238;
border-radius: 6px;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 10px;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
export const Search = styled.input`
border: none;
background: transparent;
outline: none;
padding: 13px;
width: 100%;
color: white;
::placeholder{
    color: white;
    font-size: 17px;
}

`;
export const Categories = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    display: none;
}
`;
export const ButtonHold = styled.div``;