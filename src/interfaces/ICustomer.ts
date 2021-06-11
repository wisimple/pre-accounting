export type CustomerTypes = "company" | "person";
export interface ICustomer {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  note?: string;
  blnc: number;
  address?: string;
  imageUrl?: string;
  type: CustomerTypes;
  gender?: boolean;
  cAt: string;
  uAt?: string;
}
