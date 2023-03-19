import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #263238;
/* background-color: #0000FF; */
align-items: center;
margin-top: 30px;
padding: 20px 0;
`;
export const H1 = styled.div`
color: red;
font-weight: bold;
margin: 30px 0;
font-size: 30px;
`;
export const Social = styled.div`
width: 60%;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
margin: 15px 0;
`;
export const Img = styled.div`
/* width: 45px; */
/* height: 45px; */
color: white;
`;
export const Line3 = styled.div`
width: 85%;
display: flex;
justify-content: space-around;
margin: 15px 0;
`;
export const Col1 = styled.div`
width: 35%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
color: white;
font-weight: bold;
@media Screen and (max-width: 425px){
    font-size: 13px;
}
`;
export const Col2 = styled.div`
width: 35%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
color: white;
font-weight: bold;
@media Screen and (max-width: 425px){
    font-size: 13px;
    width: 40%;
}
`;
export const Col3 = styled.div`
width: 35%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
color: white;
font-weight: bold;

@media Screen and (max-width: 425px){
    font-size: 13px;
}
`;
export const Line4 = styled.div`
width: 45%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-top: 20px;
line-height: 25px;
`;

export const P = styled.div`
color: white;
font-weight: 500;
font-size: 13px;
`;
export const H2 = styled.div`
color: red;
font-weight: bold;
margin: 10px 0;
`;
export const Input = styled.input`
    width: 400px;
    height: 35px;
    border: 1px solid #003C58;
    outline: none;
    border-radius: 2.5px;
    margin: 10px 0;
    padding: 0 10px;

    @media Screen and (max-width: 768px){
        width: 300px;
    }
    @media SCreen and (max-width: 375px){
        width: 270px
    }
`;
export const Button = styled.div`
width: 30%;
background-color: blue;
margin-left: 15px;
padding: 5px 10px;
border-radius: 2px;
color: white;
text-align: center;
font-weight: 500;
font-size: 16px;
    :hover{
        cursor: pointer;
        transition: all 400ms;
    }

    @media SCreen and (max-width: 375px){
        width: 55%;
    }
`;
