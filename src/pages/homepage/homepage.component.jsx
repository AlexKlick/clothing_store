import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
let Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
export default Homepage = React.memo(Homepage);
