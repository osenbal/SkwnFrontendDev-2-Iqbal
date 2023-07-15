import React from "react";
import CardActivity from "./CardActivity";
import "./activity.modules.css";

const Activity = () => {
  const [activities] = React.useState([
    {
      id: 1,
      title: "Withdraw",
      amount: "Rp. 100.000",
      bank: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11:22 AM",
    },
    {
      id: 2,
      title: "Withdraw",
      amount: "Rp. 100.000",
      bank: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11:22 AM",
    },
    {
      id: 3,
      title: "Deposit",
      amount: "Rp. 100.000",
      bank: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11:22 AM",
    },
  ]);

  return (
    <>
      <div className="container_activities">
        <div className="activities_header">
          <p className="activities_title">Activity</p>
          <p>See all</p>
        </div>

        <div className="activities_list">
          {activities.map((activity) => {
            return <CardActivity key={activity.id} activityData={activity} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Activity;
