import React, {useEffect} from 'react'
//import React, {useEffect, lazy, Suspense} from 'react'
import {Slider}  from './components/Slider'
import ReactGa from 'react-ga'
import { Helmet } from 'react-helmet'
//const Slider = lazy(()=> import('./components/Slider'))

// carousel-inner img is used for the image view 100 vh will give 100% view point based on the device.
// carousel-inner is the container for the slider
// carousel-caption is used for the text
// carousel-indicators is used for displaying dot based on no of images in the slides
/*

    .carousel-inner img{
        
        max-height: 100vh !important;
    }   
    
    .carousel-caption{
        
        position: fixed;
    }
*/    

export const Home = () => {
    useEffect(()=>{
        ReactGa.initialize('UA-169233297-1')
    ReactGa.pageview('/Home')
    },[])
    
    return(
        <>
            <Helmet>
                <title>UAE - Bareburger </title>
                <meta 
                    name="description" 
                    content="All you carnivorous, vegans and gluten-haters can come hang at our place and let us serve you all the organic and sustainable burgers, shakes and salads"
                />
                <meta 
                    name="author" 
                    content="Dhairya DOshi"
                />
                <meta
                    name="keywords"
                    content="Organic, Burger, UAE, Bareburger"
                />

            </Helmet>
            <Slider/>
        </>
        
    )
}

    