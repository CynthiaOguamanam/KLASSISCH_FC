import styled from 'styled-components';
import pic from '../../Assets/DAY 1/aa1.JPG'


export const Container = styled.div`
width: 100%;
height: 79vh;
background-image: url(${pic});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
top: 100px;
padding-top: 90px;
left: 0; 
position: relative;

@media Screen and (max-width: 768px){
    height: 70vh;
}
@media Screen and (max-width: 425px){
    background-size: contain;
    height: 25vh;
}
`;
export const Wrapper = styled.div`
width: 70%;
height: auto;
margin-top: 250px;
background-color: white;
margin-left: 100px;
opacity: 80%;

@media Screen and (max-width: 768px){
    margin-top: 350px;
}
@media Screen and (max-width: 425px){
    margin-top: 100px;
    width: 90%;
    margin-left: 20px;
}
@media Screen and (max-width: 320px){
    margin-top: 60px;
    width: 90%;
    margin-left: 15px;
}

`;
export const H1 = styled.div`
color: #263238;
font-size: 60px;

@media Screen and (max-width: 768px){
    font-size: 30px;
}
@media Screen and (max-width: 425px){
    font-size: 20px;
}
@media Screen and (max-width: 320px){
    font-size: 15px;
}
`;
export const Line = styled.div`
width: 100%;
height: 3px;
background-color: blue;
`;
export const P = styled.div`
color: #263238;
font-weight: bold;
border-bottom: solid 2px blue;
width: 73px
`;

