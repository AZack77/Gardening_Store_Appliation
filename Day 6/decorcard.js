import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import tomato from './images/tomato.jpeg';
import {Link} from 'react-router-dom';
const DecorSlider = () => {
  const cardData = [
    { id: 1, title: 'Card 1', description: 'This is the first card', imageUrl: tomato },
    { id: 2, title: 'Card 2', description: 'This is the second card', imageUrl: tomato },
    { id: 3, title: 'Card 4', description: 'This is the third card', imageUrl: tomato },
    { id: 3, title: 'Card 5', description: 'This is the third card', imageUrl: tomato },

{ id: 3, title: 'Card 3', description: 'This is the third card', imageUrl: tomato },
{ id: 1, title: 'Card 1', description: 'This is the first card', imageUrl: tomato },
{ id: 2, title: 'Card 2', description: 'This is the second card', imageUrl: tomato },
{ id: 3, title: 'Card 4', description: 'This is the third card', imageUrl: tomato },
// { id: 3, title: 'Card 5', description: 'This is the third card', imageUrl: tomato },

    // Add more card data objects with imageUrls as needed
  ];

  const cardsPerFrame = 4; // Number of cards to display in a single frame

  const cardChunks = [];
  for (let i = 0; i < cardData.length; i += cardsPerFrame) {
    cardChunks.push(cardData.slice(i, i + cardsPerFrame));
  }

  return (
    <div className='slide' style={{border:'0px solid white',backgroundColor:'white',margin:'1%',marginTop:'2%',padding:'1%',boxShadow:'0.5px 0.5px 2px 0.5px rgb(233,230,230)',borderRadius:'5px'}}> 
      <Link to='/decor' style={{textDecoration:'none'}}><h4 style={{marginTop:'3%',marginLeft:'1%',color:'green'}}>Garden Decors</h4></Link>
    <Carousel keyboard={true}  className='slide' interval={null} style={{margin:'1%',cursor:'pointer'}}>
      {cardChunks.map((chunk, index) => (
        <Carousel.Item key={index} >
          <div className="row">
            {chunk.map((card) => (
              <div className="col-md-3" key={card.id}>
                <div className="card" style={{width:'100%'}}>
                  <img src={card.imageUrl} style={{ height:'250px'}} className="card-img-top" alt="Card" />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default DecorSlider;
