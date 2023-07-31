import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "./DataContext";

const MediaCardDetail = () => {
  const { postId } = useParams();
  const { estates } = useData();
  // console.log(estates);


  const estate = estates.find((estate) => estate.id === postId);

  if (!estate) {
    return <div>Estate not found</div>;
  }

  return (
    <div>
      <h1>{estate.attributes.Name}</h1>
      <img src={estate.attributes.Image} alt={estate.attributes.Name} />
      <p>{estate.attributes.Description}</p>
    </div>
  );
};

export default MediaCardDetail;
