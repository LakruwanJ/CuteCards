import React from 'react';
import Card from './Card';
import CardOpeA from './CardOpeA';

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

  return ( <>
    <div className="container mx-auto pt-[10rem]">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardOpeA
                count="10"
                topic="Cards"
                details="This is a description for placeholder image 1."
            />
            <CardOpeA
                count="20"
                topic="Orders"
                details="This is a description for placeholder image 2."
            />
            <CardOpeA
                count="4"
                topic="Pending Orders"
                details="This is a description for placeholder image 3."
            />
        </div>
        </div>
      <div className='container mx-auto pt-[10rem]'>
          <Card cards={cardData} />
      </div>
      <br /><br /><br />
      <br /><br /><br />

    </>
  );
};

export default Cards;
