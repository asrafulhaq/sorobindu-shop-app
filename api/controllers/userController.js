import User from "../models/User.js";
import bctypt from "bcryptjs";

// get all brands
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      users,
      message: "Get Users success",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({
      user,
      message: "Get Single user success",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // password bcrypt
    const salt = bctypt.genSaltSync(10);
    const pass = bctypt.hashSync(password, salt);

    const user = await User.create({
      name,
      email,
      password: pass,
    });
    res.status(200).json({
      user,
      message: "User created success",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({
      user,
      message: "User delete success",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      {
        ...data,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      user,
      message: "User Updated success",
    });
  } catch (error) {
    next(error);
  }
};
