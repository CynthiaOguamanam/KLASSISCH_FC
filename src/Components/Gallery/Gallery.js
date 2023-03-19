import React from 'react'
import Card from '../LandingPage/Hero2/Card';
import {
  Container, Left, Right, Hold
} from './GalleryStyle';
import pic from '../Assets/DAY 1/D1.JPG'
import pic2 from '../Assets/DAY 2/d.JPG'
import js2 from '../Assets/news1.jpg'
import news1 from '../Assets/news1.jpg'
import news2 from '../Assets/news2.jpg'
import news3 from '../Assets/DAY 1/aa1.JPG'
import news4 from '../Assets/DAY 2/3.JPG'
import news5 from '../Assets/DAY 1/a3.JPG'
import news9 from '../Assets/DAY 1/D1.JPG'
import news7 from '../Assets/news7.jpg'
import news8 from '../Assets/DAY 2/e.JPG'
import news6 from '../Assets/DAY 2/keep2.JPG'
import news10 from '../Assets/DAY 2/i.JPG'
import news11 from '../Assets/DAY 2/keep.JPG'



const Gallery = () => {
  return (
    <>
    <h1>Gallery</h1>
    <Container>
    <Hold>
    <Card img={pic} title='Youth Team' desc='Youth Team is now open to recruiting new youngsters'/>
    <Card img={pic2} title='Klassisch Football Club' desc='Complete team ready for a match'/>
    <Card img={js2} title='Coaching' desc='Coaches and youngsters'/>
    <Card img={news7} title='Friendly Match Negotiation' desc='Coaches and team lead on negotiations'/>
    <Card img={news2} title='Win from League' desc='Happy team waering a tired face after a big win'/>
    <Card img={news3} title='Klassisch Football Club' desc='Team Photo'/>
    <Card img={news5} title='Klassisch Football Club' desc='Training / Fitness exercises'/>
    <Card img={news4} title='Klassisch Football Club' desc='Team Photo'/>
    <Card img={news6} title='Klassisch Football Club' desc='Team Photo'/>
    <Card img={news8} title='Klassisch Football Club' desc='Team training / Fitness exercises'/>
    <Card img={news9} title='Klassisch Football Club' desc='Team Photo'/>
    <Card img={news10} title='Klassisch Football Club' desc='Friendly Match'/>
    <Card img={news11} title='Klassisch Football Club' desc='Explicit goal keeping by goal keeper'/>
    </Hold>
    </Container>
    </>
    
  )
}

export default Gallery;