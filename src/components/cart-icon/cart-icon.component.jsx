import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCart } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
};

export default CartIcon;
