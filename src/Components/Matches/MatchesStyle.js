import styled from "styled-components";

export const Container = styled.div`
width: 90%;
height: auto;
display: flex;
justify-content: space-around;
margin-top: 160px;
margin-left : 100px;

@media Screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    
}
`;

export const Wrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
@media Screen and (max-width: 768px){
    width: 90%;
    align-items: center;
}
@media Screen and (max-width: 425px){
    width: 80%;
    align-self: center;
}
`;
export const Top = styled.div`
width: 59.85%;
background-color: white;
display: flex;
flex-direction: column;
margin-top: 50px;
padding: 0 20px;
border: 1.5px solid #1441A3;
p{
    text-align: center;
}
h4{
    text-align: center;
    color: #263238;
}

@media Screen and (max-width: 768px){
    width: 80%;
}

`;
export const Title = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 16px;
font-weight: 500;
color: #263238;

`;
export const Players = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;

p{
    font-size: 30px;
    color: #263238;
}
`;

export const ScoreHold = styled.div`
width: 27%;
display: flex;
flex-direction:column ;
align-items: center;
line-height: 20px;

i{
    font-size: 22px;
    font-weight: 400;
    color: #263238;

}

@media Screen and (max-width: 425px){
    i{
        font-size: 15px;
    }
}

`;
export const Logo = styled.img`
width: 125px;
height: 125px;

@media SCreen and (max-width: 425px){
    width: 85px;
    height: 85px;
}
`;
export const Logo2 = styled.img`
width: 50px;
height: 50px;

@media Screen and (max-width: 425px){
    width: 30px;
    height: 30px;
}

`;
export const Score = styled.div`
font-size: 50px;
font-weight: bold;
color: red;

@media Screen and (max-width: 425px){
    font-size: 40px;
}
`;
export const Line = styled.div`
width: 1px;
height: 70%;
background-color: #1441A3;
align-self: center;
margin-right: 30px;
`;
export const Middle = styled.div`
width: 60.65%;
background-color: white;
display: flex;
justify-content: space-between;
padding: 0 20px;
border: 1.5px solid #1441A3;
padding: 15px;

@media Screen and (max-width: 768px){
    width: 81.5%;
}
@media Screen and (max-width: 425px){
    width: 83%;
}

`;
export const Half = styled.div`
width: 50%;
background-color: white;
display: flex;
justify-content: space-between;
padding: 0 20px;
border: 1.5px solid #1441A3;
padding: 15px;



`;
export const Ball =styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
object-fit: cover;
`;
export const News = styled.div`
width: 20%;
display: flex;
flex-direction: column;
margin-right: 60px;

@media Screen and (max-width: 768px){
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

}
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
export const Button = styled.div`
width: 77%;
background-color: blue;
margin-left: 15px;
padding: 5px 10px;
border-radius: 2px;
color: white;
text-align: center;
font-weight: 500;
font-size: 16px;
`;
export const One = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 15px;
line-height: 20px;
margin-bottom: 15px;
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
export const Right =styled.div``;
export const Bottom = styled.div`
width: 63.2%;
display: flex;
justify-content: space-between;

@media Screen and (max-width: 768px){
    width: 86%;
}
@media Screen and (max-width: 425px){
    width: 73.6%;
    margin-right: 64.5px;
}
@media Screen and (max-width: 375px){
    width: 72.4%;
    margin-right: 64.5px;
}
@media Screen and (max-width: 320px){
    width: 70.2%;
    margin-right: 64.5px;
}

`;
export const Club = styled.div`
width :50%;
/* background-color: darkkhaki; */
display: flex;
flex-direction: column;
justify-content: center;
margin: 5px;
`;

export const Divv = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
`;
export const Divv2 = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: rosybrown; */
margin-left: 40px;

@media Screen and (max-width: 425px){
    margin-left: 0px;
}
`;
export const Left = styled.div`
display: flex;
flex-direction: column;
`;
export const Foot = styled.div`
width: 60.65%;
background-color: white;
display: flex;
justify-content: space-between;
padding: 0 20px;
border: 1.5px solid #1441A3;
padding: 15px;

@media Screen and (max-width: 768px){
    width: 81.5%;
}
@media Screen and (max-width: 425px){
    width: 83%;
}

`;


