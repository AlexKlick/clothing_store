import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import MenuItems from "../menu-items/menu-items.component";
import "./directory.styles.scss";

let Directory = () => {
  const data = {
    sections: [
      {
        title: "hats",
        imageUrl: "hats.jpg",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "jackets.jpg",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "sneakers.jpg",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "womens.jpg",
        id: 4,
        linkUrl: "shop/womens",
        size: "large",
      },
      {
        title: "mens",
        imageUrl: "mens.jpg",
        id: 5,
        linkUrl: "shop/mens",
        size: "large",
      },
    ],
  };

  return (
    <div className="directory-menu">
      <MenuItems props={data.sections} />
    </div>
  );
};
export default Directory = React.memo(Directory);
