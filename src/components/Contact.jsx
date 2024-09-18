import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import "./contact.css";
function Contact() {
  return (
    <Container className='contact my-3 py-3'>
      {/* <h1>Contact</h1> */}
      <Row>
        <Col md={6}>
          <h2>Recent</h2>
          <ul>
            <li>This Year, Dream the Impossible. Commit to a Better Planet!</li>
            <li>श्रीव्यास गुरु पूर्णिमा महोत्सव। जवाहर उच्च महाविद्यालय, समसपुर महेशखूंट खगड़िया बिहार </li>
            <li>Together We Can Heal the World With Inner Peace</li>
            <li>Inculcate Mutual Respect and Reverence for All Things Divine</li>
          </ul>
          <h2>Upcoming Events</h2>
          <ul>
            <li>June 30 - July 6: Saint-Mathieu-de-Parc, Quebec, Canada</li>
            <li>July 20: DEEKSHA (INANIATIATION) SAMAROH, GURU DARSHAN EVAM GURU PUJAN, 
              BHAJAN, PRAVACHAN & AASHIRVACHAN BY GURU-PRABHU</li>
            <li> July 21: श्रीव्यास गुरु पूर्णिमा महोत्सव। जवाहर उच्च महाविद्यालय, समसपुर महेशखूंट खगड़िया बिहार</li>
            <li>July 25  श्रीव्यास गुरु पूर्णिमा महोत्सव। जवाहर उच्च महाविद्यालय, समसपुर महेशखूंट खगड़िया बिहार</li>
            <li>August 7 - September 3: Bengaluru, Karnataka, India</li>
            <li>October 16 - October 17: Perth, Australia</li>
            <li>October 18 - October 19: Melbourne, Australia</li>
          </ul>
        </Col>

        <Col md={6}>
          <h2>Contact Form</h2>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formOrganization">
              <Form.Label>Name of your organization</Form.Label>
              <Form.Control type="text" placeholder="Enter your organization's name" />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter your country" />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter your city" />
            </Form.Group>
            <Form.Group controlId="formInterest">
              <Form.Label>I am interested in</Form.Label>
              <Form.Control as="select">
                <option>Please choose an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Your message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Contact;
