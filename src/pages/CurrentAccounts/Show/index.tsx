import Heading from "components/Heading";
import { Switch, Route, useRouteMatch, NavLink, Link, useParams } from "react-router-dom";

import { SwitchHorizontalIcon, CashIcon, PencilAltIcon } from "@heroicons/react/solid";

import Invoices from "./Incoices";
import Transactions from "./Transactions";

import { currentAccounts } from "mockData/currentAccounts";
import { CurrentAccount } from "models/CurrentAccount";
import Button from "components/Button";

const CustomerShow = () => {
  const { url } = useRouteMatch();

  const account = new CurrentAccount(currentAccounts[0]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-grow items-center">
          <img src={account.avatarUrl} className="inline h-10 w-10 mr-2 rounded-full" />
          <Heading level="2">{account.name}</Heading>
          <Link to={`${url}/edit`}>
            <Button size="sm" color="gray" icon={<PencilAltIcon />} className="ml-4">
              Bilgileri güncelle
            </Button>
          </Link>
        </div>

        <div className="flex items-center px-2 py-1 text-gray-700 bg-gray-300 rounded-lg text-sm">
          <NavLink to={`${url}/transactions`} activeClassName="bg-gray-50" className="flex px-2 py-1 rounded-md">
            <CashIcon className="h-5 w-5" /> <span className="ml-1">Cari Hesap Ekstresi</span>
          </NavLink>
          <NavLink to={`${url}/invoices`} activeClassName="bg-gray-50" className="flex ml-2 px-2 py-1 rounded-md">
            <SwitchHorizontalIcon className="h-5 w-5" /> <span className="ml-1">Alış Satış İşlemleri</span>
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route path={`${url}/transactions`} component={Transactions} />
        <Route path={`${url}/invoices`} component={Invoices} />
      </Switch>
    </>
  );
};

export default CustomerShow;
