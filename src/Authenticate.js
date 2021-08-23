import React, { useState } from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import { Redirect } from 'react-router-dom'
import UserProfile from './components/UserProfile'

const Styles = styled.div`
    .rangeValueR{
        text-align:right;
        font-size:smaller;

        @media(max-width:720px){
            text-align:left;
        }
    }
    .rangeValueL{
        text-align:left;
        font-size:smaller;
        @media(max-width:720px){
            text-align:right;
        }
    }

    .line{
        margin: 2rem;
    }

    .btn-group, .btn-group-vertical{

        display: inline-flex;

        @media(min-width: 300px) and (max-width: 720px){
            display: inline-block;
        }        
    }

    .feed{

        @media(min-width: 720px) {
            margin: 0rem 3rem;
        }
        @media(min-width: 1025px) {
            margin: 0rem 10rem;
        }
    }
    
    .sbut {
        text-align: center;
        margin:2rem;
    }
    
`;

export const Login = () => {
    //const ticket_auth_api = process.env.REACT_APP_API_TEST_TICKET_AUTH_KEY;
    const ticket_auth_api = process.env.REACT_APP_API_LIVE_TICKET_AUTH_KEY;
    //console.log(ticket_auth_api)
    const [thankYou,setThankYou] = useState(false);

    const submit = (event) =>{
        event.preventDefault();
        
        const formData = new FormData();

        formData.append('username',event.target.username.value)
        formData.append('password',event.target.password.value)

        // console.log(formData)

        axios({
            method: "post",
            url: ticket_auth_api,
            headers: { "content-type": "multipart/form-data"},
            data: formData
          })
          .then(response => {              
              //console.log(UserProfile.getName());
              if(response.data !== ""){
                UserProfile.setName(response.data, true);
                setThankYou(true)
              }              
            //   console.log(UserProfile.getName());
            //   console.log(UserProfile.getSession());    
            }).catch( error => console.log(error.response));
    }

    return(        
        <Styles>
        
                <Helmet>
                    <title>Authenticate</title>
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
                <h1 className="display-3">Authenticate</h1>
                <hr className="line"/>
                
                <Form className = 'feed' onSubmit={submit}>            
                
                    <Form.Group as = {Row} controlId="formBasicName">                
                            <Col sm="4">
                                <Form.Label>Username</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control name="username"  type="text" placeholder="Enter your email" />
                            </Col>               
                    </Form.Group>
                    <Form.Group as = {Row} controlId="formBasicEmail">                
                            <Col sm="4">
                                <Form.Label>Password</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control name="password"  type="password" placeholder="Enter your password" />
                            </Col>               
                    </Form.Group>
                    <hr className="line"/>                
                    <div className="sbut">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>  
                    <div>
                        {
                            thankYou &&  <Redirect to="./ticketdata" />                   
                        }
                    </div>   
                </Form>
            </Jumbotron>
        </Styles>
    )
}