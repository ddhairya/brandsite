import React, { useState } from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { company, priority } from './components/CompanyInfo'
import { Redirect } from 'react-router-dom'

import { SelectOption } from './components/SelectOption'

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
    }`;

export const Ticket = () => {
    // const ticket_loc_api = process.env.REACT_APP_API_TEST_TICKET_LOC_KEY
    // const ticket_api = process.env.REACT_APP_API_TEST_TICKET_KEY    
    const ticket_loc_api = process.env.REACT_APP_API_LIVE_TICKET_LOC_KEY
    const ticket_api = process.env.REACT_APP_API_LIVE_TICKET_KEY

    const [thankYou, setThankYou] = useState(false)
    const [location, setLoction] = useState([])
    const [SComp, setSComp] = useState(false)
    const [Comp, setComp] = useState('')
    const [file, setFile] = useState(null)
    const [thankYouMsg, setThankYouMsg] = useState("")
    //console.log(company)

    const submit = (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('fileToUpload', file)
        formData.append('com', event.target.com.value)
        formData.append('loc', event.target.loc.value)
        formData.append('equip', event.target.equip.value)
        formData.append('desc', event.target.desc.value)
        formData.append('priority', event.target.priority.value)
        formData.append('fname', event.target.fname.value)
        formData.append('email', event.target.email.value)
        // console.log(ticket_api)
        // console.log(formData)

        axios({
            method: "post",
            url: ticket_api,
            headers: { "content-type": "multipart/form-data" },
            data: formData
        })
            .then(response => {
                //console.log(response.data)
                const msg = "Your Resquest has been registered, and the maintenance departement will reach you ASAP. Note your Request number for futher communication " + response.data;
                setThankYouMsg(msg)
                setThankYou(true)
            }).catch(error => console.log(error.response));
    }

    const OptionLocationItems = props => {
        const Items = props.arr
        //console.log(Items)
        return (
            Items.map((item, id) => <option key={id} value={item.l_name}>{item.l_name}</option>)
        )
    }

    const CompanySelect = event => {
        const comp = event.target.value;
        //make a request for the the location....
        setSComp(true)
        setComp(comp)
        axios.get(ticket_loc_api, {
            params: {
                company: comp
            }
        })
            .then(res => {
                const loc = res.data;
                setLoction(loc)
            }).catch(error => console.log(error.response));
        //console.log(location)
    }

    const FileSelect = event => {
        //this.setState({file:e.target.files[0]})
        setFile(event.target.files[0])
    }

    return (
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
                <h1 className="display-3">Maintenance Request</h1>
                <hr className="line" />

                <Form className='feed' onSubmit={submit}>

                    <Form.Group as={Row} id="dropdownLocation" controlId="formSelectComp">
                        <Col sm="4">
                            <Form.Label>Company*</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name='com' as="select" placeholder="Compa" required onChange={CompanySelect}>
                                {SComp && <option value={Comp}>{Comp}</option>}
                                {!SComp && <option value="">Select Your Company</option>}
                                <SelectOption arr={company} />
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="dropdownLocation" controlId="formSelectLoc">
                        <Col sm="4">
                            <Form.Label>Location*</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name='loc' as="select" required>
                                <option value="">Select your Location</option>
                                <OptionLocationItems arr={location} />
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicEquip">
                        <Col sm="4">
                            <Form.Label>Equipment*</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name="equip" type="text" required placeholder="Equipment Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicDesc">
                        <Col sm="4">
                            <Form.Label>Description </Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name="desc" as="textarea" rows="2" placeholder="Enter Description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="dropdownLocation" controlId="formBasicPrio">
                        <Col sm="4">
                            <Form.Label>Priority</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name='priority' as="select">
                                <SelectOption arr={priority} />
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicFile">
                        <Col sm="4">
                            <Form.Label>File / Attachment </Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name="fileToUpload" type="file" onChange={FileSelect} placeholder="Choose your image" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicName">
                        <Col sm="4">
                            <Form.Label>Name</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name="fname" type="text" placeholder="Enter your Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicEmail">
                        <Col sm="4">
                            <Form.Label>Email address</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Col>
                    </Form.Group>
                    <hr className="line" />
                    <div className="sbut">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    <div>
                        {thankYou &&
                            <Redirect to={{
                                pathname: '/thankyou',
                                state: {
                                    msg: { thankYouMsg }
                                }
                            }}
                            />
                        }
                    </div>
                </Form>
            </Jumbotron>
        </Styles>
    )
}