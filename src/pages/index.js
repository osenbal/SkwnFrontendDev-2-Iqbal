import React from "react";
import ProfileHeader from "../components/Header/Profile.header";
import Cards from "../components/Cards/Cards";
import Services from "../components/Services/services";
import Activity from "../components/Activity/Activity";

const Home = () => {
  return (
    <>
      <ProfileHeader />
      <Cards />
      <Services />
      <Activity />
    </>
  );
};

export default Home;
