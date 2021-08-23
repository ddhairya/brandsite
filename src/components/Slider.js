import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
//import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import b1 from '../assets/images/b1.jpg'
//import b2 from '../assets/images/b2.jpg'
import b3 from '../assets/images/b3.jpg'




// carousel-inner img is used for the image view 100 vh will give 100% view point based on the device.
// carousel-inner is the container for the slider
// carousel-caption is used for the text
// carousel-indicators is used for displaying dot based on no of images in the slides

const Styles = styled.div`

    .SliderImage{
         width: 100%; 
         height: 100vh; 
         background-size: cover;
         background-position: center;
    }    
    
    .carousel-caption {        
        @media(min-height: 300px) and (max-height: 700px){
            padding-bottom:20vh
        }
        @media(min-height: 600px) and (max-height: 1400px){
            padding-bottom:30vh
        }
        @media(max-width:660px) and @media(max-height:290px){
            padding: 0vh    
        }
    }

    .carousel-indicators {
        padding-bottom: 10vh;
        @media(max-height:290px){
            padding: 0vh            
        }
    }

    .orderbtn{
        
        margin: 3rem;        
        @media  (min-width: 600px) {                
                float: left;
                margin: 1rem;
        }
        @media  (min-width: 900px) {                
            float: left;
            margin: 3rem;
        }
        @media  (min-width: 1000px) {                
            float: left;
            margin: 4rem;
        }
    }
    .menubtn{
        
        margin: 3rem;
        @media  (min-width: 600px) {                
            float: left;
            margin: 1rem;
        }
        @media  (min-width: 900px) {                
            float: left;
            margin: 3rem;
        }
        @media  (min-width: 1000px) {                
            float: left;
            margin: 4rem;
        }
    }

    .Oldmenubtn{
        float:left;
        margin: 2rem;
        @media (max-height: 1400px) and (min-height: 360px) {                
            float: none;
        }
    }
    
    .btn-primary{
        background-color: transparent;
        border-color: black;
        width:10rem;        
        text-align:center;
        -webkit-text-stroke: black;
        -webkit-text-stroke-width: 0px;
        font-family: Oswald;
        background-color: #ffce02;
        color: black;
        text-shadow: 0px 0px 0px black;
        @media(min-width:768px){
            font-size: 2rem;
        }
        @media(min-width:1024px){
            font-size: 2rem;
        }
    }



`;
/*
const test_Styles = styled.div`

    .carousel-inner  {
            
        max-height: 100vh !important;
        @media (min-width: 576px) {            
            max-height: 100vh !important;          
       }
    }

    .carousel-inner img{
        
        max-height: 100vh !important;
        @media (min-width: 576px) {
            
            max-height: 100vh !important;         
       }
        
    }

    .carousel-inner img{
        width: 100%;
        height: 100vh;
    }
    .carousel-caption {
        position: absoulte;
        top:50%;
    }
`;
*/

const SlideImage = props => {
    const simg = props.img
    //const salt = props.alt
    //console.log(simg)
    return(
        <div className="SliderImage" style={{backgroundImage:`url(${simg})`}}>
                
        </div>     
        
    )
}


const ImageCaption = () => (
    <Carousel.Caption>
        <div className='btn ' >
            <div> &nbsp; </div>
            <div className=' orderbtn ' >
            <a href="https://order.radyes.co/bareburger">
                <button className="btn btn-primary">
                    Order Now
                </button>
            </a>

            </div>
            <div className=' menubtn '>
            <a href="https://bareburger.redro.menu/">
                <button className="btn btn-primary">
                    Our Menu
                </button>
            </a>

            </div>
            
        
            
        </div>
        
        
    </Carousel.Caption>
)



export const Slider = () => (
    <Styles>
    <Carousel  >
        <Carousel.Item>
                    
            <SlideImage img = {b1} alt = "First Slide"/>
            <ImageCaption/>

        </Carousel.Item>
        
        <Carousel.Item>
            
            <SlideImage img = {b3} alt = "Third Slide"/>
            <ImageCaption/>
           
        </Carousel.Item>
    </Carousel>
    
    </Styles>

)