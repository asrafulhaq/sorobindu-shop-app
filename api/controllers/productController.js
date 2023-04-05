import { createSlug } from "../helper/slugCreate.js";
import Product from "../models/Product.js";
import { unlinkSync } from "fs";

// get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      message: "Get all products",
    });
  } catch (error) {
    next(error);
  }
};

// get all products
export const createProducts = async (req, res, next) => {
  try {
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      tags,
      brands,
    } = req.body;

    // get product photo name
    const photo = req.files["product-photo"][0].filename;

    // get gallery file name
    const gallery = [];
    [...req.files["product-gallery-photo"]].forEach((item) => {
      gallery.push(item.filename);
    });

    const data = await Product.create({
      name,
      slug: createSlug(name),
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      photo,
      gallery,
    });
    res.status(200).json({
      products: data,
      message: "Product created successful",
    });
  } catch (error) {
    next(error);
  }
};

// get all products
export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Product.findOne({ slug });
    res.status(200).json({
      product: data,
      message: "Get single product success",
    });
  } catch (error) {
    next(error);
  }
};

// get all products
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    // delete related files
    unlinkSync(`api/public/products/${data.photo}`);

    data.gallery.forEach((item) => {
      unlinkSync(`api/public/products/${item}`);
    });

    res.status(200).json({
      product: data,
      message: "Delete product success",
    });
  } catch (error) {
    next(error);
  }
};

// get all products
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      del_gall,
      categories,
      tags,
      brands,
    } = req.body;

    // get edit product
    const product = await Product.findById(id);

    // procut photo update
    let photo = product.photo;
    if (req.files["product-photo"]) {
      photo = req.files["product-photo"][0].filename;
      unlinkSync(`api/public/products/${product.photo}`);
    }

    // procut photo update
    let gallery_old = product.gallery;
    if (del_gall.length > 0) {
      gallery_old = product.gallery.filter((data) => !del_gall.includes(data));
    }

    let new_gallery = [];
    if (req.files["product-gallery-photo"]) {
      req.files["product-gallery-photo"].forEach((item) => {
        new_gallery.push(item.filename);
      });
    }

    if (del_gall.length > 0) {
      del_gall.forEach((item) => {
        unlinkSync(`api/public/products/${item}`);
      });
    }

    const final_gallery = gallery_old.concat(new_gallery);

    const data = await product.updateOne({
      name,
      slug: createSlug(name),
      gallery: final_gallery,
      photo,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
    });

    res.status(200).json({
      product: data,
      message: "Delete product success",
    });
  } catch (error) {
    next(error);
  }
};
