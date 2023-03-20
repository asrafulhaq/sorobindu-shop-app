import express from "express";
import {
  createProducts,
  getAllProducts,
} from "../controllers/productController.js";

// create router
const router = express.Router();

// routes
router.route("/").get(getAllProducts).post(createProducts);

// export
export default router;
