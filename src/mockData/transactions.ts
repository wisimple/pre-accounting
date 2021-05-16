import { TransactionType, ITransaction } from "interfaces/ITransaction";

export const transactions: ITransaction[] = [
  {
    _id: "0",
    type: TransactionType.Sale,
    blnc: -5000,
    dbt: 5000,
    desc: "klima aldi ilerde vericek",
    cAt: "2021-04-21T19:26:02.986Z",
  },
  {
    _id: "1",
    type: TransactionType.Pay,
    blnc: 0,
    crdt: 5000,
    cAt: "2021-04-25T19:26:02.986Z",
  },
  {
    _id: "2",
    type: TransactionType.Sale,
    blnc: -10000,
    dbt: 10000,
    cAt: "2021-05-13T19:26:02.986Z",
  },
  {
    _id: "3",
    type: TransactionType.Pay,
    blnc: -6500,
    crdt: 3500,
    cAt: "2021-05-14T19:26:02.986Z",
  },
  {
    _id: "4",
    type: TransactionType.Purchase,
    blnc: 8500,
    crdt: 15000,
    cAt: "2021-05-17T19:26:02.986Z",
  },
  {
    _id: "5",
    type: TransactionType.Collect,
    blnc: 1500,
    dbt: 7000,
    cAt: "2021-05-17T20:26:02.986Z",
  },
];
