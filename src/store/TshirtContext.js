import React, { createContext, useState } from "react";

const TshirtContext = createContext();

export const TshirtProvider = ({ children }) => {
  const [tshirts, setTshirts] = useState([]);

  const addTshirt = (tshirt) => {
    setTshirts((prevTshirts) => [...prevTshirts, tshirt]);
  };

  const updateTshirtAvailability = (id, size, quantity) => {
    let selectedTshirtIndex = tshirts.findIndex((item) => item.id === id);
    if (selectedTshirtIndex !== -1) {
      let selectedTshirtData = tshirts[selectedTshirtIndex];
      selectedTshirtData.sizes[size] =
        selectedTshirtData.sizes[size] - quantity;
      setTshirts((prevTshirtArray) => {
        let newTshirtArray = [...prevTshirtArray];
        newTshirtArray[selectedTshirtIndex] = selectedTshirtData;
        return newTshirtArray;
      });
    }
  };

  const tshirtContextValue = {
    tshirts,
    addTshirt,
    updateTshirtAvailability,
  };

  return (
    <TshirtContext.Provider value={tshirtContextValue}>
      {children}
    </TshirtContext.Provider>
  );
};

export default TshirtContext;
