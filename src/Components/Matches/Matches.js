import React from 'react'
import {
  Container, Top, Title, Players, Logo, Score, Line,
  Middle, Bottom, Foot, ScoreHold, Left, Ball, Right,
  Half, Club, Logo2, Divv, Divv2, Wrapper, News, Latest, Button, Two, One
} from './MatchesStyle';
import pic from '../Assets/DAY 1/1.JPG'
import mid from '../Assets/DAY 1/mid.JPG'
import logo from '../Assets/logo2.png'
import ball from '../Assets/ball.jpg'
import { AiFillClockCircle, AiFillPicture, AiFillTrophy, AiOutlineArrowRight, AiOutlineVideoCamera } from 'react-icons/ai'
import NewsCard from '../LandingPage/Hero2/NewsCard';

const Matches = () => {
  return (
    <Container>
      <Wrapper>
      <Top>
        <Title>
          <p>FA WSL Cup - yesterday</p>
          <p style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}> <AiFillClockCircle/> Full-time</p>
        </Title>
        <Players>
        <ScoreHold>
        <Logo src={logo} alt='logo'/>
        <i>Klassisch FC</i>
        </ScoreHold>
        <Score>3</Score>
        <p>-</p>
        <Score>1</Score>
        <ScoreHold>
        <Logo src={pic} alt='logo'/>
        <i>Joy Cometh FC</i>
        </ScoreHold>
        </Players>
        <h4>Final</h4>
      </Top>
      {/* <Line>line</Line> */}
      <Middle>
        <Left>
          <i>Samuel Ekechi 44'</i>
          <i>Adebayo Kayode 42'</i>
          <i>Hamzat AbdulWasiu 45'</i>
        </Left>
        <AiFillTrophy style={{width: "25px", height: "25px"}}/>
        {/* <Ball src={ball} alt='ball'/> */}
        <Right>
          <i>Igoh Manuel 54'</i>
        </Right>
      </Middle>
      <Bottom>
        <Half>
          <Divv>
          <Club>
            <Logo2 src={logo}/>
            <i>Klassisch FC</i>
          </Club>
          <Club>
            <Logo2 src={ball}/>
            <i>Klassisch FC</i>
          </Club>
          </Divv>
          <Line></Line>
          <Divv2>
           <p>Sun, 22 April</p>
            <p>14: 13</p>
          </Divv2>
        </Half>
        <Half>
        <Divv>
          <Club>
            <Logo2 src={logo}/>
            <i>Klassisch FC</i>
          </Club>
          <Club>
            <Logo2 src={pic}/>
            <i>Klassisch FC</i>
          </Club>
          </Divv>
          <Line></Line>
          <Divv2>
           <p>Wed, 8 April</p>
            <p>20: 13</p>
          </Divv2>
        </Half>
      </Bottom>
      <Foot>
        <i>All times are in West African Standard Time</i>
        <i>FeedBack</i>
      </Foot>
      </Wrapper>
      <News>
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
        <NewsCard img={mid} title='Joy Cometh FC Kicking hard against Klassisch FC: Still Solid'/>
      </News>
    </Container>
  )
}

export default Matches;