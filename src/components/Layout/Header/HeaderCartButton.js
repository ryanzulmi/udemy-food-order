import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberItem = cartCtx.items.reduce((crtAmount, item) => {
    return crtAmount + item.amount;
  }, 0)

  return (
    
      <button className={classes.button} onClick={props.onButtonHit}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberItem}</span>
      </button>
    
  );
};

export default HeaderCartButton;
