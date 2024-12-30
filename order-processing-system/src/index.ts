import express from "express";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
