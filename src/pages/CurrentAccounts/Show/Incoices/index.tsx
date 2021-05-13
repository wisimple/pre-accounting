import { useParams, useLocation, Link } from "react-router-dom";

import { ClipboardListIcon, ClipboardCheckIcon, PrinterIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import InvoiceList from "components/Invoice/List";

const Invoices = () => {
  const params: { customerId: string } = useParams();
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center justify-end mt-3">
        <div className="px-2">
          <Link to={pathname + "/create/purchase"}>
            <Button size="sm" color="gray" icon={<ClipboardListIcon />}>
              Alış Yap
            </Button>
          </Link>
          <Link to={pathname + "/create/sell"} className="ml-2">
            <Button size="sm" color="green" icon={<ClipboardCheckIcon />}>
              Satış Yap
            </Button>
          </Link>
        </div>
        <Button icon={<PrinterIcon />}>Yazdır</Button>
      </div>
      <InvoiceList customerId={params.customerId} />
    </>
  );
};

export default Invoices;
