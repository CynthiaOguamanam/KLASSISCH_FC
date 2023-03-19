import styled from 'styled-components';
import pic from '../../Assets/pitch2.jpg'

export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${pic});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
opacity: 90%;
`;

export const Wrapper =styled.div`
width: 65%;
height: 45%;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;

@media Screen and (max-width: 768px){
    height: 40%;
    width: 60%;
}

@media Screen and (max-width: 425px){
    height: 35%;
    width: 80%;
}
@media Screen and (max-width: 320px){
    width: 90%;
}
`;

export const Title = styled.div`
margin: 30px;
font-size: 20px;
font-weight: bold;
color: #263238;
`;
export const Mid = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: auto;
`;

export const ScoreHold = styled.div`
width: 45%;
display: flex;
flex-direction: column;
align-items: center;
`;
export const Logo = styled.img`
@media Screen and (max-width: 768px){
    width: 55px;
    height: 55px;
}
@media Screen and (max-width: 425px){
    width: 45px;
    height: 45px;
}

`;
export const Button = styled.div`
width: 150px;
height: 30px;
padding: 7px 30px;
background-color: #1441A3;
text-align: center;
color: white;
border-radius: 3px;
font-size: 18px;
cursor: pointer;
:hover{
    transform: scale(1.05);
}
transition: ease-in-out 1s;

@media Screen and (max-width: 768px){
    width: 120px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

`;
export const Timer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
