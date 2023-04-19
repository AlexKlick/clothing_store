import React, { useEffect, useState } from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { toggleCart } from "../../redux/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

let CartDropdown = () => {
  const [toggleState, settoggleState] = useState();
  const toggle = useSelector((state) => state.toggleCart.hidden);
  const dispatch = useDispatch();
  return (
    <>
      {toggle ? null : (
        <div className="cart-dropdown">
          <div className="cart-items"></div>
          <CustomButton>Go To Checkout</CustomButton>
        </div>
      )}
    </>
  );
};
export default CartDropdown = React.memo(CartDropdown);
