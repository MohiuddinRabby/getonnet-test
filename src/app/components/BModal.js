import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../../global/context/CartContext";

const BModal = (props) => {
  const { state } = useContext(CartContext);
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
        {state?.cart?.map((itemsInCart) => (
          <div key={itemsInCart?.id} style={{ listStyle: "none",fontWeight:'bold' }}>
            <li>Name: {itemsInCart?.name}</li>
            <li>Price: {itemsInCart?.price}</li>
            <li><button className="btn button-secondary btn-sm">X</button></li>
            <hr />
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className="btn button-main btn-sm">Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default BModal;
