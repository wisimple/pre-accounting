import { ITransaction, TransactionType } from "interfaces/ITransaction";

export default class Transaction implements ITransaction {
  _id: string;
  type: TransactionType;
  dbt?: number;
  crdt?: number;
  blnc: number;
  desc?: string;
  cAt: string;
  uAt?: string;

  constructor(t: ITransaction) {
    this._id = t._id;
    this.type = t.type;
    this.blnc = t.blnc;
    this.dbt = t.dbt;
    this.crdt = t.crdt;
    this.desc = t.desc;
    this.blnc = t.blnc;
    this.cAt = t.cAt;
    this.uAt = t.uAt;
  }

  static getTypeString(t: TransactionType): string {
    switch (t) {
      case TransactionType.Sale:
        return "Satış Faturası";
      case TransactionType.Purchase:
        return "Alış Faturası";
      case TransactionType.Collect:
        return "Tahsilat";
      case TransactionType.Pay:
        return "Ödeme";
    }
  }

  get cAtLocale(): string {
    return new Date(this.cAt).toLocaleDateString("tr", { month: "2-digit", year: "numeric", day: "2-digit" });
  }

  get balanceAbsolute(): number {
    return Math.abs(this.blnc);
  }

  get isOwed(): boolean | undefined {
    if (this.blnc === 0) return;

    return this.blnc < 0;
  }

  get typeString(): string {
    return Transaction.getTypeString(this.type);
  }
}
