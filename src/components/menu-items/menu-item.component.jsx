import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size }) => {
  let navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${title}`)}>
      <div
        style={{
          backgroundImage: `url(http://localhost:3000/stock_photos/${imageUrl})`,
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

export default MenuItem;
