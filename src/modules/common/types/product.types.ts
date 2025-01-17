export type Product = {
  id: string;
  amount: number;
  title: string;
  category_id: string;
  user_id: string;
};

export type ProductCategory = {
  title: string;
  id: string;
};
