import React from 'react';
import {
    Container, Wrapper, Line, H1
} from './Hero1Style';

const Hero1 = () => {
  return (
    <Container>
        <Wrapper>
            <H1>Highlights: </H1> 
            {/* <br/> */}
            <Line></Line>
            <H1>Klassisch Football Club's <br/>  New Training Center</H1>
        </Wrapper>
    </Container>
  )
}

export default Hero1;