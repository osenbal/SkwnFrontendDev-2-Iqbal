import React from "react";

const CardActivity = ({ activityData }) => {
  console.log(activityData);
  return (
    <div className="activities_item">
      <div
        className={`activities_item_icon ${
          activityData?.title === "Withdraw" ? "loss" : ""
        }`}
      >
        <img
          src={
            activityData?.title === "Withdraw"
              ? "./assets/img/loss.png"
              : "./assets/img/profit.png"
          }
          alt="transfer"
        />
      </div>

      <div className="activities_item_title">
        <div>
          <p>{activityData?.title}</p>
          <div className="activities_item_amount">
            <p>{activityData?.amount}</p>
          </div>
        </div>
        <div className="activities_item_bank">
          <p>{activityData?.bank}</p>
        </div>
      </div>

      <div className="activities_item_date">
        <p>{activityData?.date}</p>
        <p>{activityData?.time}</p>
      </div>
    </div>
  );
};

export default CardActivity;
