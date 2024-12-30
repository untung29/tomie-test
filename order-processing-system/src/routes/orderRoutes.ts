import express, { Request, Response } from "express";
import { fetchProductById } from "../services/productService";
import { placeOrder, getOrders } from "../services/orderService";

const router = express.Router();

// Place an order for a product
router.post("/", async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  // Validate input
  if (!productId || !quantity || quantity <= 0) {
    res.status(400).json({ message: "Invalid productId or quantity" });

    return;
  }

  const product = await fetchProductById(Number(productId));

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  if (!product.availability) {
    res.status(409).json({ message: "Product is out of stock" });
  }

  const order = placeOrder(product, quantity);
  res.json(order);
});

// Get all orders
router.get("/", (req: Request, res: Response) => {
  const orders = getOrders();
  res.json(orders);
});

export default router;
