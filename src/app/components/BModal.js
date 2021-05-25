import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "../../global/context/CartContext";

const BModal = (props) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart ({state?.cart?.length})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state?.cart?.length === 0 ? (
          <h5 className="color-secondary">No items in Cart</h5>
        ) : (
          state?.cart?.map((itemsInCart) => (
            <div
              key={itemsInCart?.id}
              style={{ listStyle: "none", fontWeight: "bold" }}
            >
              <li>Name: {itemsInCart?.name}</li>
              <li>Price: {itemsInCart?.price}</li>
              <li>
                <button
                  className="btn button-secondary btn-sm"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_FROM_CART",
                      payload: { id: itemsInCart?.id },
                    })
                  }
                >
                  X
                </button>
              </li>
              <hr />
            </div>
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className="btn button-main btn-sm">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default BModal;
