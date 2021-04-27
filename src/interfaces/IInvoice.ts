import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";

export interface IIncovice {
  _id: string;
  no?: string;
  customer: ICustomer;

  type: "sale" | "purchase";
  items?: {
    productId: IProduct;
    desc: string;
    quantity: number;
    price: number;
  }[];
  subTotal: number;
  discount: number;
  total: number;
  notes?: string;
  invDate: string;
  dueAt: string;
  cAt: string;
  uAt?: string;
}
