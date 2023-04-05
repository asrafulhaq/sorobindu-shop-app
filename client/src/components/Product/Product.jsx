import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.scss";
import ProductViewModal from "../ProductViewModal/ProductViewModal";

const Product = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="product-item">
      <ProductViewModal show={show} onHide={() => setShow(false)} />
      <Card>
        <Link to="/ddfdfdfdf">
          <Card.Img src="https://waltonbd.com/image/catalog/category-banner/mobile/hm7-block.jpg"></Card.Img>
        </Link>
        <Card.Body>
          <Card.Title>Samsung S23</Card.Title>
          <div className="pricing">
            <span className="regular">$1200</span>
            <span className="sale">$900</span>
          </div>
          <div className="product-button">
            <Button className="cart-btn" variant="primary">
              Add to Cart
            </Button>
            &nbsp;
            <Button variant="info" onClick={() => setShow(true)}>
              View
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
