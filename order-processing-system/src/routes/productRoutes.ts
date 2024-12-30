import express, { Request, Response } from "express";
import { fetchProducts, fetchProductById } from "../services/productService";

const router = express.Router();

// Get all products with optional availability filter
router.get("/", async (req: Request, res: Response) => {
  const { availability } = req.query;

  const products = await fetchProducts();

  if (availability !== undefined) {
    const availabilityFlag = availability === "true";
    const filteredProducts = products.filter(
      (product) => product.availability === availabilityFlag
    );
    res.json(filteredProducts);
    return;
  }

  res.json(products);
});

// Get a single product by ID
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await fetchProductById(Number(id));

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(product);
});

export default router;
