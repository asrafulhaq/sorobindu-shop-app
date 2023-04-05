import express from "express";
import {
  createProducts,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { productMulter } from "../utils/multer.js";

// create router
const router = express.Router();

// routes
router.route("/").get(getAllProducts).post(productMulter, createProducts);
router.get("/:slug", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", productMulter, updateProduct);

// export
export default router;
