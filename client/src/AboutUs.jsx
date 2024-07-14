import React from 'react';
import './AboutUs.css'
import ceo from './assets/ceo.png'
import cto from './assets/cto.png'
import hod from './assets/hod.png'
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <Container className="my-5 pt-5 text-white">
      <Row className="justify-content-center mb-5 pt-5">
        <Col md={8} className="text-center">
          <h1 className="display-4">About Techy Software</h1>
          <p className="lead">
            At TechySoftware, we innovate and deliver top-notch software solutions to help your business thrive in the digital era.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">Our Mission</Card.Title>
              <Card.Text>
                To empower businesses with cutting-edge technology solutions that drive efficiency and innovation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">Our Vision</Card.Title>
              <Card.Text>
                To be the global leader in software development, known for our innovative approach and customer-centric solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">Our Values</Card.Title>
              <Card.Text>
                Integrity, Innovation, Excellence, Customer Focus, and Teamwork are at the core of everything we do.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="mb-4 mt-5">Meet Our Team</h2>
          <p className="lead">
            Our team of experts brings together years of experience and a passion for technology to deliver unparalleled solutions.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={ceo} />
            <Card.Body className="text-center text-white">
              <Card.Title>Urmil Gadhiya</Card.Title>
              <Card.Text>CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={cto} />
            <Card.Body className="text-center text-white">
              <Card.Title>Sundar Pichai</Card.Title>
              <Card.Text>CTO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={hod} />
            <Card.Body className="text-center text-white">
              <Card.Title>Steve Jobs</Card.Title>
              <Card.Text>Head of Development</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h2 className="mb-4 mt-5">Our History</h2>
          <p className="lead">
            TechySoftware was founded in 2010 with the goal of revolutionizing the software industry. Over the years, we have grown exponentially, constantly evolving to meet the needs of our clients.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">2010</Card.Title>
              <Card.Text>
                TechySoftware was founded with a small team of passionate developers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">2015</Card.Title>
              <Card.Text>
                We launched our first major product, which quickly gained popularity in the market.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">2020</Card.Title>
              <Card.Text>
                TechySoftware expanded globally, establishing offices in multiple countries.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
