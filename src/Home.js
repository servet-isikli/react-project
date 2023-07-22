import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/states")
      .then((response) => {
        setEstates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Estate List</h1>
      <ul>
        {estates.map((estate) => (
          <li>
            <h3>{estate.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
