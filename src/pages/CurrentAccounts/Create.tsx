import { useHistory } from "react-router-dom";
import Heading from "components/Heading";
import CurrentAccountForm from "components/CurrentAccount/CurrenAccountForm";

const CustomerCreate = () => {
  const history = useHistory();

  return (
    <>
      <div className="flex justify-between">
        <Heading level="2">Yeni Cari Hesap Oluştur</Heading>
      </div>

      <div className="card mt-4">
        <CurrentAccountForm onSubmitSuccess={() => history.goBack()} />
      </div>
    </>
  );
};

export default CustomerCreate;
