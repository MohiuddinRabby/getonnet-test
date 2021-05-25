import React from "react";

const RiflesListItems = (props) => {
  const { name, img, useablity, category, price } = props.rifles;
  return (
    <div>
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="ms-2 c-details">
              {/* <h6 className="mb-0">Mailchimp</h6> */}
              <button
                className={
                  useablity
                    ? "btn button-main btn-sm"
                    : "btn button-secondary btn-sm"
                }
              >
                {useablity ? "New" : "Used"}
              </button>
            </div>
          </div>
          <div className="badge">
            <span>
              <i className="far fa-heart fa-2x"></i>
            </span>
          </div>
        </div>
        <div className="mt-5">
          <div className="">
            <div className="text-center">
              <img
                src={img}
                className="card-img-top"
                style={{ width: "180px", height: "112px" }}
                alt=""
              />
            </div>
            <div className="mt-3">
              <h4>{name}</h4>
              <span>{category}</span>
              <h5 className="py-2 color-main">{price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiflesListItems;
