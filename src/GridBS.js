import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function GridBS() {
    return (
        <Container fluid='lg'>
            <Row>
            <Col md={{offset:2, span:6 }}>
                    <div className='bg-primary p-4'>
                        My Div 1
                    </div>
                </Col>



                {/* <Col md={{ span:6 }}>
                    <div className='bg-primary p-4'>
                        My Div 1
                    </div>
                </Col> */}

                {/* <Col md={{offset:4}}>
                    <div className='bg-primary p-4'>
                        My Div 1
                    </div>
                </Col> */}
                <Col>
                    <div className='bg-danger p-4'>
                        My Div 2
                    </div>
                </Col>
                <Col>
                    <div className='bg-success p-4'>
                        My Div
                    </div>
                </Col>
            </Row>



            {/* <Row>
            <Col md={8} sm={6} xs={4}>
                <div className='bg-primary p-4'>
                    My Div 1
                </div>
            </Col>
            <Col>
                <div className='bg-danger p-4'>
                    My Div 2
                </div>
            </Col>
            <Col>
                <div className='bg-success p-4'>
                    My Div
                </div>
            </Col>
        </Row> */}

            {/* <Row>
            <Col sm={6}>
                <div className='bg-primary p-4'>
                    My Div 1
                </div>
            </Col>
            <Col sm={4}>
                <div className='bg-danger p-4'>
                    My Div 2
                </div>
            </Col>
            <Col>
                <div className='bg-success p-4'>
                    My Div
                </div>
            </Col>
        </Row> */}
            {/* <br /> */}
            {/* <Row className='mt-2'>
            <Col>
                <div className='bg-primary p-4'>
                    My Div 1
                </div>
            </Col>
            <Col>
                <div className='bg-danger p-4'>
                    My Div 2
                </div>
            </Col>
            <Col>
                <div className='bg-success p-4'>
                    My Div
                </div>
            </Col>
            <Col>
                <div className='bg-secondary p-4'>
                    My Div
                </div>
            </Col>
        </Row> */}
        </Container>

        // <div>
        //     <Button variant='outline-danger'>Submit</Button>
        //     <Button variant='outline-success'>Submit</Button>
        //     <Button variant='outline-dark'>Submit</Button>
        //     <Button variant='outline-warning'>Submit</Button>
        //     <Button variant='outline-secondary'>Submit</Button>
        // </div>
    )
}

export default GridBS