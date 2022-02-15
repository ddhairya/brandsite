import React, { useEffect } from 'react'
import { Slider } from './components/Slider'
import ReactGa from 'react-ga'
import { Helmet } from 'react-helmet'


export const Home = () => {
    useEffect(() => {
        ReactGa.initialize('UA-169233297-1')
        ReactGa.pageview('/Home')
    }, [])

    return (
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
            <Slider />
        </>

    )
}

