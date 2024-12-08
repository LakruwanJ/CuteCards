import React from 'react';
import Card from './Card';

const Cards: React.FC = () => {

  const cardData = [
    {
      id: "1",
      name: "Premium Card",
      details: { Material: "Paper", Style: "Modern" },
      size: 12,
      price: 15.99,
      tags: ["Best Seller", "Limited Edition"],
      gifUrl: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    },
    {
      id: "2",
      name: "Classic Card",
      details: { Material: "Plastic", Style: "Vintage" },
      size: 8,
      price: 9.99,
      tags: ["New Arrival"],
      gifUrl: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    },
    {
      id: "3",
      name: "Simple Card",
      details: { Material: "Recycled Paper", Style: "Minimalist" },
      size: 10,
      price: 5.99,
      tags: ["Eco-Friendly"],
    },
    {
      id: "1",
      name: "Premium Card",
      details: { Material: "Paper", Style: "Modern" },
      size: 12,
      price: 15.99,
      tags: ["Best Seller", "Limited Edition"],
      gifUrl: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    },
    {
      id: "2",
      name: "Classic Card",
      details: { Material: "Plastic", Style: "Vintage" },
      size: 8,
      price: 9.99,
      tags: ["New Arrival"],
      gifUrl: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    },
    {
      id: "3",
      name: "Simple Card",
      details: { Material: "Recycled Paper", Style: "Minimalist" },
      size: 10,
      price: 5.99,
      tags: ["Eco-Friendly"],
    },
  ];

  return (
    <>
      <div className='container mx-auto pt-[10rem]'>
          <Card cards={cardData} />
      </div>
      <br /><br /><br />
      <br /><br /><br />

    </>
  );
};

export default Cards;
