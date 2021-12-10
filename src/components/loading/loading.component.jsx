import "./loading.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Loading = () => {
  return (
    <div className="loading_div">
      <Logo className="loading_img" />
      {/* <img className="loading_img" src="http://localhost:3000/logo192.png" /> */}
    </div>
  );
};

export default Loading;
