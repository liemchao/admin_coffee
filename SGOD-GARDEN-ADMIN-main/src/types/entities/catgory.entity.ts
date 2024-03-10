type product = {
  _id: string;
  name: string;
  images: string[];
  price_original: number;
  price_new: number;
};

export type StoreCatgory = {
  _id: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  products: product[];
  name: string;
};
