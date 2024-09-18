import { Images } from '../image';
import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./wisdom.css";

function Home() {
  return (
    <div>
      <Carousel interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-large"
            src={Images.Image21}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-large"
            src={Images.Image20}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img-large"
            src={Images.Image22}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

{/* <div id="home" class="intro route bg-image" style="background-image: url(img/intro-bg.jpg)">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
        <p class="display-6 color-d">Hello, world!</p>
          <h1 class="intro-title mb-4">I am Sweat Kamal</h1>
          <p class="intro-subtitle"><span class="text-slider-items">CEO ShivShakti Technologies,Web Developer,Web Designer,Frontend Developer,Full Stack Developer</span><strong class="text-slider"></strong></p>
          <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p>
        </div>
      </div>
    </div>
  </div> */}

      <Container className="my-4">
      <h2 className="text-center pt-5 ">Featured Photo</h2>
      <div className='d-flex justify-content-center pb-3'><img src={Images.Image23} ></img></div> 
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Images.Image14} />
              {/* <Card.Body>
                <Card.Title>Received by Iceland's Prime Minister</Card.Title>
                <Card.Text>
                  June 25, 2024
                </Card.Text>
              </Card.Body> */}
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Images.Image10} />
              {/* <Card.Body>
                <Card.Title>Visit to Sri Lanka: Promoting Peace, Development...</Card.Title>
                <Card.Text>
                  May 15, 2024
                </Card.Text>
              </Card.Body> */}
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={Images.Image13} />
              {/* <Card.Body>
                <Card.Title>Waves of Bliss in East Asia</Card.Title>
                <Card.Text>
                  April 18, 2024
                </Card.Text>
              </Card.Body> */}
            </Card>
          </Col>
        </Row>
        {/* Add more rows and cards as needed */}
      </Container>

      <Container className="my-4">
        <h2 className="text-center pt-5 ">Featured Videos</h2>
       <div className='d-flex justify-content-center'><img src={Images.Image23} ></img></div> 
        <Row className='py-3'>
          <Col md={6}>
            <a href="https://youtu.be/Pi6A2eMc83c?si=yRRr62DUieSp89zV" target="_blank" rel="noopener noreferrer">
              <Card>
                <Card.Img variant="top" src={Images.Image3}/>
                <Card.Body>
                  <Card.Title>श्री रामचरित भगवन की है आरती</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={6}>
            <a href="https://youtu.be/C2lcwrM4Fdg?si=VlrFo0uqA08xNS8I" target="_blank" rel="noopener noreferrer">
              <Card>
                <Card.Img variant="top" src={Images.Image4} />
                <Card.Body>
                  <Card.Title>सृष्टि और आधुनिकता में अंतर</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
