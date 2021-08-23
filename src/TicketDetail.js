import React from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import UserProfile from './components/UserProfile'
import queryString from 'query-string'
import {TableRowData} from './components/TableRowData'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css"
import {status, user} from './components/CompanyInfo'
import {SelectOption} from './components/SelectOption'
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

    .tick{

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



export class TicketDetail extends React.Component {
    
    //ticket_detail_api = process.env.REACT_APP_API_TEST_TICKET_ROW_DETAIL_KEY
    ticket_detail_api = process.env.REACT_APP_API_LIVE_TICKET_ROW_DETAIL_KEY

    //ticket_response_api = process.env.REACT_APP_API_TEST_TICKET_RESPONSE_KEY
    ticket_response_api = process.env.REACT_APP_API_LIVE_TICKET_RESPONSE_KEY

    state = {
        data: [],
        redirect: false,
        t_id: 0,
        visit: '',
        comp: ''
    }
    
    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        //console.log(values.id)
        //console.log(UserProfile.getSession());
        this.setState({t_id:values.id})
        
        axios.get(this.ticket_detail_api,{
            params: {
              id: values.id
            }
          })
            .then(res => {
                const rows = res.data;
                //console.log(rows);
                this.setState({data: rows})
                this.setState({comp:this.state.data[0].t_c_name})
                //console.log(this.state.data);
            }).catch( error => console.log(error.response)); 
    }

    DateSelect = (dat) => {
        const daterawformate = [dat]
        //console.log(date1[0]._d)
        const date = new Date(daterawformate[0]._d)
        const yr = date.getFullYear();
        const mnth = ("0" + (date.getMonth()+1)).slice(-2);
        const day  = ("0" + date.getDate()).slice(-2);
        const hours  = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const vist  = yr + '-' + mnth + '-' + day + ' ' + hours + ':' + minutes + ':00'
        this.setState({visit:vist})        
        // console.log(vist)
        // console.log(this.state.id)
        // console.log(this.state.comp)
        //console.log(this.state.data[0].t_c_name)
    }

    UserSelect = event => console.log(event.target.name)

    Submit = event => {
        event.preventDefault();

        //console.log(this.state.visit)

        //console.log(event.target.user.value)
        
        const formData = new FormData();
        
        formData.append('visit',this.state.visit)
        formData.append('user',event.target.user.value)
        formData.append('desc',event.target.desc.value)
        formData.append('solt',event.target.solt.value)
        formData.append('status',event.target.status.value)
        formData.append('id',this.state.t_id)
        formData.append('comp',this.state.comp)
        //console.log(formData)

        axios({
            method: "post",
            url: this.ticket_response_api,
            headers: { "content-type": "multipart/form-data"},
            data: formData
          })
          .then(response => {              
              //console.log(response.data)
              this.setState({redirect:true})                           
            }
            )
          .catch( error => console.log(error.response));
    }
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
                    <h1 className="display-3">Maintenance Request Detail</h1>
                    <hr className="line"/>                
                    <Form className = 'tick' onSubmit={this.Submit}>
                        {
                            UserProfile.getSession() && 
                            <>
                                <TableRowData data = {this.state.data} />
                                <hr className="line"/>
                                <Form.Group as = {Row} id="datetime" controlId="formsDateTime">                
                                    <Col sm="4">
                                        <Form.Label>Visit Date n Time*</Form.Label>
                                    </Col>
                                    <Col sm="6">
                                    <Datetime onChange = {this.DateSelect} />                                        
                                    </Col>               
                                </Form.Group>
                                <Form.Group as = {Row} id="dropdownuser" controlId="formSelectUser">                
                                    <Col sm="4">
                                        <Form.Label>Assign To*</Form.Label>
                                    </Col>
                                    <Col sm="6">
                                    <Form.Control name='user' as="select" required onChange={this.UserSelect}>
                                        <SelectOption arr = {user} />
                                    </Form.Control>                                        
                                    </Col>               
                                </Form.Group>
                                <Form.Group as = {Row} controlId="formBasicDesc">                
                                    <Col sm="4">
                                        <Form.Label>Description* </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control name="desc"  as="textarea" rows="2" required placeholder="Enter Description" />
                                    </Col>               
                                </Form.Group>
                                <Form.Group as = {Row} controlId="formBasicSolt">                
                                    <Col sm="4">
                                        <Form.Label>Solution* </Form.Label>
                                    </Col>
                                    <Col sm="6">
                                        <Form.Control name="solt"  as="textarea" rows="2" required placeholder="Enter Solution" />
                                    </Col>               
                                </Form.Group>
                                <Form.Group as = {Row} id="dropdownuser" controlId="formSelectStatus">                
                                    <Col sm="4">
                                        <Form.Label>Status*</Form.Label>
                                    </Col>
                                    <Col sm="6">
                                    <Form.Control name='status' as="select" required onChange={this.StatusSelect}>
                                        <SelectOption arr = {status} />
                                    </Form.Control>
                                        
                                    </Col>               
                                </Form.Group>
                                <hr className="line"/>
                                <div className="sbut">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div> 
                                {this.state.redirect && <Redirect to="/ticketdata" /> }
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