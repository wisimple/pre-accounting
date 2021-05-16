import useQuery from "hooks/useQuery";

const PaymentCreate = () => {
  const query = useQuery();
  const currentAccountId: string | null = query.get("cAId");
  return (
    <div>
      <h1>Payment Create {currentAccountId}</h1>
    </div>
  );
};

export default PaymentCreate;
