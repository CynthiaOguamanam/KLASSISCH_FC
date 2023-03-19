import React from 'react';
import styled from 'styled-components';
import pic from '../../Assets/DAY 2/DS1.JPG'
import {AiFillCalendar} from 'react-icons/ai'

const Card = ({title, desc, img}) => {
    return(
        <CardDiv>
             <Top src={img}/>
          <Bottom>
            <H3> <AiFillCalendar/>{title}</H3>
            <H5>{desc}</H5>
          </Bottom>
        </CardDiv>
    )
};

export default Card;

const CardDiv = styled.div`
width: 450px;
height: 350px;
background-color: white;
border-top: 3px solid #1441A3;
box-shadow:   rgb(0 0 0 / 30%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px;
border-radius: 4px;
:hover{
transform: scale(1.01);
cursor:  pointer;
}
transition: all 500ms;
@media Screen and (max-width: 7668px){
margin: 25px 0;
}
`;

const Top = styled.img`
width: 100%;
height: 70%;
object-fit: cover;
position: center;
`;

const Bottom = styled.div`
line-height: 15px;
/* background-color: red; */
width: 80%;
margin-left: 20px;
`;

const H3 = styled.h3`
color: red;
display: flex;
align-items: center;
`;

const H5 = styled.h5`
color: blue;
`;