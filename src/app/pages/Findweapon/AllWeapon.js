import React from "react";

const AllWeapon = (props) => {
  const { img, name } = props.allWeapon;
  return (
    <div>
      <img
        src={img}
        className="rounded-circle"
        style={{
          width: "92px",
          height: "70px",
          backgroundColor: "#f4f4f4",
        }}
        alt=""
      />
      <p>{name}</p>
    </div>
  );
};

export default AllWeapon;
