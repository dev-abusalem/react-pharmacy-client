import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'; // Assuming you've installed 'react-bootstrap' package


function PopupModal({title, desc , btnInfo}) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
        
      <div onClick={handleShow}>
        { btnInfo }
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{desc}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PopupModal;
