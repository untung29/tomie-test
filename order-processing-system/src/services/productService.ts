import axios from "axios";
import { MockResponse, Product } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<MockResponse[]>(BASE_URL);
  return response.data.map((product) => ({
    id: product.id,
    name: product.title,
    price: product.id,
    availability: product.id % 2 === 0 ? false : true,
  }));
};

// Fetch a single product by ID
export const fetchProductById = async (id: number): Promise<Product | null> => {
  try {
    const response = await axios.get<MockResponse>(`${BASE_URL}/${id}`);
    const product = response.data;
    return {
      id: product.id,
      name: product.title,
      price: product.id,
      availability: product.id % 2 === 0 ? false : true,
    };
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};
