import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BrandModal from "./BrandModal";

const Brand = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="table-content">
      <div className="table-content-header">
        <h2>Brands</h2>
        <button onClick={() => setModal(true)}>
          <AiOutlinePlus /> Create new Brand
        </button>
      </div>
      <div className="table-content-list"></div>
      <BrandModal show={modal} onHide={() => setModal(false)} />
    </div>
  );
};

export default Brand;
