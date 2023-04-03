import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import style from '../styles/style.module.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {

  return (
    <Container fluid className={style.bgDarkest}>
      <Row className='py-5 ms-5'>
          <Col sm={2} className ='offset-sm-1 mb-3'>
              <h5 className='text-light'>Section</h5>
              <ul className="nav flex-column">
                  <li className="nav-item mb-2 text-light">Home</li>
                  <li className="nav-item mb-2 text-light">Features</li>
                  <li className="nav-item mb-2 text-light">Pricing</li>
                  <li className="nav-item mb-2 text-light">FAQs</li>
                  <li className="nav-item mb-2 text-light">About</li>
              </ul>
          </Col>
          <Col sm={3} className ='mb-3'>
              <h5 className='text-light'>Section</h5>
              <ul className="nav flex-column">
                  <li className="nav-item mb-2 text-light">Home</li>
                  <li className="nav-item mb-2 text-light">Features</li>
                  <li className="nav-item mb-2 text-light">Pricing</li>
                  <li className="nav-item mb-2 text-light">FAQs</li>
                  <li className="nav-item mb-2 text-light">About</li>
              </ul>
          </Col>
          <Col sm={5} className='offset-md-1 mb-3'>
            <h5 className='text-light'>Subscribe to our newsletter</h5>
            <p className='text-light'>Monthly digest of what's new and exciting from us.</p>
            <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                Subscribe
                </Button>
            </InputGroup>
          </Col>
      </Row>
      <Row className="d-flex justify-content-center border-top">
        <p className='text-light p-2'>&copy; 2023 Adrinsoft, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3 text-light"><Icon.Instagram/></li>
          <li className="ms-3 text-light"><Icon.Facebook/></li>
          <li className="ms-3 text-light"><Icon.Twitter/></li>
        </ul>
      </Row>
      
    </Container>
  )
}

export default Footer;