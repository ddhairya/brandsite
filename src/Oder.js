import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import f1 from './assets/images/food/01.jpg'
import f2 from './assets/images/food/02.jpg'
import f3 from './assets/images/food/03.jpg'
import f4 from './assets/images/food/04.jpg'
import f5 from './assets/images/food/05.jpg'
import f6 from './assets/images/food/06.jpg'
import f7 from './assets/images/food/07.jpg'
import f8 from './assets/images/food/08.jpg'
import f9 from './assets/images/food/09.jpg'
import f10 from './assets/images/food/10.jpg'
import f11 from './assets/images/food/11.jpg'
import f12 from './assets/images/food/12.jpg'
import cl from './assets/images/call.png'
import ml from './assets/images/mail.png'
import deliveroo from './assets/images/deliveroo.png'
import talabat from './assets/images/talabat.png'
import zomato from './assets/images/zomato.png'
import CarouselItem from 'react-bootstrap/CarouselItem'
import { Helmet } from 'react-helmet'

const Styles = styled.div`
    
    .card{
        margin-bottom:2rem;
        
        background-color: transparent;

        @media(min-width: 1200px){
            margin: 1rem 5rem 1rem 5rem;
        }        
    }

    .card-header{
        background-color: transparent;
    }

    .SliderImage{
        width: 100%; 
        height: 300px; 
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

   .deliveryButton{
       padding-right:1rem;
       padding-left:1rem;
       height: 64px; 
    }
    .orderDiv{
        height: 64px;
    }`;


const SlideImage = props => {
    const simg = props.img

    return (
        <div className="SliderImage" style={{ backgroundImage: `url(${simg})` }} />
    )
}

const DeliverImage = props => {

    const href2 = props.href2
    const href3 = props.href3
    const href4 = props.href4

    return (
        <>
            <span>

                <a className="cardLocButton" href={href2}>
                    <Image className="deliveryButton" alt="zomato" src={zomato} />
                </a>
            </span>
            <span>
                <a className="cardLocButton" href={href3}>
                    <img className="deliveryButton" alt="deliveroo" src={deliveroo}></img>
                </a>

                <a className="cardLocButton" href={href4}>
                    <img className="deliveryButton" alt="talabat" src={talabat}></img>
                </a>
            </span>
        </>
    )
}

const CardContent = props => {
    const cardHeader = props.header
    const cardTitle = props.title
    const cardPhone = props.phone
    const cardEmail = props.email
    const simg1 = props.img1
    const simg2 = props.img2
    const simg3 = props.img3
    const href1 = props.href1
    const href2 = props.href2
    const href3 = props.href3
    const href4 = props.href4
    return (
        <div className='col-lg-6 text-center'>
            <Card key={cardTitle} >
                <Card.Body>
                    <Card.Title className='disLocTitte'>{cardHeader}- {cardTitle}</Card.Title>
                    <Card.Text>
                        <a href={cardPhone}> <Image className='contactIcon' src={cl} alt="call" /> </a>
                        <a href={cardEmail}> <Image className='contactIcon' src={ml} alt="mail" /> </a>
                    </Card.Text>
                    <Carousel  >
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
                    <br />
                    <Card.Text>
                        <DeliverImage loc={cardTitle} href1={href1} href2={href2} href3={href3} href4={href4} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}



export const Order = () => (
    <Styles id="order">
        <Helmet>
            <title>Online Order - Bareburger</title>
            <meta
                name="description"
                content="Order directly from us to earn points, and enjoy special offers,  discounts and exclusif burger, Ingluding beyond meat"
            />
            <meta
                name="author"
                content="Dhairya DOshi"
            />
            <meta
                name="keywords"
                content="Organic, Burger, UAE, Bareburger, order online"
            />
        </Helmet>

        <Jumbotron >
            <h1 className="display-3">Order Online</h1>
            <br />
            <div className='row padding'>
                <div className='col-lg-6 text-center'>
                    <Card key='Bareburger City Walk'>
                        <Card.Body>
                            <Card.Title className='disLocTitte'>Dubai- Bareburger City Walk</Card.Title>
                            <Card.Text>
                                <a href="tel:+97143854282"> <Image className='contactIcon' src={cl} alt="call" /> </a>
                                <a href="mailto:bareburger_cw@alahliagroup.com"> <Image className='contactIcon' src={ml} alt="mail" /> </a>
                            </Card.Text>
                            <Carousel>
                                <CarouselItem>
                                    <SlideImage img={f1} alt="First Slide" />
                                </CarouselItem>
                                <CarouselItem>
                                    <SlideImage img={f2} alt="Second Slide" />
                                </CarouselItem>
                                <CarouselItem>
                                    <SlideImage img={f3} alt="Third Slide" />
                                </CarouselItem>
                            </Carousel>
                            <br />
                            <Card.Text>
                                <span className="orderDiv">
                                    <a className="cardLocButton" href='https://order.radyes.co/bareburger_al_wasl'>
                                        <Button variant="primary">Order Online</Button>
                                    </a>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-6 text-center'>
                    <Card key='Bareburger The Pointe'>
                        <Card.Body>
                            <Card.Title className='disLocTitte'>Bareburger The Pointe</Card.Title>
                            <Card.Text>
                                <a href="tel:+97145575514"> <Image className='contactIcon' src={cl} alt="call" />  </a>
                                <a href="mailto:bareburger_tp@alahliagroup.com"> <Image className='contactIcon' src={ml} alt="mail" /> </a>
                            </Card.Text>
                            <Carousel>
                                <CarouselItem>
                                    <SlideImage img={f10} alt="First Slide" />
                                </CarouselItem>
                                <CarouselItem>
                                    <SlideImage img={f11} alt="Second Slide" />
                                </CarouselItem>
                                <CarouselItem>
                                    <SlideImage img={f12} alt="Third Slide" />
                                </CarouselItem>
                            </Carousel>
                            <br />
                            <Card.Text>
                                <span className="orderDiv">
                                    <a className="cardLocButton" href='https://order.radyes.co/bareburger_palm_jumeirah'>
                                        <Button variant="primary">Order Online</Button>
                                    </a>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <CardContent
                    key="2"
                    header='Dubai '
                    title='Bareburger La Mer '
                    address='Shop S 13, South, La Mer, Jumeirah 1, Dubai'
                    phone='tel:+97143437110'
                    email='mailto:bareburger_cw@alahliagroup.com'
                    time='Daily from 11:00am – 00:00am'
                    location='https://goo.gl/maps/NEMpYM9Erv52'
                    img1={f4}
                    img2={f5}
                    img3={f6}
                    href2="https://www.zomato.com/dubai/bareburger-jumeirah-1/order"
                    href3="https://deliveroo.ae/menu/dubai/jumeirah-1/bareburger-la-mer?day=today&time=ASAP"
                    href4="https://www.talabat.com/uae/restaurant/20395/bareburger-jumierah-1?aid=1302" />
                <CardContent
                    key="3"
                    header='Abu Dhabi '
                    title='Bareburger Marina Mall'
                    address='Marina Mall, Ground floor, Abu Dhabi'
                    phone='tel:+97124411723'
                    email='mailto:bareburger_mm@alahliagroup.com'
                    time='Daily from 10:00am – 00:00am'
                    location='https://goo.gl/maps/C43wFftupi72'
                    img1={f7}
                    img2={f8}
                    img3={f9}
                    href2="https://www.zomato.com/abudhabi/bareburger-marina-village"
                    href3="https://deliveroo.ae/menu/abu-dhabi/marina-village/bareburger-marina-village?day=today&time=ASAP"
                    href4="" />
            </div>
        </Jumbotron>
    </Styles>
)
