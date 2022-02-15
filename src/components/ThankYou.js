import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Jumbotron from 'react-bootstrap/Jumbotron'


const Styled = styled.div`
    .thank{
        text-align: center;
        font-family: 'Omnes';
        color: #42b549;
        font-weight: bolder;
        font-size: 1.5rem;        
    }`;


export const ThankYou = (props) => {
    const msg = props.location.state.msg.thankYouMsg;
    //console.log(msg)
    return (
        <Styled>
            <Helmet>
                <title>Ticket</title>
                <meta
                    name="description"
                    content="We would love to hear from you. Tell us about the latest vegan burger menu   "
                />
                <meta
                    name="author"
                    content="Dhairya DOshi"
                />
                <meta
                    name="keywords"
                    content="Organic, Burger, UAE, Bareburger, order online, feedback"
                />
            </Helmet>
            <Jumbotron>
                <h1 className="display-3">Thank You</h1>
                <hr className="line" />
                <div className='thank'> {msg} </div>
            </Jumbotron>
        </Styled>
    )
}