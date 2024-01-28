import React, {  useState } from "react";
import axios from "axios";
const TshirtContext = React.createContext();


export const TshirtProvider = (props) => {

  const url = "https://crudcrud.com/api/7178d6d205bd46e5b2b015be500cc21a/tshirts";

  
  const [tshirts, setTshirts] = useState([]);

  const addTshirt = (tshirt) => {
    const newTshirt={...tshirt, id:tshirt.name+tshirts.length};
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
      {props.children}
    </TshirtContext.Provider>
  );
};

export default TshirtContext;
