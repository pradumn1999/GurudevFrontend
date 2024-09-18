

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
// import biographyImage from './assets/biographyImage.jpg';
import { Images } from "./../image/index";
import "./about.css";

function App() {
  return (
    <div className="App mx-5 my-5 py-3">
      {/* Header */}
      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">ISKCON</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#sadhana">Sadhana Levels</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}

      {/* Biography Content */}
      <Container className="my-1">
        <Row>
          <Col md={8}>
            {/* <h1>Founder-Acharya</h1> */}
            {/* <h2 className="ji"> Biography of Paramhans Swami Aagmanand Ji</h2> Maharaj </h2> */}
            <h2 className="ji">BIOGRAPHY OF PUJYA GURUDEV</h2>
            <p className="he">
              He is multi dimensional and multifaceted figure. He is
              attractive,genius, simple, easily available, cordial,thinker of
              equilibrium state and of helping attitude by nature. He is more
              softer even than a flower in behavior however, more stronger than
              a rock in Sadhana and Karmyoga. Basically he is dedicated to the
              publicity of ancient India Sanatan Dharma. He is responsible and
              sincere to all the religions, followers as well. He is spending
              his maximum time in logical, characteristics and multidimensional
              development of all the living and nonlivings of this univers
              (Sampurn Chara-Achar Jagat) Durgacharitmanas is his nobel
              composition. He is also a main pillar of traditional India
              religion
            </p>
            <p className="he">
              Sri Shiv Shakti Yogapith Trust, Kolkata, West Bengal (Reg. No.
              3593/ 2011) was established for the welfare of Society and
              helpless people in 2011.Swami ji is the Founder and Chairman of
              this trust. Now days welfare activities is going at top speed but,
              this trust is still in its infancy due to ignorance towards money,
              Spiritual thoughts and dedication of Swami ji. Followers (Bhaktas)
              are nurturing and developing the trust gradually.
            </p>
            <p className="he" >
              The purpose and the work of this trust is of great value. In
              summary the main aim of this Trust is organising spritual
              function. Establishment of Matha Mandir, Dharmashala. Goshala and
              Hospitals along with helping victims of natural disasters, poor
              people,children and women. Hence, Shiv Shakti Yogapith is
              developing gradually in its great aim towards society.
            </p>
            <p className="he">
              1. There are several fathfinders of swami ji as Mentors – Sri
              Ramkrishna Paramhansa, Baba Loknath Brahmachari, Aghor Sant
              Keenaram, Sri Sri Chaitanya Mahaprabhu, Digamber TailangaSwami,
              Mahabhairav Sadhak Sri Sri Bamakhepa, Dharma Samrat Karpatri ji
              Maharaj and other Monks. 2. Dream Mentors – Bhagawan Dattatreya,
              Swami Nityanand Saraswati, Yogivirya Kashipati ji Sanyal. 3.
              Direct related Mentors â€“ Vaishnavratna Swami Anantacharya,
              Paramhansa SwamiSri Sitaram sharan ji Maharaj, Yogi Samrat
              Bramharshi Devraha Baba, Swami Ramsukhdas ji Maharaj, Swami
              Chaitanyanand Brahmarshi, One Bairav Yogini, Jagadguru
              Shankaracharya , Swami Swarupanand Saraswati Ji Maharaj. 4.
              Childhood Mentors, religious feeders and Gayatri Diksha â€“ Sri
              Mohilal Pandey, Sri Viranchi Pandey and Sri Shivanandan Upa
            </p>
            {/* <p>
              In New York, he faced great hardships and began his mission humbly
              by giving classes on the Bhagavad-gita in lofts on the Bowery and
              leading kirtan (traditional devotional chants) in Tompkins Square
              Park. His message of peace and goodwill resonated with many young
              people, some of whom came forward to become serious students of
              the Krishna-bhakti tradition. With the help of these students,
              Bhaktivedanta Swami rented a small storefront on New York’s Lower
              East Side to use as a temple. */}
            {/* </p>
            <p>
              In July of 1966, Bhaktivedanta Swami established the International
              Society for Krishna Consciousness (ISKCON) for the purpose he
              stated of “checking the imbalance of values in the world and
              working for real unity and peace”.
            </p>
            <p>
              In the eleven years that followed, Srila Prabhupada circled the
              globe 14 times on lecture tours spreading the teachings of Lord
              Krishna. Men and women from all backgrounds and walks of life came
              forward to accept his message. With their help, Srila Prabhupada
              established temples, farm communities, a publishing house, and
              educational institutions around the world. And, he began what has
              now become the world’s largest vegetarian food relief program,
              Hare Krishna Food for Life.
            </p>
            <p>
              With the desire to nourish the roots of Krishna consciousness in
              its home, Srila Prabhupada returned to India several times, where
              he sparked a revival in the Vaishnava tradition. In India, he
              opened dozens of temples, including large centers in the holy
              towns of Vrindavana and Mayapura.
            </p>
            <p>
              Srila Prabhupada’s most significant contributions, perhaps, are
              his books. He authored over 70 volumes on the Krishna tradition,
              which are highly respected by scholars for their authority, depth,
              fidelity to the tradition, and clarity. Several of his works are
              used as textbooks in numerous college courses. His writings have
              been translated into 76 languages. His most prominent works
              include: Bhagavad-gita As It Is, the 30-volume Srimad-Bhagavatam,
              and the 17-volume Sri Caitanya-caritamrita.
            </p>
            <p>
              A.C. Bhaktivedanta Swami Srila Prabhupada passed away on November
              14, 1977, in the holy town of Vrindavana, surrounded by his loving
              disciples who carry on his mission today.
            </p> */}
            <Button variant="primary" href="#pdf">
              Download PDF
            </Button>
          </Col>
          <Col md={4}>
            {/* <Image src={biographyImage} rounded fluid /> */}
            <Image src={Images.Image2} rounded fluid />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      {/* <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 ISKCON Congregation Development Ministry. All Rights Reserved.</p>
              <p>Contact: bhaktisteps@iskconcongregation.com</p>
            </Col>
          </Row>
        </Container>
      </footer> */}
    </div>
  );
}

export default App;
