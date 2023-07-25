import React, { useState, useEffect } from "react";
import axios from "axios";

const EstateList = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);


console.log(estates)

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/estates")
      .then((response) => {
        console.log(response)
        setEstates(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching estates:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Estates</h1>
      <ul>
        {estates.map((estate) => (
          <li key={estate.id}>{estate.attributes.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EstateList;
