import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pic from '../../Assets/DAY 2/DS1.JPG'

export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
margin-top: 150px;
`;

export const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
height: auto;

@media Screen and (max-width: 768px){
    justify-content: center;
}
`;
export const Div = styled.div`
width: 80%;
display: flex;
flex-direction: column;
height: auto;

@media Screen and (max-width: 768px){
    align-items: center;
}
`;
export const Left = styled.div`
width: 90%;
height: auto;
display: flex;
justify-content: space-between;
margin: 45px 0;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
}
`;
export const Right = styled.div`
width: 25%;
display: flex;
flex-direction: column;

@media Screen and (max-width: 768px){
    display: none;
}
/* background-color: yellowgreen; */
`;
export const Latest = styled.div`
width: 221px;
height: 401px;
background-color: white;
border-top: 3px solid #1441A3;
box-shadow:   rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;
border-radius: 4px;
:hover{
transform: scale(1.01);
cursor:  pointer;
}
transition: all 500ms;
margin: 20px 0;
padding-bottom: 15px;
`;
export const One = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 15px;
line-height: 20px;
margin-bottom: 15px;
`;
export const Two = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 15px;
width: 90%;
color: red;
font-weight: 500;
font-style: oblique;
`;
export const Button = styled(Link)`
background-color: blue;
margin-left: 15px;
padding: 5px 52px;
border-radius: 2px;
color: white;
text-align: center;
font-weight: 500;
font-size: 16px;
text-decoration: none;
`;

export const Line = styled.div`
width: 90%;
height: 3px;
opacity: 35%;
background-color: #263238;
`;