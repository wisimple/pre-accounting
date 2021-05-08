import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import { IIncovice } from "interfaces/IInvoice";
import { getAvatarUrl } from "helpers/customerHelpers";
import MoneyText from "components/MoneyText";

const invoices: IIncovice[] = [
  {
    _id: "1",
    no: "0000001",
    type: "sale",
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
    invDate: "2021-03-21T06:49:44.227Z",
    dueAt: "2021-03-21T06:49:44.227Z",
    cAt: "2021-03-21T06:49:44.227Z",
  },
  {
    _id: "2",
    no: "0000002",
    type: "purchase",
    customer: {
      _id: "1",
      name: "Ayse Fatma 4950",
      type: "person",
      gender: false,
      blnc: 0,
      cAt: "2021-03-29T06:49:44.227Z",
    },
    subTotal: 1100,
    discount: 10,
    total: 2350,
    items: [],
    invDate: "2021-03-21T06:49:44.227Z",
    dueAt: "2021-03-24T06:49:44.227Z",
    cAt: "2021-03-24T06:49:44.227Z",
  },
  {
    _id: "3",
    no: "0000003",
    type: "purchase",
    customer: {
      _id: "1",
      name: "Ayse Fatma 4950",
      type: "person",
      gender: false,
      blnc: 0,
      cAt: "2021-03-29T06:49:44.227Z",
    },
    subTotal: 1100,
    discount: 10,
    total: 5000,
    items: [],
    invDate: "2021-03-21T06:49:44.227Z",
    dueAt: "2021-03-27T06:49:44.227Z",
    cAt: "2021-03-27T06:49:44.227Z",
  },
];

interface InvoiceListProps {
  customerId?: string;
}

const InvoiceList = ({ customerId }: InvoiceListProps) => {
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
                    Fatura Tipi
                  </th>

                  {!customerId && (
                    <th scope="col" className="px-6 py-3 text-left">
                      Müşteri
                    </th>
                  )}

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
                      <div className="text-sm text-gray-900">{invoice.no}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {invoice.type === "sale" ? "Satış Faturası" : "Alış Faturası"}
                      </div>
                    </td>
                    {!customerId && (
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
                    )}

                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <MoneyText amount={invoice.total} />
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {new Date(invoice.cAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {new Date(invoice.dueAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <Link
                        to={"/invoices/" + invoice._id}
                        className="flex items-center text-blue-600 hover:text-blue-900"
                      >
                        Görüntüle <ChevronRightIcon className="h-5 w-5" />
                      </Link>
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
};

export default InvoiceList;
