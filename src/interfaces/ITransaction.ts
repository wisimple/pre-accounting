import { ICurrentAccount } from "./ICurrentAccount";

export enum TransactionType {
  Sale,
  Purchase,
  Collect,
  Pay,
}

export interface ITransaction {
  _id: string;
  type: TransactionType;
  dbt?: number;
  crdt?: number;
  blnc: number;
  desc?: string;
  cAt: string;
  uAt?: string;
}

export interface ITransactionWithAccount extends ITransaction {
  cAId: ICurrentAccount;
}
