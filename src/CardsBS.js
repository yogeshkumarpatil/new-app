import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

function CardsBS() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card bg='warning' border='primary'>
                        <Card.Header>
                          This is Card Header
                        </Card.Header>
                            <Card.Img src="images/lili.jpg" />
                            {/* <img src={Blue} height='200' width='200' /> */}
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle>Card Sub Title</Card.Subtitle>
                                <Card.Text>
                                    This is a Card Text This is a Card TextThis is a Card TextThis is a Card TextThis is
                                    a Card TextThis is a Card TextThis is a Card TextThis is a Card TextThis is a Card
                                    Text
                                </Card.Text>
                                <Card.Link href='https://www.facebook.com/'>Click Here For Facebook</Card.Link>
                                <div className="d-grid">
                                    <Button variant="danger">Read More...</Button>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                              THis is Card Footer
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg='success'>
                            <Card.Img src="images/lili.jpg" />                            
                            {/* image overly use karnysathi card body remove karave lagte */}
                            <Card.ImgOverlay>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle>Card Sub Title</Card.Subtitle>
                                <Card.Text>
                                    This is a Card Text This is a Card TextThis is a Card TextThis is a Card TextThis is
                                    a Card TextThis is a Card TextThis is a Card TextThis is a Card TextThis is a Card
                                    Text
                                </Card.Text>
                                <div className="d-grid">
                                    <Button variant="primary">Read More...</Button>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg='secondary'>
                            <Card.Img src="images/lili.jpg" />
                            {/* <img src={Blue} height='200' width='200' /> */}
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle>Card Sub Title</Card.Subtitle>
                                <Card.Text>
                                    This is a Card Text This is a Card TextThis is a Card TextThis is a Card TextThis is
                                    a Card TextThis is a Card TextThis is a Card TextThis is a Card TextThis is a Card
                                    Text
                                </Card.Text>
                                <div className="d-grid">
                                    <Button variant="success">Read More...</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CardsBS;

// return (
//   <>
//       <div>ImagesDemo</div>
//       <img src={Blue} height='200' width='200' />

//       <img src={require('./images/Orange.jpg')} height='200' width='200'  />

//       <img src='images/Yellow.jpg' height='200' width='200'/>
//   </>
// )
