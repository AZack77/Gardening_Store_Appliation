import React, { Component } from 'react';
import './topPicks.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import tomato from '../images/background.jpg';

function TopPicks() {
  return (
    <Carousel keyboard={true} style={{marginTop:'5.5%',color:'black',padding:'1%'}}>
      <Carousel.Item style={{height:'20%'}}>
        <img
        style={{height:'400px'}}
        className="d-block w-100"
          src={tomato}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Top Picks</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            style={{height:'400px'}}
          className="d-block w-100"
          src={tomato}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'400px'}}
          className="d-block w-100"
          src={tomato}
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
}

export default TopPicks;