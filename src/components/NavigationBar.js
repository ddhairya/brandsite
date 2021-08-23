import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'
import navlogo from '../assets/images/menu.png'
import brandlogo from '../assets/images/logo.png'
import fb from '../assets/images/f.png'
import tweet from '../assets/images/t.png'
import insta from '../assets/images/i.png'
import ml from '../assets/images/mail.png'
import {Link} from 'react-router-dom'



const Styles = styled.div`
    .navbar {
        background-color: #ffce02;
        padding: 1rem;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: black;
        font-family: Oswald;
        text-shadow: 0px 0px 0px black;        
        -webkit-text-stroke: black;

    
        &:hover{
        color: white;
        }
    }

    .navbar-brand img{
       
        height: 64px;
    }

    .navbar-nav {
        padding-left:40px;
    }

    .navbar-nav .nav-link{
        padding-right: 10px;
        font-size: 110%;
        padding-bottom:0.5rem;

        @media(min-width:1025px){
            font-size: 150%
        }
        
    }

    .navbar-toggler{
        border-color: black;
        border-width: medium;
        
    }

    .navbar-toggler-icon{
        background-image: url(${navlogo})
    }

    .socialIcon{
        padding-left:0.5rem;
        padding-right:0.5rem;
        @media(min-width:300px) and (max-width:1200px){
            padding:1.2rem;
        }
    }

    .ml{
        padding-top:1rem;
    }

    

`;

const SocialMediaIcon = props => {
    const simg = props.img
    const salt = props.alt
    const shref = props.href
    return(
        <a className='socialIcon' href={shref}>
            <Image src = {simg} alt = {salt} height = '32px'/>    
        </a>
        
    )
    
}

const NavLink = props => {
    const navHref = props.href
    const navTitle = props.title
    const navKey = props.eventKey
    return(
        
        <Nav.Link className='nav-link' eventKey={navKey} as = {Link} to={navHref}>{navTitle}</Nav.Link>
    )
}

export const Navigationbar = () => (
    <Styles>
    <Navbar collapseOnSelect fixed='top' expand="lg">
        <Navbar.Brand href="/"><img src={brandlogo} alt="Bareburger" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            
            <NavLink
                href="/order"
                title = "Order Online"
                eventKey = "1"
            />
            <NavLink
                href="/location"
                title = "Locations"
                eventKey="2"
            />
            <NavLink
                href="/feedback"
                title = "Feedback"
                eventKey="6"
            />
            <NavLink
                href="/story"
                title = "Our Story"
                eventKey="3"
            />
           
            <NavLink
                href="/faq"
                title = "FAQ"
                eventKey="4"
            />
            <NavLink
                href="/menu"
                title = "Our Menu"
                eventKey="5"
            />
           
            
            
            
        </Nav>
        <Nav className="ml">
            
            <div >
                <SocialMediaIcon 
                    img = {tweet} 
                    alt="twiter"
                    href="https://vm.tiktok.com/JdhDDWn/"
                />
                <SocialMediaIcon 
                    img = {fb} 
                    alt="facebook"
                    href="https://www.facebook.com/bareburgeruae/"
                />
                <SocialMediaIcon 
                    img = {insta} 
                    alt="instagram"
                    href="https://www.instagram.com/bareburger_uae/"
                />
                <SocialMediaIcon 
                    img = {ml} 
                    alt="mail"
                    href="mailto:bareburger_uae@bareburger.com"
                />


                
            </div>
            
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Styles>
)

//export default Navigationbar