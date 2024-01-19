import React, { useContext } from "react";
import classes from "./AvailableTshirts.module.css";
import Card from "../UI/Card";

import TshirtContext from "../../store/TshirtContext";
import Tshirt from "./Tshirt";

const AvailableTshirts = () => {
  const tshirtCtx = useContext(TshirtContext);
  const tshirtsList = tshirtCtx.tshirts.map((tshirt) => (
    
    <Tshirt key={tshirt.id} data={tshirt}/>
  ));

  return (
    <section className={classes.tshirts}>
      <Card>
        <ul>{tshirtsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTshirts;
