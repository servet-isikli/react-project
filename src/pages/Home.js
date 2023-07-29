import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import MediaCard from "../components/MediaCard";
import BasicGrid from "../components/BasicGrid";
import EstateList from "../components/EstateList";

const Home = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <MediaCard />
      <BasicGrid />
      <EstateList/>
    </div>
  );
};

export default Home;
