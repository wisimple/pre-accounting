import { ICustomer } from "./ICustomer";
import { IProduct } from "./IProduct";

export interface IIncovice {
  _id: string;
  number?: string;
  customer: ICustomer;
  dueAt: string;
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
  cAt: string;
  uAt?: string;
}
