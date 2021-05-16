import { ArrowSmDownIcon, ArrowSmUpIcon, PrinterIcon } from "@heroicons/react/solid";
import { useLocation, Link } from "react-router-dom";

import Button from "components/Button";
import MoneyText from "components/MoneyText";
import { transactions } from "mockData/transactions";
import Transaction from "models/Transaction";
import { TransactionType } from "interfaces/ITransaction";
import SelectMenu from "components/SelectMenu";

const Transactions = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex items-center justify-end mt-3">
        <div className="px-2">
          <Link to={pathname + "/create/collect"}>
            <Button size="sm" color="blue" icon={<ArrowSmDownIcon />}>
              Tahsil Et
            </Button>
          </Link>
          <Link to={pathname + "/create/pay"} className="ml-2">
            <Button size="sm" color="yellow" icon={<ArrowSmUpIcon />}>
              Ödeme Yap
            </Button>
          </Link>
        </div>
        <Button icon={<PrinterIcon />}>Yazdır</Button>
      </div>
      <div>
        <form className="grid grid-cols-12">
          <div className="col-span-3">
            <label htmlFor="type" className="label">
              İşlem Türü
            </label>
            <select name="type" id="type" className="input">
              <option value="">Tümü</option>
              {[0, 1, 2, 3].map((item) => (
                <option value={TransactionType[item]}>{Transaction.getTypeString(item)}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="thead">
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
