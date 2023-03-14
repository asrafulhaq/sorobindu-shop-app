import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import mongoDBConnect from "./config/db.js";

// init express
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// set static
app.use(express.static("api/public"));

// routes
app.use("/api/v1/product", productCategoryRoute);
// envronment variable
const PORT = process.env.PORT || 9090;

// listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`server running on port ${PORT}`.bgGreen.black);
});
