import React from "react";
import { Modal } from "react-bootstrap";

const BrandModal = ({ show, onHide }) => {
  return (
    <div>
      <Modal show={true} onHide={true} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in,
          ut natus eos non iusto ipsa porro corrupti magni fuga aperiam
          veritatis ab necessitatibus rerum, ipsum, totam et consequuntur
          delectus!
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrandModal;
