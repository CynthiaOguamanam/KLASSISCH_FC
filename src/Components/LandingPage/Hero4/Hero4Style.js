import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ModalDiv = styled.div`
    position: fixed;
    height: 50vh;
    width: 90%;
    background-color: transparent;
    bottom: 120px;
    z-index: 999;
`;
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 120px;
position: relative;
`;
export const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



`;
export const Card = styled.div`
width: 250px;
height: 350px;
border: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 10px;
border-radius: 4px;
`;
export const Button = styled(Link)`
width: 80%;
border: 1px solid grey;
padding: 8px 0;
border-radius: 3px;
text-align: center;
cursor: pointer;
font-weight: bold;
text-decoration: none;
color: #D20000;
`;
export const ViewMore = styled.button`
width: 80%;
border: 1px solid grey;
padding: 8px 0;
border-radius: 3px;
text-align: center;
margin-bottom: 7px;
cursor: pointer;
font-weight: bold;
text-decoration: none;
color: #263238;

`;
export const Img = styled.img`
width: 100%;
height: 65%;

`;
export const H1 = styled.h1`
color: #263238;
`;

