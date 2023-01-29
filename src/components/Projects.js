/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstProject from '../mv-movie.png';
import secondProject from '../hotelator.png';
import thirdProject from '../space-travelers.png';

const Projects = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={firstProject}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={secondProject}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={thirdProject}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Projects;
