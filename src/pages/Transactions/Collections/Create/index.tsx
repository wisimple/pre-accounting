import useQuery from "hooks/useQuery";

const CollectionCreate = () => {
  const query = useQuery();
  const currentAccountId: string | null = query.get("cAId");

  return (
    <div>
      <h1>Collection create {currentAccountId}</h1>
    </div>
  );
};

export default CollectionCreate;
