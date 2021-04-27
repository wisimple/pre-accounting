import { ICategory } from "./ICategory";

export interface IProduct {
  _id: string;
  categoryId: ICategory;
  name: string;
  desc: string;
  sPrice: number;
  pPrice: number;
  active: boolean;
  cAt: string;
  uAt?: string;
}
