import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TshirtContext = createContext();

export const TshirtProvider = ({ children }) => {
  const [tshirts, setTshirts] = useState([]);

  const addTshirt = (tshirt) => {
    const newTshirt={...tshirt, id:uuidv4()};
    setTshirts((prevTshirts) => [...prevTshirts, newTshirt]);
    console.log(newTshirt.id)
  };

  const updateTshirtAvailability = (id, size, quantity) => {
    setTshirts((prevTshirtArr) => {
      return prevTshirtArr.map((tshirt) => {
        return tshirt.id === id
          ? {
              ...tshirt,
              sizes: {
                ...tshirt.sizes,
                [size]: tshirt.sizes[size] - quantity,
              },
            }
          : tshirt;
      });
    });
  };

    

  
  return (
    <TshirtContext.Provider value={{
    tshirts,
    addTshirt,
    updateTshirtAvailability,
  }}>
      {children}
    </TshirtContext.Provider>
  );
};

export default TshirtContext;
