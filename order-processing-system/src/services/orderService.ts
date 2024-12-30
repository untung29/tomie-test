import { Order, Product } from "../types";

const orders: Record<string, Order> = {};

// Place an order for a product
export const placeOrder = (product: Product, quantity: number): Order => {
  const productId = product.id.toString();

  const order: Order = {
    quantity: quantity,
    ...product,
  };

  orders[productId] = order;
  return order;
};

// Get all orders
export const getOrders = (): Record<string, Order> => {
  return orders;
};
