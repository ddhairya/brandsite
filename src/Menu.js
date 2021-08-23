import React from 'react'
import {Helmet} from 'react-helmet'
import { Redirect } from 'react-router-dom'
//import {Slider} from './components/Slider'

export const Menu = () => { 
    //window.location.replace('https://bareburger.redro.menu/'); 
    return (
        <>
            <Helmet>
                    <title>Menu - Bareburger</title>
                    <meta 
                        name="description" 
                        content="Check out our burger and salad menu.  We serve organic, grass-feed meat, free-range chicken, vegan burgers, milkshakes and salads"
                    />
                    <meta 
                        name="author" 
                        content="Dhairya DOshi"
                    />
                    <meta
                        name="keywords"
                        content="Organic, Burger, UAE, Bareburger, order online, Menu, Salad"
                    />
            </Helmet>
            <Redirect to="./" />
        </>    
    )
}