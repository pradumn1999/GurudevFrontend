import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './work.css';

const Work = ({ setSelectedBook }) => {
  const navigate = useNavigate();

  const books = [
    { title: 'श्री गुरु जीवन दर्शन', price: 675, imgSrc: './asets/book.jpg' },
    { title: 'श्रीदुर्गाचरितमानस', price: 800, imgSrc: './asets/book2.jpg' },
    { title: 'श्रीदुर्गासप्तशती', price: 500, imgSrc: './asets/book3.jpg' },
    { title: 'पंच चालीसा', price: 900, imgSrc: './asets/book4.jpg' },
  ];

  const handleBuyNow = (selectedBooks) => {
    // Navigate to the Signup page with the selected books as state
    navigate('/signup', { state: { books: selectedBooks } });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-light py-3">
        <Container>
          <h1 className='all'>All Books Written By Gurudev</h1>
        </Container>
      </header>

      <section className="book-section py-5">
        <Container>
          <Row>
            {books.map((book, index) => (
              <Col key={index} md={3} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={book.imgSrc} className="book-img" />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Price: ₹{book.price}</Card.Text>
                    <Button className='buy' variant="primary" onClick={() => handleBuyNow([book])}>Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="bg-light py-3 mt-auto">
        <Container>
          <p>© 2024 Hare Krishna Books</p>
        </Container>
      </footer>
    </div>
  );
};

export default Work;
