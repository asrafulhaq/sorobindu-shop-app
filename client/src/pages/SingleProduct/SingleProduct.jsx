import React from "react";
import "./SingleProduct.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import Product from "../../components/Product/Product";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <Container>
        <Row>
          <Col md="6">
            <div className="product-photo">
              <img
                src="https://www.healthychildren.org/SiteCollectionImagesArticleImages/hes-up-to-no-good.jpg?RenditionID=6"
                alt=""
              />
            </div>
          </Col>
          <Col md="6">
            <div className="product-info">
              <h1>Product title</h1>

              <div className="price">
                <span className="reg">$200</span>
                <span className="sale">$90</span>
              </div>
              <div className="desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam ex ratione iste saepe eius culpa.
                </p>
              </div>
              <span className="stock">20 in stock</span>
              <div className="cart-btn">
                <input type="number" />
                <Button className="cart-button">Add to Cart</Button>
                <Button className="wish-button">
                  <AiOutlineHeart />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md="12">
            <h2>Related product</h2>
          </Col>
          <Col md="12">
            <div className="related-products">
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProduct;
