import React from "react";
import MenuItem from "../menu-items/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    const nemuItems = () => {
      this.state.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ));
    };
    return (
      <div className="directory-menu">
        {nemuItems}
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory = React.memo(Directory);
