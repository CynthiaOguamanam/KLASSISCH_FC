import React from 'react';
import Onecard from '../LandingPage/Hero2/OneCard';
import NewsCard from '../LandingPage/Hero2/NewsCard';
import {
  Container, Wrapper, Left, Right, One, Two, Line, Latest, Button
} from './NewsStyle'
import { AiFillPicture, AiFillTrophy, AiOutlineArrowRight, AiOutlineVideoCamera } from 'react-icons/ai';
import a2 from '../Assets/DAY 2/keep.JPG'
import pic from '../Assets/DAY 2/foot2.JPG'
import avatar2 from '../Assets/DAY 1/a3.JPG'
import avatar3 from '../Assets/DAY 1/a4.JPG'
import avatar4 from '../Assets/DAY 1/D2.JPG'
import avat from '../Assets/DAY 2/1.JPG'



const News = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
           <div style={{marginTop: "20px"}}>
           <Onecard image={avat} title='KLASSISCH FC MADE IT TO THE TOP'/>
           </div>
           <div style={{marginTop: "20px"}}>
           <Onecard image={avatar2} title='NEW: KLASSISCH FC ICONS COLLECTION '/>
           </div>
           <div style={{marginTop: "20px"}}>
           <Onecard image={avatar3} title='KLASSISCH FC MADE IT TO THE TOP'/>
           </div>
           <div style={{marginTop: "20px"}}>
           <Onecard image={avatar4} title='NEW: KLASSISCH FC ICONS COLLECTION '/>
           </div>
        </Left>
        <Right>
          <Latest>
          <One>
            <h1 style={{color: "#263238"}}>Latest News</h1>
            <Line></Line>
          </One>
          <Two>
            <AiFillTrophy/>
            <p style={{width: "90%"}}>Country Cup Highlights: KFC Men 4-0 JCFC</p>
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
            <p style={{width: "90%"}}>Country Cup Highlights: KFC Men 4-0 JCFC</p>
          </Two>
          <Button>See Full List</Button>
        </Latest>
        <NewsCard img={a2} title='KFC goal keeper beats the record of best goal keeper state championship 2022!!!'/>
        <NewsCard img={pic} title='Training get more rigorous as team has got more matches to play' />
        <Latest>
          <One>
            <h1 style={{color: "#263238"}}>Latest News</h1>
            <Line></Line>
          </One>
          <Two>
            <AiFillTrophy/>
            <p style={{width: "90%"}}>Country Cup Highlights: KFC Men 4-0 JCFC</p>
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
            <p style={{width: "90%"}}>Country Cup Highlights: KFC Men 4-0 JCFC</p>
          </Two>
          <Button to='/news'>See Full List</Button>
        </Latest>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default News