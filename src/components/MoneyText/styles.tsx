import styled from "styled-components";

interface MoneyStyleProps {
  bold?: boolean;
}

export const MoneyStyles = styled.span<MoneyStyleProps>`
  font-family: "Roboto Mono", monospace;
  font-weight: ${(props) => (props.bold ? 600 : 400)};
`;

export const CurrencyStyles = styled.span`
  margin-left: 0.2rem;
`;
