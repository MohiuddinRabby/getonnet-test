import React from "react";

const RiflesListItems = (props) => {
  const { name, img, useablity } = props.rifles;
  return (
    <div>
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="ms-2 c-details">
              {/* <h6 className="mb-0">Mailchimp</h6> */}
              <button
                className={
                  useablity ? "btn btn-success btn-sm" : "btn btn-danger btn-sm"
                }
              >
                {useablity ? "New" : "Used"}
              </button>
            </div>
          </div>
          <div className="badge">
            <span><i className="far fa-heart fa-2x"></i></span>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="heading">Senior Product</h3>
          <div className="mt-5">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="mt-3">
              <span className="text1">
                32 Applied <span className="text2">of 50 capacity</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiflesListItems;
