import React from "react";
import ServiceItem from "./serviceItem";
import "./services.modules.css";

const Services = () => {
  const [services] = React.useState([
    {
      id: 1,
      name: "Card",
      icon: "./assets/img/card.png",
    },
    {
      id: 2,
      name: "Finance",
      icon: "./assets/img/dollars.png",
    },

    {
      id: 3,
      name: "Top Up",
      icon: "./assets/img/topup.png",
    },
    {
      id: 4,
      name: "Help",
      icon: "./assets/img/help.png",
    },
  ]);

  return (
    <>
      <div className="container_services">
        <div className="services_header">
          <p className="services_title">Services</p>
          <p>See all</p>
        </div>

        <div className="services_list">
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
