import { formatMoney } from "helpers/moneyHelpers";

interface MoneyTextProps {
  amount?: number;
  currency?: string;
}

const MoneyText = ({ amount = 0, currency = "₺" }: MoneyTextProps) => {
  return (
    <span>
      {formatMoney(amount)} {currency}
    </span>
  );
};

export default MoneyText;
