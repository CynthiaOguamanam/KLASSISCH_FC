import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ModalDiv = styled.div`
    position: fixed;
    height: 50vh;
    width: 90%;
    background-color: transparent;
    bottom: 120px;
`;
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 200px;
`;
export const Wrapper = styled.div`
width: 90%;
display: flex;
/* flex-direction: column; */
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;
export const Card = styled.div`
width: 250px;
height: 350px;
border: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px 10px;
border-radius: 4px;
`;
export const Img = styled.img`
width: 100%;
height: 65%;
`;
export const Button = styled(Link)`
width: 80%;
border: 1px solid grey;
padding: 8px 0;
border-radius: 3px;
text-align: center;
cursor: pointer;
font-weight: 500;
text-decoration: none;
color: red;
font-weight:bold;
`;
export const ViewMore = styled.button`
width: 81%;
border: 1px solid grey;
padding: 10px 0px;
border-radius: 3px;
text-align: center;
margin-bottom: 7px;
cursor: pointer;
font-weight: bold;
font-size: 16px;
background: none;
`;

