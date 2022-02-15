import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import cw1 from '../assets/images/cw1.png'
import cw2 from '../assets/images/cw2.png'
import cw3 from '../assets/images/cw3.png'
import lm1 from '../assets/images/lm1.png'
import lm2 from '../assets/images/lm2.png'
import lm3 from '../assets/images/lm3.png'
import mm1 from '../assets/images/mm1.png'
import mm2 from '../assets/images/mm2.png'
import mm3 from '../assets/images/mm3.png'
import tp1 from '../assets/images/tp1.png'
import tp2 from '../assets/images/tp2.png'
import tp3 from '../assets/images/tp3.png'
import cl from '../assets/images/call.png'
import ml from '../assets/images/mail.png'
import CarouselItem from 'react-bootstrap/CarouselItem'
import Image from 'react-bootstrap/Image'

const Styles = styled.div`
    
    .card{
        margin-bottom:1rem;
        background-color: transparent;
    }
    .card-header{
        background-color: transparent;
    }
    .SliderImage{
        width: 100%; 
        height: 400px; 
        background-size: cover;
        background-position: center;
    }
    .disLocTitte{
        font-family: Adam;
    } 
    .card-body{
       padding: 1rem 0rem 1rem 0rem;
    }
    .cardLocButton{
       padding-right:1rem;
    } 
    .contactIcon{
       padding-reight:1rem;
       padding-left:1rem;
       height:24px;
    }`;


const SlideImage = props => {
    const simg = props.img
    const salt = props.alt
    return (
        <div key={salt} className="SliderImage" style={{ backgroundImage: `url(${simg})` }} />
    )
}

const CardContent = props => {
    const cardHeader = props.header
    const cardTitle = props.title
    const cardAddress = props.address
    const cardPhone = props.phone
    const cardTime = props.time
    const cardEmail = props.email
    const cardLoc = props.location
    const cardOrderLoc = props.orderloc
    const simg1 = props.img1
    const simg2 = props.img2
    const simg3 = props.img3
    return (
        <div className='col-md-6 text-center'>
            <Card key={cardTitle} >
                <Card.Header as="h5">{cardHeader}</Card.Header>
                <Card.Body key={cardTitle}>
                    <Card.Title className='disLocTitte'>{cardTitle}</Card.Title>

                    <Card.Text >{cardTime} </Card.Text>
                    <Card.Text>
                        <a href={cardPhone}>
                            <Image className='contactIcon' src={cl} alt="call" /></a>
                        <a href={cardEmail}> <Image className='contactIcon' src={ml} alt="mail" /> </a>
                    </Card.Text>
                    <Carousel key={cardTitle} >
                        <CarouselItem>
                            <SlideImage img={simg1} alt="First Slide" />
                        </CarouselItem>
                        <CarouselItem>
                            <SlideImage img={simg2} alt="Second Slide" />
                        </CarouselItem>
                        <CarouselItem>
                            <SlideImage img={simg3} alt="Third Slide" />
                        </CarouselItem>
                    </Carousel>

                    <Card.Text> {cardAddress} </Card.Text>
                    <Card.Text>
                        <a className="cardLocButton" href={cardLoc}>
                            <Button variant="primary">Click to go</Button>
                        </a>
                        <a className="cardLocButton" href={cardOrderLoc}>
                            <Button variant="primary">Order Online</Button>
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}


export const CardLocation = () => (
    <Styles>
        <Jumbotron >
            <h1 className="display-3">Locations</h1>
            <br />
            <div className='row padding'>
                <CardContent
                    key="1"
                    header='Dubai '
                    title='Bareburger City Walk'
                    address='City Walk Boulevard, Al Mustagbal Street, Building 6A, Dubai'
                    phone='tel:+97143854282'
                    email='mailto:bareburger_cw@alahliagroup.com'
                    time={["Daily from   11:30AM – 11:00PM", <br key="1" />, "\u00A0"]}
                    location='https://goo.gl/maps/BF2YLydJe632'
                    orderloc='https://order.radyes.co/bareburger_al_wasl'
                    img1={cw1}
                    img2={cw2}
                    img3={cw3} />
                <CardContent
                    key="2"
                    header='Dubai '
                    title='Bareburger La Mer '
                    address='Shop S 13, South, La Mer, Jumeirah 1, Dubai'
                    phone='tel:+97143437110'
                    email='mailto:bareburger_cw@alahliagroup.com'
                    time={["Sat to Wed 12:00AM – 10:00PM", <br key="2" />, "Thurs & Fri    12:00AM – 11:00PM"]}
                    location='https://goo.gl/maps/NEMpYM9Erv52'
                    orderloc='https://bareburger.ae/order'
                    img1={lm1}
                    img2={lm2}
                    img3={lm3} />
                <CardContent
                    key="3"
                    header='Abu Dhabi '
                    title='Bareburger Marina Mall'
                    address='Marina Mall, Ground floor, Abu Dhabi'
                    phone='tel:+97124411723'
                    email='mailto:bareburger_mm@alahliagroup.com'
                    time={["Sat to Wed 11:30AM – 10:00PM", <br key="3" />, "Thurs & Fri    11:30AM – 11:00PM"]}
                    location='https://goo.gl/maps/C43wFftupi72'
                    orderloc='https://bareburger.ae/order'
                    img1={mm1}
                    img2={mm2}
                    img3={mm3} />
                <CardContent
                    key="4"
                    header='Dubai '
                    title='Bareburger The Pointe'
                    address='The Pointe, Palm Jumeirah, Dubai'
                    phone='tel:+97145575514'
                    email='mailto:bareburger_tp@alahliagroup.com'
                    time={["Sat to Wed 12:00AM – 10:00PM", <br key="4" />, " Thurs & Fri    12:00AM – 11:00PM"]}
                    location='https://goo.gl/maps/A3bzb6BFKs1igBUs6'
                    orderloc='https://order.radyes.co/bareburger_palm_jumeirah'
                    img1={tp1}
                    img2={tp2}
                    img3={tp3} />
            </div>
        </Jumbotron>
    </Styles>



)
