export interface ICustomer {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  note?: string;
  blnc: number;
  address?: string;
  imageUrl?: string;
  type: "company" | "person";
  gender?: boolean;
  cAt: string;
  uAt?: string;
}
