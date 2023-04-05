import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-area">
      <div className="sidebar-widget">
        <h3 className="widget-title">Search Product</h3>
        <hr />
        <input
          type="search"
          className="form-control"
          placeholder="Search . . . "
        />
      </div>
      <div className="sidebar-widget">
        <h3 className="widget-title">Categories</h3>
        <hr />
        <ul className="list">
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Brands</h3>
        <hr />
        <ul className="list">
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Tags</h3>
        <hr />
        <div className="tags-items">
          <a href="#">Eid</a>
          <a href="#">Puja</a>
          <a href="#">Corona</a>
          <a href="#">Rajniti</a>
        </div>
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Search Product</h3>
        <hr />
        <div className="price-search">
          <input type="text" placeholder="Min" />
          <input type="text" placeholder="max" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;