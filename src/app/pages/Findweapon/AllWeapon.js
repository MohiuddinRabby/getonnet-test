import React from "react";

const AllWeapon = (props) => {
  const { img, name } = props.allWeapon;
  return (
    <div>
      <img src={img} style={{ width: "92px", height: "58px" }} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default AllWeapon;
