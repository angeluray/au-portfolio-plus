/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const Toolbox = () => (
  <div>
    <h3>My Toolbox</h3>
    <Card
      style={{ width: '18rem' }}
      bg="success"
      className="mb-2"
    >
      <Card.Header>Languages</Card.Header>
      <Card.Body>
        <Badge bg="secondary">Javascript</Badge>
        <Badge bg="secondary">Ruby</Badge>
        <Badge bg="secondary">HTML</Badge>
        <Badge bg="secondary">CSS</Badge>
      </Card.Body>
    </Card>

    <Card
      style={{ width: '18rem' }}
      bg="danger"
      className="mb-2"
    >
      <Card.Header>Frameworks and Libraries</Card.Header>
      <Card.Body>
        <Badge bg="secondary">Ruby on Rails</Badge>
        <Badge bg="secondary">React</Badge>
        <Badge bg="secondary">Redux</Badge>
        <Badge bg="secondary">Tailwind</Badge>
        <Badge bg="secondary">Bootstrap</Badge>
        <Badge bg="secondary">RSpec</Badge>
        <Badge bg="secondary">Capybara</Badge>
        <Badge bg="secondary">Jest</Badge>
      </Card.Body>
    </Card>

    <Card
      style={{ width: '18rem' }}
      bg="warning"
      className="mb-2"
    >
      <Card.Header>Tools and Methodologies</Card.Header>
      <Card.Body>
        <Badge bg="secondary">Git</Badge>
        <Badge bg="secondary">GitHub</Badge>
        <Badge bg="secondary">Eslint</Badge>
        <Badge bg="secondary">Rubocop</Badge>
        <Badge bg="secondary">Stylinter</Badge>
        <Badge bg="secondary">Scrum</Badge>
      </Card.Body>
    </Card>

    <Card
      style={{ width: '18rem' }}
      bg="info"
      className="mb-2"
    >
      <Card.Header>Soft skills</Card.Header>
      <Card.Body>
        <Badge bg="secondary">Problem solving, Critical thinking</Badge>
        <Badge bg="secondary">Communication</Badge>
        <Badge bg="secondary">Time management</Badge>
        <Badge bg="secondary">Mentoring</Badge>
        <Badge bg="secondary">Self-taught, Adaptability</Badge>
        <Badge bg="secondary">Teamwork</Badge>
      </Card.Body>
    </Card>
  </div>
);

export default Toolbox;
