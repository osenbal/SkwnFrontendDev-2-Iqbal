import React from "react";
const CardItem = ({ card }) => {
  const addSpace = (number) => {
    return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
  };

  return (
    <>
      <div className="card_item">
        <div className="card_item_header">
          <img src="./assets/icons/ico_pinSim.svg" alt="card pin sid" />
          <p>{card?.status}</p>
        </div>

        <div className="card_item_number">
          <p>{addSpace(card?.number)}</p>
        </div>

        <div className="card_item_footer">
          <div className="card_user_name">
            <p>{card?.name}</p>
          </div>

          <div>
            <img src="./assets/img/logo_visa.png" alt="visa" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
