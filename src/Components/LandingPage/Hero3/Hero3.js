import React from 'react';
import {
    Container, Wrapper, Title, Mid,Timer, ScoreHold, Logo
} from './Hero3Style';
import logo2 from "../../Assets/logo2.png"

const Hero3 = () => {
  return (
    <Container>
        <Wrapper>
           <Timer>
           <Title>{new Date().getDate()}/ </Title>
            <Title>{new Date().getMonth()}/</Title>
            <Title>{new Date().getFullYear()}</Title>
           </Timer>
           <b style={{color: "#263238"}}>Kicks off at exaclty 16 : 30pm</b>
            <Mid>
            <ScoreHold>
            <Logo src={logo2} alt='logo'/>
            <i>Klassisch FA</i>
            </ScoreHold>
            <b style={{color: "red"}}>VS</b>
            <ScoreHold>
            <Logo src={logo2} alt='logo'/>
            <i>Klassisch FA</i>
            </ScoreHold>
            </Mid>
        </Wrapper>
    </Container>
  )
}

export default Hero3