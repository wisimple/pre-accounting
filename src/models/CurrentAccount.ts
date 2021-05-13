import { ICurrentAccount } from "interfaces/ICurrentAccount";
import { CurrentAccountTypes } from "interfaces/ICurrentAccountType";

export class CurrentAccount implements ICurrentAccount {
  _id: string;
  name: string;
  email?: string | undefined;
  phone?: string | undefined;
  note?: string | undefined;
  debt: number;
  credit: number;
  address?: string | undefined;
  imageUrl?: string | undefined;
  type: CurrentAccountTypes;
  gender?: boolean | undefined;
  cAt: string;
  uAt?: string | undefined;

  constructor(account: ICurrentAccount) {
    this._id = account._id;
    this.name = account.name;
    this.debt = account.debt;
    this.credit = account.credit;
    this.type = account.type;
    this.cAt = account.cAt;

    this.email = account.email;
    this.phone = account.phone;
    this.note = account.note;
    this.address = account.address;
    this.gender = account.gender;
    this.uAt = account.uAt;
  }

  get avatarUrl(): string {
    return (
      this.imageUrl ||
      (this.type === "company"
        ? "/images/avatar/company.png"
        : this.gender
        ? "/images/avatar/male.png"
        : "/images/avatar/female.png")
    );
  }

  get balance(): number {
    return this.credit - this.debt;
  }

  get absoluteBalance(): number {
    return Math.abs(this.balance);
  }

  get balanceStatus(): string {
    return this.balance > 0 ? "Ödenecek" : "Tahsil Edilecek";
  }

  get isOwed(): boolean | undefined {
    if (this.balance === 0) {
      return;
    }
    return this.balance < 0;
  }

  get balanceStatusColor(): string | undefined {
    if (this.isOwed === undefined) return "gray";

    return this.isOwed ? "blue" : "yellow";
  }
}
