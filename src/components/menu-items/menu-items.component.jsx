import React from "react";
import MenuItem from "../menu-items/menu-item.component";

let MenuItems = (item) => {
  return item.props.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ));
};
export default MenuItems = React.memo(MenuItems);
