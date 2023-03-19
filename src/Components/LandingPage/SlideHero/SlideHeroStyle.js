import styled from 'styled-components';

export const Container = styled.div`
width: 95%;
display: flex;
flex-direction: column;
height: auto;
justify-content: center;
align-items: center;
margin-top: 70px;
`;


export const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
/* background-color: green; */

@media Screen and (max-width: 768px){
    flex-wrap: wrap;

}
`;
export const Card = styled.div`
width: 30%;
height: 260px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow:   rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;
background-color: white;
margin: 10px;

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 45%;
}
@media Screen and (max-width: 425px){
    flex-wrap: wrap;
    width: 95%
}

`;

export const Title = styled.div`
margin: 30px;
font-size: 20px;
font-weight: bold;
color: #263238;
`;
export const Teams = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: auto;
`;

export const LogoHold = styled.div`
width :50%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Logo = styled.img`
width: 85px;
height: 85px;
`;
export const Name = styled.i`
color: red;
font-family: 20px;
font-weight: bold;
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


`;
export const Timer = styled.div`
color: blue;
font-weight: 500;
`;

