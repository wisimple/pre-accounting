import { PlusIcon, PhoneIcon, ChevronRightIcon, SearchIcon, CollectionIcon } from "@heroicons/react/solid";
import { Link, useRouteMatch } from "react-router-dom";

import Button from "components/Button";
import MoneyText from "components/MoneyText";
import { currentAccounts } from "mockData/currentAccounts";
import { CurrentAccount } from "models/CurrentAccount";
import { useEffect, useState } from "react";
import Spinner from "components/Spinner";

const List = () => {
  const [loading, setLoading] = useState(true);
  const { url } = useRouteMatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="page-header">
          <CollectionIcon /> Cari Hesaplar
        </h2>
        <Link to={`${url}/create`}>
          <Button icon={<PlusIcon />}>Yeni Ekle</Button>
        </Link>
      </div>
      <div className="grid grid-cols-12 mt-4">
        <div className="relative col-span-3">
          <span className="absolute left-0 pl-3 text-gray-500 inset-y-0 flex items-center">
            <SearchIcon className="w-5 h-5" />
          </span>
          <input type="search" placeholder="Müşteri Arayın" className="input pl-10" />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="card">
              <Spinner loading={loading} />
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 text-gray-500 text-xs font-medium uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      Unvan
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

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Ayrıntılar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentAccounts.map((a) => {
                    const account = new CurrentAccount(a);

                    return (
                      <tr key={account._id} className="text-gray-600 hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full shadow object-cover" src={account.avatarUrl} alt="Profil" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium">{account.name}</div>
                              {account.phone && (
                                <a href={`tel:${account.phone}`} className="flex items-center text-sm text-gray-500">
                                  <PhoneIcon className="h-4 w-4" />
                                  <span className="ml-1">{account.phone}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span className="px-2">{account.debt !== 0 && <MoneyText amount={account.debt} />}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span className="px-2">{account.credit !== 0 && <MoneyText amount={account.credit} />}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className={`text-${account.balanceStatusColor}-600`}>
                            <MoneyText amount={account.absoluteBalance} />
                          </div>
                          {account.balance !== 0 && <span className="block text-xs">{account.balanceStatus}</span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Link to={`/current-accounts/${account._id}/transactions`} className="flex items-center ">
                            Ayrıntılar <ChevronRightIcon className="h-4 w-4 ml-1" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
