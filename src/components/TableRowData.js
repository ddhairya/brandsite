import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const TableRowData = (data) => {
    //const row = data.data[0]
    // console.log (row)
    //data.data.map((row) => console.log(row))
    //data.map((row) => console.log(row))
    //console.log(data)
    return (
        <>
            {
                data.data.map((row) => (
                    <div key = {row.t_id}>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Ticket Number</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control type="text" disabled value = {row.t_id} />
                            </Col>               
                        </Form.Group>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Company</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.t_c_name} />
                            </Col>               
                        </Form.Group>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Location</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.t_l_name} />
                            </Col>               
                        </Form.Group>                        
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Ticket Equipment</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.t_equipment} />
                            </Col>               
                        </Form.Group>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Ticket Description</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.t_description} />
                            </Col>               
                        </Form.Group>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Ticket Priority</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.t_priority} />
                            </Col>               
                        </Form.Group>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Contact Person</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.fname} />
                            </Col>               
                        </Form.Group>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>User Email</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.t_email} />
                            </Col>               
                        </Form.Group>
                        <Form.Group as = {Row} >                
                            <Col sm="4">
                                <Form.Label>Ticket Reg Date</Form.Label>
                            </Col>
                            <Col sm="6">
                                <Form.Control  type="text" disabled value = {row.t_reg_date} />
                            </Col>               
                        </Form.Group>                        
                    </div>
                ))
            }
        </>
    )
}