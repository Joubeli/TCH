import React, { useState } from "react";
import "./Produits.css";
import { Modal } from "react-bootstrap";

const Item = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="card">
      <div className="image-container">
        <img alt="produit" onClick={handleShow} className="card-image" src={product.image} />
      </div>
      <div className="info-container">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-desc">{product.conciseDesc}</p>
        <button className="button" onClick={handleShow}>
          Détails
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>
              <h3 className="card-title">{product.title}</h3>
            </Modal.Title>
          </Modal.Header>
          <img alt="produit" className="modal-image" src={product.image} />
          <Modal.Body>
            {product.fullDesc}
            <br />
            Visitez{" "}
            <a
              className="modal-link"
              target="_blank"
              href={product.link}
              rel="noopener noreferrer"
            >
              {product.supplier}
            </a>
          </Modal.Body>
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
