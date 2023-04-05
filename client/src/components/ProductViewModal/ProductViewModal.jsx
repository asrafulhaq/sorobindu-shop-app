import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./ProductView.scss";

function ProductViewModal({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Single Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-quick-view">
            <div className="product-photo">
              <img
                src="https://waltonbd.com/image/catalog/category-banner/mobile/hm7-block.jpg"
                alt=""
              />
            </div>
            <div className="product-detils">
              <h2>Samsung S23 Ultra</h2>
              <hr />
              <div className="view-pricing">
                <span className="regular">$1200</span>
                <span className="sale">$900</span>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                asperiores ab reiciendis! Harum, expedita porro?
              </p>
              <div className="view-btns">
                <Button>Add to cart</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductViewModal;
