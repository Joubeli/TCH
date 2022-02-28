import React, {useState} from 'react';
import "./Produits.css";
import { Modal} from 'react-bootstrap'

const Item = ({product}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (            
    <div className='card'>
      <img className='card-image' src={product.image}/>
      <div className="info-container">
        <h3 className='card-title'>{product.titre}</h3>
        <p className='card-desc'>{product.desc}</p>
        <button className="button" onClick={handleShow}>Détails</button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3 className='card-title'>{product.titre}</h3>
            </Modal.Title>
          </Modal.Header>
            <img className='modal-image' src={product.image}/> 
            <Modal.Body>{product.desc}</Modal.Body>
          <Modal.Footer>
            <button className='button' onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  
  )
}

export default Item