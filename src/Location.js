import React from 'react'
import { CardLocation } from './components/CardLocation'
import { Helmet } from 'react-helmet'

export const Location = () => (
    <>
        <Helmet>
            <title>Location - Bareburger</title>
            <meta
                name="description"
                content="Find the nearest burger in UAE. We are located at City Walk, La Mer, The Pointe and Marina Mall, serving organic, grass-feed meat, free-range chicken, vegan burgers, milkshakes and salads."
            />
            <meta
                name="author"
                content="Dhairya DOshi"
            />
            <meta
                name="keywords"
                content="Organic, Burger, UAE, Bareburger, Location"
            />

        </Helmet>

        <CardLocation />
    </>


)