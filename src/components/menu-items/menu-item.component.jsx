import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";
const images = require.context("../../assets/stock_photos", true);
let MenuItem = ({ title, imageUrl, size }) => {
  let dynamicImage = images(`./${imageUrl}`);
  console.log(`http://localhost:3000${dynamicImage.default}`);
  let navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${title}`)}>
      <div
        style={{
          backgroundImage: `url(http://localhost:3000${dynamicImage.default})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem = React.memo(MenuItem);
