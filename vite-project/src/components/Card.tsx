import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  cards: {
    id: string;
    name: string;
    details: { [key: string]: string };
    size: number;
    price: number;
    tags: string[];
    gifUrl?: string; // Optional GIF URL
  }[];
}

const Card: React.FC<CardProps> = ({ cards }) => {

  const navigate = useNavigate();
  const cardId = "123"; // Replace with the dynamic card ID

  return (
    // <div className="flex flex-wrap justify-center gap-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto"
        >
          {/* GIF or Image */}
          <div className="min-h-[245px]">
            {card.gifUrl ? (
              <img
                src={card.gifUrl}
                alt={card.name}
                className="w-full rounded-lg"
              />
            ) : (
              <p className="text-center italic text-gray-500">
                No GIF available
              </p>
            )}
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-[#3B1E54]">{card.name}</h3>
            <p className="mt-3 text-sm text-[#8174A0] leading-relaxed">
              Size: {card.size} | Price: ${card.price.toFixed(2)}
            </p>
            <ul className="mt-2 text-sm text-gray-600">
              {Object.entries(card.details).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <div className="mt-2">
              {card.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#EFB6C8] text-white text-xs px-2 py-1 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>


            <button
              type="button"
              className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#3B1E54] hover:bg-[#A888B5]"
              onClick={() => navigate(`/editCard/${cardId}`)}
            >
              View
            </button>


            <div className="mt-6 flex space-x-4">
              <button
                type="button"
                className="px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#3B1E54] hover:bg-[#A888B5]"
              >
                Delete
              </button>
              <button
                type="button"
                className="px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#3B1E54] hover:bg-[#A888B5]"
                onClick={() => navigate(`/Admin/editCard/${cardId}`)}
              >
                Edit
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default Card;
