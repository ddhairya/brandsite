import React from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import {Helmet} from 'react-helmet'
import UserProfile from './components/UserProfile'
//import Table from 'react-bootstrap/Table'
import {TableRows} from './components/TableRows'
import { Redirect } from 'react-router-dom'

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
    table {
        border-spacing: 0;
        border: 1px solid black;
        width: 100%;
      }
`;

export class TicketData extends React.Component {
    render(){
        return(        
            <Styles>           
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
                    <h1 className="display-3">Maintenance Request Data</h1>
                    <hr className="line"/>                
                    <Form className = 'feed'>  
                        {   
                            UserProfile.getSession() && 
                            <>
                                {/*<Table striped bordered hover>
                                     <thead>
                                        <tr>
                                        <th>ID</th>
                                        <th>Locatoin</th>
                                        <th>Equipment</th>
                                        <th>Date</th>
                                        <th>Priority</th>
                                        <th>Status</th>                                
                                        </tr>
                                    </thead> */}
                                    <TableRows />
                                {/* </Table> */}
                            </>
                        }
                        {
                            !UserProfile.getSession() && <Redirect to="./authenticate" />    
                        } 
                    </Form>
                </Jumbotron>
            </Styles>
        )
    }
}