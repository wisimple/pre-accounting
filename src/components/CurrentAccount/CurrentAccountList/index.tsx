import { PhoneIcon, ChevronRightIcon, ChevronDownIcon, SelectorIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import MoneyText from "components/MoneyText";
import { CurrentAccount } from "models/CurrentAccount";
import Spinner from "components/Spinner";
import Pagination from "components/Pagination";
import { ICurrentAccount } from "interfaces/ICurrentAccount";

interface ListProps {
  currentAccounts: ICurrentAccount[];
  loading?: boolean;
  activePage?: number;
  onPageChanged?: (page: number) => void;
}

interface ItemProps {
  currentAccount: ICurrentAccount;
}

const CurrentAccountItem = ({ currentAccount }: ItemProps) => {
  const account = new CurrentAccount(currentAccount);

  return (
    <tr key={account._id} className="text-gray-600 hover:bg-gray-100">
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
        <div className={account.isOwed === undefined ? "text-gray-600" : account.isOwed ? "text-blue-600" : "text-yellow-600"}>
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
};

const CurrentAccountList = ({ loading = true, activePage = 1, onPageChanged = () => {}, currentAccounts = [] }: ListProps) => {
  // const pageTotalDebt = currentAccounts.reduce((total, { debt }) => {
  //   return total + debt;
  // }, 0);

  // const pageTotalCredit = currentAccounts.reduce((total, { credit }) => {
  //   return total + credit;
  // }, 0);

  // const pageTotalBalance = pageTotalCredit - pageTotalDebt;
  // const isPageTotalOved = pageTotalBalance < 0;

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="card">
            <Spinner loading={loading} />
            <table className="table">
              <thead className="thead">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left cursor-pointer hover:bg-gray-300">
                    <div className="flex items-center">
                      Unvan <ChevronDownIcon className="h-4 w-4 ml-1" />
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 text-right cursor-pointer hover:bg-gray-300">
                    <div className="flex items-center justify-end">
                      Borç <SelectorIcon className="h-4 w-4 ml-1" />
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 cursor-pointer hover:bg-gray-300">
                    <div className="flex items-center justify-end">
                      Alacak <SelectorIcon className="h-4 w-4 ml-1" />
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 text-right cursor-pointer hover:bg-gray-300">
                    <div className="flex items-center justify-end">
                      Bakiye <SelectorIcon className="h-4 w-4 ml-1" />
                    </div>
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Ayrıntılar</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentAccounts.map((a) => (
                  <CurrentAccountItem currentAccount={a} />
                ))}
                {/* <tr className="bg-gray-50 text-gray-700">
                  <td className="text-right">Sayfa Toplamı</td>
                  <td className="px-6 py-2 whitespace-nowrap text-right">
                    <MoneyText amount={pageTotalDebt} bold />
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-right">
                    <MoneyText amount={pageTotalCredit} bold />
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-right">
                    <span
                      className={
                        pageTotalBalance < 0 ? "text-blue-600" : pageTotalBalance === 0 ? "text-gray-600" : "text-yellow-600"
                      }
                    >
                      <MoneyText amount={Math.abs(pageTotalBalance)} bold />
                    </span>
                    <span className="block text-xs">{pageTotalBalance > 0 ? "Ödenecek" : "Tahsil Edilecek"}</span>
                  </td>
                  <td></td>
                </tr> */}
                <tr className="bg-gray-100 text-gray-800">
                  <td className="text-right">Genel Toplam</td>
                  <td className="px-6 py-2 whitespace-nowrap text-right">
                    <MoneyText amount={22000} bold />
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-right">
                    <MoneyText amount={23500} bold />
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-right">
                    <span className="text-blue-600">
                      <MoneyText amount={Math.abs(1000)} bold />
                    </span>
                    <span className="block text-xs">Tahsil Edilecek</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <Pagination activePage={activePage} totalPageNumber={100} onPageChanged={onPageChanged} showDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAccountList;
