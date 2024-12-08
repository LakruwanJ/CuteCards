import React from "react";
import i1 from "../Images/Wave.svg";
import i2 from "../Images/Wave.svg";
import i3 from "../Images/Wave.svg";
import i4 from "../Images/Wave.svg";
import i5 from "../Images/Wave.svg";

const cardData = [
  { topic: "Card 1", details: "This is the first card", image: i1 },
  { topic: "Card 2", details: "This is the second card", image: i2 },
  { topic: "Card 3", details: "This is the third card", image: i3 },
  { topic: "Card 4", details: "This is the fourth card", image: i4 },
  { topic: "Card 5", details: "This is the fifth card", image: i5 },
];

const CardIcon: React.FC = () => {
  return (
    <>
      {
        cardData.map((card, index) => (
          <li>
            <div className="grid gap-6 p-6">
              <div
                key={index}
                className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200"
              >
                {/* Icon */}
                <figure className="p-6 pb-0">
                  <img
                    src={card.image}
                    alt={`Icon for ${card.topic}`}
                    className="w-12 h-12 mx-auto"
                  />
                </figure>
                {/* Body */}
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    {card.topic}
                  </h3>
                  <p>{card.details}</p>
                </div>
              </div>
            </div>
          </li>
        ))
      }
    </>
  );

};

export default CardIcon;
