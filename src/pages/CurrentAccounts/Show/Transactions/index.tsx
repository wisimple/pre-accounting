import { ArrowSmDownIcon, ArrowSmUpIcon, PrinterIcon } from "@heroicons/react/solid";
import { Link, useParams, useRouteMatch } from "react-router-dom";

import Button from "components/Button";
import MoneyText from "components/MoneyText";
import { transactions } from "mockData/transactions";
import Transaction from "models/Transaction";
import { TransactionType } from "interfaces/ITransaction";
import { currentAccounts } from "mockData/currentAccounts";

const Transactions = () => {
  const match: any = useRouteMatch({ path: "/current-accounts/:id/transactions" });

  const currentAccountId = match?.params.id || "";
  const currentAccount = currentAccounts[0];

  return (
    <>
      <div className="flex justify-between items-center mt-6">
        <div className="flex-grow">
          <form className="grid grid-cols-12">
            <div className="col-span-3">
              <label htmlFor="type" className="label">
                İşlem Türü
              </label>
              <select name="type" id="type" className="input">
                <option value="">Tümü</option>
                {[0, 1, 2, 3].map((item) => (
                  <option key={item} value={TransactionType[item]}>
                    {Transaction.getTypeString(item)}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div>
          <Link to={`/transactions/create/collection?cAId=${currentAccountId}`}>
            <Button size="sm" color="blue" icon={<ArrowSmDownIcon />}>
              Tahsil Et
            </Button>
          </Link>
          <Link to={`/transactions/create/payment?cAId=${currentAccountId}`} className="ml-2">
            <Button size="sm" color="yellow" icon={<ArrowSmUpIcon />}>
              Ödeme Yap
            </Button>
          </Link>
          <Button icon={<PrinterIcon />} className="ml-2">
            Yazdır
          </Button>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="card">
              <table className="table">
                <thead className="thead">
                  <tr className="bg-gray-100 font-semibold">
                    <th colSpan={6} className="py-4 text-base">
                      Cari Hesap Ekstresi
                    </th>
                  </tr>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      Tarih
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      İşlem Türü
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
                  {transactions.map((t, index) => {
                    const transaction = new Transaction(t);

                    return (
                      <tr key={transaction._id} className="text-gray-700">
                        <td className="px-6 py-2 whitespace-nowrap text-left">
                          <span className="text-sm">{transaction.cAtLocale}</span>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-left">
                          <span className="text-sm">{transaction.typeString}</span>
                        </td>
                        <td className="px-6 py-2 whitespace-pre-wrap">
                          <span className="text-sm">{transaction.desc}</span>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          {transaction.dbt && (
                            <span className="text-sm rounded-full">
                              <MoneyText amount={transaction.dbt} />
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          {transaction.crdt && (
                            <span className="text-sm rounded-full">
                              <MoneyText amount={transaction.crdt} />
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          <span className="text-sm rounded-full">
                            <MoneyText amount={transaction.balanceAbsolute} /> {transaction.isOwed ? "(B)" : "(A)"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-gray-100 text-gray-800">
                    <td colSpan={3} className="text-right">
                      Ekstre Toplamı
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right">
                      <MoneyText amount={22000} />
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right">
                      <MoneyText amount={23500} />
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-right">
                      <MoneyText amount={Math.abs(transactions[transactions.length - 1].blnc)} />
                      {transactions[transactions.length - 1].blnc < 0 ? "(B)" : "(A)"}
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
};

export default Transactions;
