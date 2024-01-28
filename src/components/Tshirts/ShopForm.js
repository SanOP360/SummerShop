import React, { useContext, useState } from "react";
import classes from "./ShopForm.module.css";
import TshirtContext from "../../store/TshirtContext";
import { useNavigate } from "react-router-dom";

const ShopForm = () => {
  const navigate=useNavigate();
  const Shopctx = useContext(TshirtContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [Ssize, setSsize] = useState("");
  const [Msize, setMsize] = useState("");
  const [Lsize, setLsize] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    setFormIsValid(true); 
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
    setFormIsValid(true);
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value);
    setFormIsValid(true);
  };

  const MsizeHadler = (event) => {
    setMsize(event.target.value);
    setFormIsValid(true);
  };

  const SsizeHadler = (event) => {
    setSsize(event.target.value);
    setFormIsValid(true);
  };

  const LsizeHadler = (event) => {
    setLsize(event.target.value);
    setFormIsValid(true);
  };

  const addTshirtHandler = (event) => {
    event.preventDefault();

    
    if (!name || !price || !desc || !Ssize || !Msize || !Lsize) {
      setFormIsValid(false);
      return;
    }

    const item = {
      name: name,
      description: desc,
      price: price,
      sizes: {
        S: Ssize,
        M: Msize,
        L: Lsize,
      },
    };


    Shopctx.addTshirt(item);

    
    setName("");
    setPrice("");
    setDesc("");
    setSsize("");
    setMsize("");
    setLsize("");
    setFormIsValid(true);

    navigate('/Product')


  };

  return (
    <div>
      <form className={classes.form}>
        <label htmlFor="name" className={classes.label}>
          Brand Name
        </label>
        <input
          type="text"
          className={classes.textInput}
          onChange={nameChangeHandler}
          value={name}
        />

        <label htmlFor="description" className={classes.label}>
          Description
        </label>
        <input
          type="text"
          name="description"
          className={classes.textInput}
          onChange={descChangeHandler}
          value={desc}
        />

        <label htmlFor="price" className={classes.label}>
          Price
        </label>
        <input
          type="number"
          name="price"
          className={classes.numberInput}
          onChange={priceChangeHandler}
          value={price}
        />

        <span className={classes.quantity}>Quantity:</span>
        <label htmlFor="L">L</label>
        <input
          type="number"
          className={classes.numberInput}
          onChange={LsizeHadler}
          value={Lsize}
        />

        <label htmlFor="M">M</label>
        <input
          type="number"
          className={classes.numberInput}
          onChange={MsizeHadler}
          value={Msize}
        />

        <label htmlFor="S">S</label>
        <input
          type="number"
          className={classes.numberInput}
          onChange={SsizeHadler}
          value={Ssize}
        />

        <button
          className={classes.Addbtn}
          onClick={addTshirtHandler}
          disabled={!formIsValid}
        >
          Add Tshirt
        </button>
      </form>

      {!formIsValid && (
        <p className={classes.errorParagraph}>
          Please fill in all the fields with proper values.
        </p>
      )}
    </div>
  );
};

export default ShopForm;
