import "./header.styles.scss";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

let Header = () => {
  const navigate = useNavigate();
  const SignOutUser = () => {
    auth.signOut();
    navigate("/");
  };
  let user = useSelector((state) => state.user);
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
      </div>
    </div>
  );
};

export default Header = React.memo(Header);
