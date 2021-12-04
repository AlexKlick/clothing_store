import React from "react";
import MenuItem from "../menu-items/menu-item.component";

let MenuItems = (props) => {
  return props.props.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ));
};
export default MenuItems = React.memo(MenuItems);
