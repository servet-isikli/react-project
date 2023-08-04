import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Context'i oluşturun
const DataContext = createContext();

// Özel bir hook oluşturun, böylece kolayca verilere erişebilirsiniz
export const useData = () => {
  return useContext(DataContext);
};

// Context sağlayıcı bileşeni oluşturun
export const DataProvider = ({ children }) => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/estates")
      .then((response) => {
        setEstates(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching estates:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Context değerini sağlayın
  const data = {
    estates,
    loading,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
