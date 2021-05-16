import { formatMoney } from "helpers/moneyHelpers";
import { CurrencyStyles, MoneyStyles } from "./styles";

interface MoneyTextProps {
  amount?: number;
  currency?: string;
  balance?: number;
  bold?: boolean;
}

const MoneyText = ({ amount = 0, currency = "₺", balance, bold = false }: MoneyTextProps) => {
  return (
    <MoneyStyles bold={bold}>
      {formatMoney(amount)}
      <CurrencyStyles>{currency}</CurrencyStyles>
      {balance && balance !== 0 ? (
        <span className={`ml-1 text-${balance > 0 ? "red" : "blue"}-400 `}>{balance > 0 ? "B" : "A"}</span>
      ) : null}
    </MoneyStyles>
  );
};

export default MoneyText;
