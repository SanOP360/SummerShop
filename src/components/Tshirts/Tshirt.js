import React from 'react'
import classes from './AvailableTshirts.module.css';
import TshirtAddForm from './TshirtAddForm';


const Tshirt=({data})=>{
    return(
        <li className={classes.tshirtList} key={data.id}>
       <div className={classes.list}>
         <span className={classes.tshirtName}>{data.name}</span>
         <span className={classes.tshirtDesc}>{data.description}</span>
         <span className={classes.tshirtPrice}> {data.price} Rs</span>
         <div className={classes.tshirtQuant}>
           <span className={classes.tshirtName}>Availaibilty:</span>
           <span className={classes.SizeQuant}>S:{data.sizes.S}</span>
           <span className={classes.SizeQuant}>M:{data.sizes.M}</span>
           <span className={classes.SizeQuant}>L:{data.sizes.L}</span>
         </div>
       </div>

       <TshirtAddForm id={data.id} item={data}></TshirtAddForm>
     </li>

    )
     
}
export default Tshirt