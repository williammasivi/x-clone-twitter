import React from "react";
import privname from "../assets/images/Profile-Photo.png";

/**
 * Sibebar Profile UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */
const SidebarProfile = ({ profURl, privURL, morURL }) => {
  const imageStyle = {
    height: "18px",
    width: "18px",
  };
  return (
    <div className="sidebar-profile flex flex-ai-c">
      <img src={profURl} />
      <div>
        <div className="flex">
          Bradley Ortiz
          <img src={privname} style={imageStyle} />
        </div>
        <div>@Bradley ...</div>
      </div>
      <img src={morURL} />
    </div>
  );
};

export default SidebarProfile;
