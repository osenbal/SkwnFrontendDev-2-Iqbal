import React from "react";

const ServiceItem = ({ service }) => {
  return (
    <div className="services_item">
      <div className="services_item_icon">
        <img src={service?.icon} alt={service?.name} />
      </div>

      <div className="services_item_title">
        <p>{service?.name}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
