import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => {
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
      </div>
    </div>
  );
};
export default Header;
