import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'
import v1 from './assets/video/01.mp4'
import { Helmet } from 'react-helmet'

const Styles = styled.div`
    .text-muted{
        text-align: end;
        font-family: 'Adam';
        color: #ffce02 !important;  
    }

    .player-wrapper {
        position: relative;
        padding-top: 56.25% /* Player ratio: 100 / (900 / 430) */
    }
       
    .react-player {
        position: absolute;
        top: 0;
        left: 0;
    }`;

export const Story = () => (
    <Styles id="story">
        <Helmet>
            <title>Story - Bareburger</title>
            <meta
                name="description"
                content="We created a family of farmers & partners to make clean-comfort food for everyone, because better food starts with your full belly."
            />
            <meta
                name="author"
                content="Dhairya DOshi"
            />
            <meta
                name="keywords"
                content="Organic, Burger, UAE, Bareburger, order online, story"
            />
        </Helmet>

        <Jumbotron>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h1 className="display-3">Story</h1>
                <hr></hr>
                <div className="lead">In 2009 we had a very simple vision: let’s create the tastiest

                    burger using local, organic, all natural & sustainable ingredients

                    whenever possible. With that in mind, we opened a small

                    restaurant in our hometown of Queens, NYC. We made the

                    promise to offer our guests a quality of service that made them

                    feel at home and always invited back. Years later, we’re honored

                    to serve clean food to our communities around the globe & to

                    keep our vision as simple as it was when we started. Thank you

                    to all the partners, farmers, producers and distributors that we

                    proudly call friends & family.
                    <br />
                    <br />
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            //url= 'videos/01.mp4'
                            url={v1}
                            width='100%'
                            height='100%'
                            controls={true}
                            playing={true}
                            loop={true}
                        />
                    </div>
                    <br />

                    In 2019, after a decade in this business we took a step back and

                    looked at ourselves as a company - not only at what we created

                    but at the journey we took to get here and how we see our

                    company growing towards the future. Our greatest strength has

                    always been creating a table that offers choices for everyone;

                    with respect for farmers, the environment and mindful sourcing

                    at our core. We now look to the future of food and plant-based

                    proteins are undoubtedly at the forefront of sustainability. Our

                    menu is now half vegan; plant based & more delicious than

                    ever. Because what we eat, is who we are and at Bareburger we

                    celebrate EVERYONE!
                </div>
                <br />
                <div className="text-muted">
                    All copyrights © Al Ahlia Group 2020
                </div>
            </div>
        </Jumbotron>
    </Styles>
)