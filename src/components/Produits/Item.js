import React, { useState } from "react";
import "./Produits.css";
import { Modal } from "react-bootstrap";
const Item = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card">
      <div className="image-container" >
        <img className="card-image" src={product.image} />
      </div>
      <div className="info-container">
        <h3 className="card-title">{product.titre}</h3>
        <p className="card-desc">{product.conciseDesc}</p>
        <button className="button" onClick={handleShow}>
          Détails
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header >
            <Modal.Title>
              <h3 className="card-title">{product.titre}</h3>
            </Modal.Title>
          </Modal.Header>
          <img className="modal-image" src={product.image} />
          <Modal.Body>{product.fullDesc}</Modal.Body>
          <Modal.Footer>
            <button className="button" onClick={handleClose}>
              Fermer
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default Item;
