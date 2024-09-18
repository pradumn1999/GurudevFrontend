import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './wisdom.css';
import { Images } from './../image/index';

function Home() {
  const events = [
    {
      date: 'July 27 - July 28',
      title: 'swami',
      location: 'shreeshivshakti',
      image: './asets/event-1.jpg', // Replace with actual image URL
      buttonText: 'More information'
    },
    {
      date: 'July 27 - July 28',
      title: 'swami',
      location: 'shreeshivshakti',
      image: './asets/event-2.jpg',
      buttonText: 'More information'
    },
    {
      date: 'July 27 - July 28',
      title: 'swami',
      location: 'shreeshivshakti',
      image: "./asets/event-3.jpg",
      buttonText: 'More information'
    },
    // Add more events as needed
  ];

  return (
    <Container>
      <h1 className="my-4 up">Few Days Ago Events</h1>
      <Row>
        {events.map((event, index) => (
          <Col key={index} md={4} sm={12} className="mb-4"> {/* Adjust for mobile with sm={12} */}
            <Card>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  {event.date}<br />
                  {event.location}
                </Card.Text>
                <Button variant="primary">{event.buttonText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
