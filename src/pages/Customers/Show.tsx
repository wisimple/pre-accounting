import Heading from "components/Heading";
import { getAvatarUrl } from "helpers/customerHelpers";
import { ICustomer } from "interfaces/ICustomer";
import { IIncovice } from "interfaces/IInvoice";
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
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

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
            to={`/customers/${params.id}/sales`}
            activeClassName="bg-gray-50"
            className="flex ml-2 px-2 py-1 rounded-md"
          >
            <SwitchHorizontalIcon className="h-5 w-5" /> <span className="ml-1">Alış Satış İşlemleri</span>
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-end mt-3">
        <div className="px-2">
          {pathname.split("/").pop() === "transactions" ? (
            <>
              <Link to="/">
                <Button size="sm" color="green">
                  <ArrowSmDownIcon className="h-4 w-4 mr-1" /> Tahsilat Yap
                </Button>
              </Link>
              <Link to="/" className="ml-2">
                <Button size="sm" color="gray">
                  <ArrowSmUpIcon className="h-4 w-4 mr-1" /> Ödeme Yap
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <Button size="sm" color="gray">
                  <ClipboardListIcon className="h-4 w-4 mr-1" /> Alış Yap
                </Button>
              </Link>
              <Link to="/" className="ml-2">
                <Button size="sm" color="green">
                  <ClipboardCheckIcon className="h-4 w-4 mr-1" /> Satış Yap
                </Button>
              </Link>
            </>
          )}
        </div>
        <Button>
          <PrinterIcon className="h-5 w-5 mr-1" /> Yazdır
        </Button>
      </div>
      <Switch>
        <Route path={`${url}/transactions`} component={Transactions} />
        <Route path={`${url}/sales`} component={Sales} />
      </Switch>
    </>
  );
};

function Transactions() {
  return (
    <>
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

const invoices: IIncovice[] = [
  {
    _id: "1",
    number: "0000001",
    customer: {
      _id: "1",
      name: "Ali Veli 4950",
      type: "person",
      gender: true,
      blnc: 0,
      cAt: "2021-03-29T06:49:44.227Z",
    },
    subTotal: 1100,
    discount: 10,
    total: 1000,
    items: [],
    dueAt: "2021-03-29T06:49:44.227Z",
    cAt: "2021-03-29T06:49:44.227Z",
  },
  // More invoices...
];

function Sales() {
  return (
    <div className="flex flex-col mt-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left">
                    Fatura No
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Kişi / Kurum
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Tutar
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Tarih
                  </th>
                  <th scope="col" className="px-6 py-3 text-left">
                    Fatura Tarihi
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">İşlem</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{invoice.number}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={getAvatarUrl(invoice.customer)} alt="Profil" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{invoice.customer.name}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm">{invoice.total}.00 ₺</td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {new Date(invoice.cAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {new Date(invoice.dueAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Görüntüle
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerShow;
