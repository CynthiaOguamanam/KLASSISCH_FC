import styled from "styled-components";
import pic from '../../Assets/DAY 2/1.JPG'

export const Container = styled.div`
width: 100%;
height: 79vh;
background-image: url(${pic});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
top: 150px;
left: 0; 
position: relative;

@media Screen and (max-width: 768px){
    height: 70vh;
}
`;
export const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
line-height: 40px;


`;
export const Line = styled.div`
width: 90%;
height: 3px;
background-color: red;
`;
export const H1 = styled.h1`
color: white;
line-height: 50px;
font-size: 40px;

@media Screen and (max-width: 768px){
    font-size: 25px;
    line-height: 35px;
}
`;

