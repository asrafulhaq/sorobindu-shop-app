import Tag from "../models/Tag.js";

// get all product tags
export const getAllProductTags = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      message: "Tag all success",
    });
  } catch (error) {
    next(error);
  }
};

// get all product tags
export const createProductTags = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Tag.create({ name, slug });
    res.status(200).json({
      tag: data,
      message: "Tag created successful",
    });
  } catch (error) {
    next(error);
  }
};

// get all product tags
export const getSingleProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findById(id);
    res.status(200).json({
      tag: data,
      message: "get single tag success",
    });
  } catch (error) {
    next(error);
  }
};

// get all product tags
export const deleteProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      tag: data,
      message: "Delete tag success",
    });
  } catch (error) {
    next(error);
  }
};

// get all product tags
export const updateProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(id, { name, slug }, { new: true });
    res.status(200).json({
      tag: data,
      message: "Tag update  success",
    });
  } catch (error) {
    next(error);
  }
};
