import { ICategory } from "./ICategory";
import { UnitTypes } from "./IUnit";
export interface IProduct {
  _id: string;
  categoryId: ICategory;
  name: string;
  desc?: string;
  sPrice: number;
  pPrice: number;
  stock: number;
  unit: UnitTypes;
  active: boolean;
  cAt: string;
  uAt?: string;
}
