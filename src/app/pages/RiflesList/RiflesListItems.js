import React, { useContext, useState } from "react";
import { CartContext } from "../../../global/context/CartContext";
import BModal from "../../components/BModal";

const RiflesListItems = (props) => {
  const { name, img, useablity, category, price } = props.rifles;
  const [modalShow, setModalShow] = useState(false);
  const { dispatch } = useContext(CartContext);
  const addtoNewCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      id: product?.id,
      name: product?.name,
      price: product?.price,
    });
  };
  return (
    <div>
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="ms-2 c-details">
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
            <span
              className="riflesItem_icon"
              onClick={() => setModalShow(true)}
            >
              <i
                className="far fa-heart fa-2x"
                onClick={() => addtoNewCart(props.rifles)}
              ></i>
            </span>
          </div>
        </div>
        <div className="mt-5">
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
      <BModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default RiflesListItems;
