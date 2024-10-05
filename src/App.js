import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Button, Form, Nav, Navbar, NavDropdown, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import img1 from './Image/pizza1.jpg';
import img2 from './Image/pizza2.jpg';
import img3 from './Image/pizza3.jpg';
import img4 from './Image/menu1.jpg';
import img5 from './Image/menu2.jpg';
import img6 from './Image/menu3.jpg';
import img7 from './Image/menu4.jpg';


function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Shop Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={6} md={4}>
            Pizza Capricciosa
            </Col>
            <Col xs={6} md={4}>
              
            </Col>

            <Col xs={3} md={2}>
            <Button variant="danger">+</Button>{' '}
            </Col>

            <Col xs={3} md={2}>
            <Button variant="primary">-</Button>{' '}
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
            Pizza Hawaii
            </Col>
            <Col xs={6} md={4}>
              
            </Col>

            <Col xs={3} md={2}>
            <Button variant="danger">+</Button>{' '}
            </Col>

            <Col xs={3} md={2}>
            <Button variant="primary">-</Button>{' '}
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
            Pizza Margherita
            </Col>
            <Col xs={6} md={4}>
              
            </Col>

            <Col xs={3} md={2}>
            <Button variant="danger">+</Button>{' '}
            </Col>

            <Col xs={3} md={2}>
            <Button variant="primary">-</Button>{' '}
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
            Pizza Marinara
            </Col>
            <Col xs={6} md={4}>
              
            </Col>

            <Col xs={3} md={2}>
            <Button variant="danger">+</Button>{' '}
            </Col>

            <Col xs={3} md={2}>
            <Button variant="primary">-</Button>{' '}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function App() {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
           <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Item
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>


    <Row>
    <Carousel>
      <Carousel.Item>
        <img src= {img1} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= {img2} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src= {img3} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>


    <Row className='mt-5 mb-5'>
      <Col>
      <Card>
      <Card.Img variant="top" src= {img4} />
      <Card.Body>
        <Card.Title>Pizza Capricciosa</Card.Title>
        <Card.Text>
        Ham, mushrooms, artichokes, egg.
        </Card.Text>
        <Button variant="primary">Get Item</Button>
      </Card.Body>
    </Card>
      </Col>

      <Col>
      <Card>
      <Card.Img variant="top" src= {img5} />
      <Card.Body>
        <Card.Title>Pizza Hawaii</Card.Title>
        <Card.Text>
        Cheese, cooked ham, and pineapple
        </Card.Text>
        <Button variant="primary">Get Item</Button>
      </Card.Body>
    </Card>
      </Col>

      <Col>
      <Card>
      <Card.Img variant="top" src={img6}/>
      <Card.Body>
        <Card.Title>Pizza Margherita</Card.Title>
        <Card.Text>
        Tomatoes, mozzarella, basil.
        </Card.Text>
        <Button variant="primary">Get Item</Button>
      </Card.Body>
    </Card>
      </Col>

      <Col>
      <Card>
      <Card.Img variant="top" src= {img7} />
      <Card.Body>
        <Card.Title>Pizza Marinara</Card.Title>
        <Card.Text>
        Tomato sauce, olive oil, oregano, garlic. No cheese.
        </Card.Text>
        <Button variant="primary">Get Item</Button>
      </Card.Body>
    </Card>
      </Col>
    </Row>

    </Container>
  );
}

export default App;
