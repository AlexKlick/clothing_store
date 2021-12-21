import "./header.styles.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

let Header = () => {
  const toggle = useSelector((state) => state.toggleCart.hidden);
  let user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const SignOutUser = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="header">
      <div className="logo-welcome">
        <Link className="logo-link" to="/">
          <Logo className="logo" />
        </Link>
        {user.currentUser ? (
          <h3>Welcome {user.currentUser.displayName} </h3>
        ) : null}
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {user.currentUser ? (
          <div className="option" onClick={() => SignOutUser()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {toggle ? null : <CartDropdown />}
    </div>
  );
};

export default Header = React.memo(Header);
