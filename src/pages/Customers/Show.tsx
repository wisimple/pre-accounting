import Heading from "components/Heading";
import { getAvatarUrl } from "helpers/customerHelpers";
import { ICustomer } from "interfaces/ICustomer";
import { Switch, Route, useParams, useRouteMatch, useLocation, NavLink, Link } from "react-router-dom";

import {
  SwitchHorizontalIcon,
  CashIcon,
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  PrinterIcon,
} from "@heroicons/react/solid";

import Button from "components/Button";

import InvoiceList from "components/Invoice/List";

const customer: ICustomer = {
  _id: "1",
  name: "Ali Yilmaz",
  phone: "05454224138",
  note: "Pazar günü ödeme yapacak",
  blnc: -5000.4,
  type: "company",
  address: "Anıt, Necip Fazıl Kısakürek Cd., 33430 Tarsus/Mersin",
  cAt: "2021-03-29T06:49:44.227Z",
  uAt: "2021-03-29T06:49:44.227Z",
};

const CustomerShow = () => {
  const params: { id: string } = useParams();

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-grow items-center">
          <img src={getAvatarUrl(customer)} className="inline h-10 w-10 mr-2" />
          <Heading level="2">{customer.name}</Heading>
        </div>

        <div className="flex items-center px-2 py-1 text-gray-700 bg-gray-300 rounded-lg text-sm">
          <NavLink
            to={`/customers/${params.id}/transactions`}
            activeClassName="bg-gray-50"
            className="flex px-2 py-1 rounded-md"
          >
            <CashIcon className="h-5 w-5" /> <span className="ml-1">Cari Hesap Ekstresi</span>
          </NavLink>
          <NavLink
            to={`/customers/${params.id}/invoices`}
            activeClassName="bg-gray-50"
            className="flex ml-2 px-2 py-1 rounded-md"
          >
            <SwitchHorizontalIcon className="h-5 w-5" /> <span className="ml-1">Alış Satış İşlemleri</span>
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route path={`/customers/:customerId/transactions`} component={Transactions} />
        <Route path={`/customers/:customerId/invoices`} component={Invoices} />
      </Switch>
    </>
  );
};

function Transactions() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center justify-end mt-3">
        <div className="px-2">
          <Link to={pathname + "/create/collect"}>
            <Button size="sm" color="green">
              <ArrowSmDownIcon className="h-4 w-4 mr-1" /> Tahsil Et
            </Button>
          </Link>
          <Link to={pathname + "/create/pay"} className="ml-2">
            <Button size="sm" color="gray">
              <ArrowSmUpIcon className="h-4 w-4 mr-1" /> Ödeme Yap
            </Button>
          </Link>
        </div>
        <Button>
          <PrinterIcon className="h-5 w-5 mr-1" /> Yazdır
        </Button>
      </div>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 text-gray-500 text-xs font-medium uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      Tarih
                    </th>

                    <th scope="col" className="px-6 py-3 text-left">
                      Açıklama
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      Borç
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      Alacak
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      Bakiye
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((item) => {
                    return (
                      <tr key={item}>
                        <td className="px-6 py-2 whitespace-nowrap text-left">
                          <span className="text-sm text-gray-600">22.02.2021 </span>
                        </td>
                        <td className="px-6 py-2 whitespace-pre-wrap">
                          <span className="text-sm text-gray-600">Sdfsdfsdf sdfsf</span>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          {item % 3 === 0 && <span className="text-sm text-gray-600 rounded-full">3600.00 ₺</span>}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          {item % 3 !== 0 && <span className="text-sm text-gray-600 rounded-full">3600.00 ₺</span>}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          <span className="text-sm text-gray-600 rounded-full">
                            3600.00 ₺ {item % 3 !== 0 ? "(A)" : "(B)"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-gray-100">
                    <td colSpan={2} className="text-right">
                      <span>Toplam</span>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right">
                      <span>4302.34 ₺</span>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right">
                      <span>6302.34 ₺</span>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right">
                      <span>6302.34 ₺ (B)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Invoices() {
  const params: { customerId: string } = useParams();
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center justify-end mt-3">
        <div className="px-2">
          <Link to={pathname + "/create/purchase"}>
            <Button size="sm" color="gray">
              <ClipboardListIcon className="h-4 w-4 mr-1" /> Alış Yap
            </Button>
          </Link>
          <Link to={pathname + "/create/sell"} className="ml-2">
            <Button size="sm" color="green">
              <ClipboardCheckIcon className="h-4 w-4 mr-1" /> Satış Yap
            </Button>
          </Link>
        </div>
        <Button>
          <PrinterIcon className="h-5 w-5 mr-1" /> Yazdır
        </Button>
      </div>
      <InvoiceList customerId={params.customerId} />
    </>
  );
}

export default CustomerShow;
