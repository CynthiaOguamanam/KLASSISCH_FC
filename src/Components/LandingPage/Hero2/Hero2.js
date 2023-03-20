import React from 'react'
import {
  Container, Left, Right, Wrapper, Div, Latest,
  One, Two, Button, Line
} from './Hero2Style';
import Card from './Card.js'
import NewsCard from './NewsCard.js'
import OneCard from './OneCard.js'
import pic from '../../Assets/DAY 2/foot2.JPG'
import RR from '../../Assets/DAY 2/RR.JPG'
import a1 from '../../Assets/DAY 2/DS2.JPG'
import a2 from '../../Assets/DAY 2/keep.JPG'
import DS3 from '../../Assets/DAY 2/DS1.JPG'
import DS2 from '../../Assets/DAY 2/DS3.JPG'
import { AiFillPicture, AiFillTrophy, AiOutlineArrowRight,AiOutlineVideoCamera } from 'react-icons/ai';


const Hero2 = () => {

  return (
    <Container>
      <Wrapper>
      <Div>
      <Left>
        <Card img={a1} title='Stay Up To Date'  desc='The Best Teams Are Those Bonded by Empathy'/>
        <Card img={a2} title="Fixtures And Result" desc="Under 18's Fixtures Unreleased for 2023/24"/>
      </Left>
      <Left>
        <Card img={DS2} title='Stay Up To Date'  desc='The Academy season takes shape as the calendar is announced for 2023/24.'/>
        <Card img={DS3} title="Fixtures And Result" desc="Under 18's Fixtures Unreleased for 2023/24"/>
      </Left>
      <OneCard image={a1} title='KLASSISCH FA MADE IT TO THE TOP'/>
      </Div>
      <Right>
        <Latest>
          <One>
            <h1 style={{color: "#263238"}}>Latest News</h1>
            <Line></Line>
          </One>
          <Two>
            <AiFillTrophy/>
            <p style={{width: "90%"}}>Country Cup Highlights: KFA Men 4-0 JCFA</p>
          </Two>
          <Two>
            <AiFillPicture/>
            <p style={{width: "90%"}}>24 incredible photos from our Men's Cup</p>
          </Two>
          <Two>
            <AiOutlineVideoCamera/>
            <p style={{width: "90%"}}>Governor truly proud of our victory</p>
          </Two>
          <Two>
            <AiOutlineArrowRight/>
            <p style={{width: "90%"}}>Country Cup Highlights: KFA Men 4-0 JCFA</p>
          </Two>
          <Button  to='/news'>See Full List</Button>
        </Latest>
        <NewsCard img={pic} title= 'Training days increased to 4days in a week (6hrs/day) home or away' />
        <NewsCard img={RR} title= 'Team set for 2023/24 National Football Championship'/>
      </Right>
      </Wrapper>
    </Container>
  )
};

export default Hero2;

