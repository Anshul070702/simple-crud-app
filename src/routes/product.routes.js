import { Router } from "express";
import {
  getProducts,
  getSingleProduct,
  createProduct,
  getUpdatedProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

//  create products (C)
router.post("/", createProduct);

// get all products (R)
router.get("/", getProducts);

// get single product (R)
router.get("/:id", getSingleProduct);

// update product (U)
router.put("/:id", getUpdatedProduct);

// delete product (D)
router.delete("/:id", deleteProduct);
export default router;
