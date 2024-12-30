export type MockResponse = {
  id: number;
  title: string;
  body: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  availability: boolean;
};

export type Order = {
  quantity: number;
} & Product;
