import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import MediaCard from "../components/MediaCard";
import BasicGrid from "../components/BasicGrid";

const Home = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <BasicGrid />
      <MediaCard />
    </div>
  );
};

export default Home;
