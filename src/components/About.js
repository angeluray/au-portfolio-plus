/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col>
        About me
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>My story but breafly.</h2>
      </Col>
    </Row>

    <p>
      Hola, Hello, Merhaba! My name is Angel Uray, and I am a developer, keen speaker,
      photographer, and a big fan of learning languages(both programming and from other countries)
      if you didn&apos;t notice I said Hello in English and Turkish before.

    </p>

    <p>
      I started my software development career with no prior experience in the field in 2022.
      I enrolled at Microverse,
      an all-English software development institution where I mixed my interpersonal skills,
      and the technical skills I acquired at Microverse including Algorithms and DS, Git,
      and Rails, to build over 30 Full-Stack projects, both independently and through
      pair programming with international teams.

    </p>

    <p>
      While at Microverse due to my excellent performance as a Student
      I was assigned to mentor Jr Students,
      where I helped them understand the &quot;science&quot;
      of applying best practices for each language,
      testing, consuming, and building APIs, fundamentals of following MVC architecture,
      or improving overall productivity when working under tight deadlines, this allowed
      to strengthen my current skills at the time.

    </p>

    <p>
      Today I help companies and individuals to make their businesses
      meet the needs of users and customers by creating,
      maintaining, and improving their Internet presence through Web Applications
      as a self-taught Full-Stack Software Developer.
      and I actively seek new opportunities to improve my knowledge,
      face new challenges and grow as a professional within this groundbreaking field.

    </p>
  </Container>
);

export default About;
