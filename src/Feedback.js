import React, { useState } from 'react'
import styled from 'styled-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import axios from 'axios'
import { Helmet } from 'react-helmet'
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
    }`;

export const Feedback = () => {

    //const api = process.env.REACT_APP_API_TEST_KEY
    const api = process.env.REACT_APP_API_LIVE_KEY
    //console.log(api)

    const [thankYou, setThankYou] = useState(false)
    var chekbx = true

    const submit = (event) => {
        event.preventDefault();
        const feedbackObj = {
            loc: event.target.loc.value,
            time: event.target.time.value,
            fname: event.target.fname.value,
            mob: event.target.mob.value,
            email: event.target.email.value,
            q1: event.target.q1.value,
            q2: event.target.q2.value,
            q3: event.target.q3.value,
            q4: event.target.q4.value,
            rb: event.target.rb.value,
            comment: event.target.comment.value,
            checkbx: chekbx,
        }
        //console.log(feedbackObj)
        //console.log(api)

        axios({
            method: "post",
            url: api,
            headers: { "content-type": "application/json" },
            data: feedbackObj
        })
            .then(response => {
                //console.log(response)
                setThankYou(true)
            }
            )
            .catch();
    }

    const checkBoxHandle = event => {
        chekbx = event.target.checked
        //console.log(chekbx)        
    }

    return (
        <Styles>
            <Helmet>
                <title>Feedback - Bareburger</title>
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
                <h1 className="display-3">Feedback</h1>
                <hr className="line" />

                <Form className='feed' onSubmit={submit}>
                    <Form.Group as={Row} id="dropdownLocation" controlId="formSelectLoc">
                        <Col sm="4">
                            <Form.Label>Location</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name='loc' as="select">
                                <option value='CW'>Bareburger City Walk</option>
                                <option value='LM'>Bareburger La Mer</option>
                                <option value='MM'>Bareburger Marina Mall AUH</option>
                                <option value='TP'>Bareburger The Pointe</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} id="dropdownLocation" controlId="formSelectTime">
                        <Col sm="4">
                            <Form.Label>Visit Timing</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name='time' as="select">
                                <option value='Morning'>Morning</option>
                                <option value='Noon'>Noon</option>
                                <option value='Evening'>Evening</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicFname">
                        <Col sm="4">
                            <Form.Label>Name </Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name="fname" type="text" placeholder="Enter your Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicNumber">
                        <Col sm="4">
                            <Form.Label>Mobile</Form.Label>
                        </Col>
                        <Col sm="6">
                            <Form.Control name="mob" type="number" placeholder="05xxxxxxxx" />
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

                    <Form.Group as={Row} controlId="formBasicRangeQ1">
                        <Col sm="4">
                            <Form.Label>How would you rate food taste and quality?</Form.Label>
                        </Col>

                        <Col className="rangeValueR" sm="1"> Poor </Col>

                        <Col sm="6">
                            <Form.Control type="range" name="q1" min="0" max="50" />
                        </Col>

                        <Col className="rangeValueL" sm="1"> Excelent </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicRangeQ2">
                        <Col sm="4">
                            <Form.Label>How would you rate our staff performance?</Form.Label>
                        </Col>

                        <Col className="rangeValueR" sm="1"> Poor </Col>

                        <Col sm="6">
                            <Form.Control type="range" name="q2" min="0" max="50" />
                        </Col>

                        <Col className="rangeValueL" sm="1">  Excelent  </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicRangeQ3">
                        <Col sm="4">
                            <Form.Label>How was your overall experience?</Form.Label>
                        </Col>

                        <Col className="rangeValueR" sm="1"> Poor </Col>

                        <Col sm="6">
                            <Form.Control type="range" name="q3" min="0" max="50" />
                        </Col>

                        <Col className="rangeValueL" sm="1"> Excelent  </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicRangeQ4">
                        <Col sm="4">
                            <Form.Label>Value for money?</Form.Label>
                        </Col>

                        <Col className="rangeValueR" sm="1"> Poor </Col>

                        <Col sm="6">
                            <Form.Control type="range" name="q4" min="0" max="50" />
                        </Col>

                        <Col className="rangeValueL" sm="1"> Excelent </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicFname">
                        <Col sm="4">
                            <Form.Label>How did you hear about us?</Form.Label>
                        </Col>

                        <Col className="rangeValueR" sm="1">
                        </Col>

                        <Col sm="6">
                            <ButtonGroup >
                                <Form.Check type="radio" name="rb" value="Social Media" id="1" label="Social Media" />
                                <Form.Check type="radio" name="rb" value="Others" id="4" label="Other" />
                            </ButtonGroup>
                            <ButtonGroup>
                                <Form.Check type="radio" name="rb" value="Magazine or Newspaper" id="2" label="Magazine/Newspapers" />
                                <Form.Check type="radio" name="rb" value="Friends" id="3" label="Friends" />
                            </ButtonGroup>
                        </Col>

                        <Col className="rangeValueR" sm="1">
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicComent">
                        <Col sm="4">
                            <Form.Label>Leave your comments below, we never stop listening. </Form.Label>
                        </Col>

                        <Col className="rangeValueR" sm="1">
                        </Col>

                        <Col sm="6">
                            <Form.Control name="comment" as="textarea" rows="3" placeholder="What we could have done better?" />
                        </Col>

                        <Col className="rangeValueR" sm="1">
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check name="chxbox" onChange={checkBoxHandle} type="checkbox" label="Allow us in your inbox" />
                    </Form.Group>

                    <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div>
                        {thankYou &&
                            <Redirect to="./" />
                        }
                    </div>

                </Form>
            </Jumbotron>
        </Styles>
    )
}