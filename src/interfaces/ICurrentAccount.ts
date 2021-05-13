import { CurrentAccountTypes } from "./ICurrentAccountType";

export interface ICurrentAccount {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  note?: string;
  debt: number;
  credit: number;
  address?: string;
  imageUrl?: string;
  type: CurrentAccountTypes;
  gender?: boolean;
  cAt: string;
  uAt?: string;
}
