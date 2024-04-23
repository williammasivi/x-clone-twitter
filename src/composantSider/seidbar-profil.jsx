import React from "react";
//import privname from "../assets/images/Profile-Photo.png";//

/**
 * Sibebar Profile UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */
const SidebarProfile = ({ profURl, privURL, morURL }) => {
  const imageStyle = {
    height: "40px",
    width: "60px",
  };
  return (
    <div className="flex gap-2 w-full">
      <img src="/Profile-Photo.png" style={imageStyle} />
      <div>
        <div className="flex">
          <span>Bradley Ortiz </span>
          <img src="/Private.svg" alt="" />
        </div>
        <span>@Bradley ...</span>
      </div>
      <img src="/" alt="" />
    </div>
  );
};

export default SidebarProfile;
