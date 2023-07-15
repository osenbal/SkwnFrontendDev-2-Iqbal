import React from "react";
import CardItem from "./CardItem";
import "./cards.modules.css";
const Cards = () => {
  const [cards] = React.useState([
    {
      id: 1,
      number: 1223233333331233,
      name: "Aurellia",
      status: "Premium",
    },
    {
      id: 2,
      number: 1223233333331233,
      name: "Aurellia",
      status: "Premium",
    },
    {
      id: 3,
      number: 1223233333331233,
      name: "Aurellia",
      status: "Premium",
    },
  ]);

  return (
    <div>
      <div className="cards_header">
        <p>Your Visa</p>
        <p>See All</p>
      </div>

      <div className="cards_list">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
