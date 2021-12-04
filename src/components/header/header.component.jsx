import "./header.styles.scss";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = () => {
  const navigate = useNavigate();
  const SignOutUser = () => {
    auth.signOut();
    navigate("/");
  };
  let user = useSelector((state) => state.user);
  return (
    <div className="header">
      <Link className="ui button red" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option ui button red" to="/shop">
          SHOP
        </Link>
        <Link className="option ui button red" to="/shop">
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

export default Header;
