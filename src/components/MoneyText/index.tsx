import { formatMoney } from "helpers/moneyHelpers";
import { CurrencyStyles, MoneyStyles } from "./styles";

interface MoneyTextProps {
  amount?: number;
  currency?: string;
  balance?: number;
}

const MoneyText = ({ amount = 0, currency = "₺", balance }: MoneyTextProps) => {
  return (
    <MoneyStyles>
      {formatMoney(amount)}
      <CurrencyStyles>{currency}</CurrencyStyles>
      {balance && balance !== 0 ? (
        <span className={`ml-1 text-${balance > 0 ? "red" : "blue"}-400 `}>{balance > 0 ? "B" : "A"}</span>
      ) : null}
    </MoneyStyles>
  );
};

export default MoneyText;
