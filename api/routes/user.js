import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

// create router
const router = express.Router();

// routes
router.get("/user", getAllUser);
router.get("/user/:id", getSingleUser);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.patch("/user/:id", updateUser);
router.put("/user/:id", updateUser);

// export
export default router;
