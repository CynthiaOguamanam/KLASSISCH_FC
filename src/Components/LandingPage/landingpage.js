import React from 'react'
import Hero1 from './Hero1/Hero1';
import Hero2 from './Hero2/Hero2';
import styled from 'styled-components'
import Hero3 from './Hero3/Hero3';
import Hero4 from './Hero4/Hero4';
import SlideHero from './SlideHero/SlideHero';
import Hero5 from './Hero5/Hero5';

const Landingpage = () => {
  return (
    <Container>
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <SlideHero/>
      <Hero5/>
      <Hero4/>
    </Container>
  )
}

export default Landingpage;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
`;