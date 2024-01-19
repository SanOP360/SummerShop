import React, { useContext, useState } from "react";
import classes from "./TshirtForm.module.css";
import Input from "../UI/Input";
import CartContext from "../../store/CartContext";

import TshirtContext from "../../store/TshirtContext";

const TshirtAddForm = (props) => {
  const cartCtx = useContext(CartContext);
  const TshirtCtx=useContext(TshirtContext);
  const [quantityS, setQuantityS] = useState(1);
  const [quantityM, setQuantityM] = useState(1);
  const [quantityL, setQuantityL] = useState(1);

  const inputChangeHandlerS = (event) => {
    setQuantityS(+event.target.value);
  };

  const inputChangeHandlerM = (event) => {
    setQuantityM(+event.target.value);
  };

  const inputChangeHandlerL = (event) => {
    setQuantityL(+event.target.value);
  };

  const addItemHandler = (size) => {
    let selectedQuantity;

    switch (size) {
      case "S":
        selectedQuantity = quantityS;
        break;
      case "M":
        selectedQuantity = quantityM;
        break;
      case "L":
        selectedQuantity = quantityL;
        break;
      default:
        selectedQuantity = 1;
    }

   
    if (!isNaN(selectedQuantity) && selectedQuantity > 0) {
      cartCtx.addItem({ ...props.item, quantity: selectedQuantity });

      TshirtCtx.updateTshirtAvailability(
        props.id,size,selectedQuantity
      )
    }
  };

  return (
    <form className={classes.form}>
      <div className={classes.align}>
        <Input
          label="S"
          input={{
            id: "amountS" + props.id,
            type: "number",
            min: "1",
            max: props.item.sizes.S.toString(),
            step: "1",
            value: quantityS.toString(),
            onChange: inputChangeHandlerS,
          }}
        />
        <button
          className={classes.addBtn}
          onClick={() => addItemHandler("S")}
          type="button"
          disabled={quantityS > props.item.sizes.S}
        >
          + Add
        </button>
      </div>
      <div className={classes.align}>
        <Input
          label="M"
          input={{
            id: "amountM" + props.id,
            type: "number",
            min: "1",
            max: props.item.sizes.M.toString(),
            step: "1",
            value: quantityM.toString(),
            onChange: inputChangeHandlerM,
          }}
        />
        <button
          className={classes.addBtn}
          onClick={() => addItemHandler("M")}
          type="button"
          disabled={quantityM > props.item.sizes.M}
        >
          + Add
        </button>
      </div>
      <div className={classes.align}>
        <Input
          label='L'
          input={{
            id: "amountL" + props.id,
            type: "number",
            min: "1",
            max: props.item.sizes.L.toString(),
            step: "1",
            value: quantityL.toString(),
            onChange: inputChangeHandlerL,
          }}
        />
        <button
          className={classes.addBtn}
          onClick={() => addItemHandler("L")}
          type="button"
          disabled={quantityL > props.item.sizes.L}
        >+ Add
        </button>
      </div>
    </form>
  );
};

export default TshirtAddForm;
