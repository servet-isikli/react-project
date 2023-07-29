import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import MediaCard from "../components/MediaCard";
import BasicGrid from "../components/BasicGrid";

const Home = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <MediaCard />
      <BasicGrid />
    </div>
  );
};

export default Home;
