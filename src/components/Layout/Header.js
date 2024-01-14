import {Fragment} from 'react'

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
   return (<Fragment>
       <header className={classes.header}>
        <h1>Trends Shop</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
       </header>

    </Fragment>
   )}

export default Header;