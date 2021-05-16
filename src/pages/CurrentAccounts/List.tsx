import {
  PlusIcon,
  PhoneIcon,
  ChevronRightIcon,
  SearchIcon,
  CollectionIcon,
  ChevronDownIcon,
  SelectorIcon,
  FilterIcon,
} from "@heroicons/react/solid";
import { Link, useRouteMatch } from "react-router-dom";

import Button from "components/Button";
import MoneyText from "components/MoneyText";
import { currentAccounts } from "mockData/currentAccounts";
import { CurrentAccount } from "models/CurrentAccount";
import { useEffect, useState } from "react";
import Spinner from "components/Spinner";
import Pagination from "components/Pagination";
import useQuery from "hooks/useQuery";
import CurrentAccountList from "components/CurrentAccount/CurrentAccountList";

const List = () => {
  const [loading, setLoading] = useState(true);

  const query = useQuery();
  const [activePage, setActivePage] = useState<number>(parseInt(query.get("page") || "1"));
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
      <div className="mt-4">
        <form className=" grid grid-cols-12 gap-3">
          <div className="relative col-span-3">
            <label htmlFor="name" className="label">
              Cari Hesap İsmi
            </label>
            <div className="relative">
              <span className="absolute left-0 pl-3 text-gray-500 inset-y-0 flex items-center">
                <SearchIcon className="w-5 h-5" />
              </span>
              <input type="search" id="name" placeholder="Ara..." className="input pl-10" />
            </div>
          </div>
          <div className="col-span-3">
            <label htmlFor="catId" className="label">
              Kategori
            </label>
            <select name="catId" id="catId" className="input">
              <option value="0">Tümü</option>
              <option value="0">Tedarikciler</option>
              <option value="1">Kredi karti</option>
            </select>
          </div>
          <div className="col-span-3">
            <label htmlFor="balance" className="label">
              Bakiye
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">₺</span>
              </div>
              <input
                type="number"
                name="balance"
                id="balance"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
                step={1}
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="condition" className="sr-only">
                  Koşul
                </label>
                <select
                  id="condition"
                  name="condition"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option value="">Tümü</option>
                  <option value="less">'den az</option>
                  <option value="more">'den fazla</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex items-end">
            <Button type="submit" icon={<FilterIcon />} color="gray">
              Filtrele
            </Button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <CurrentAccountList
          loading={loading}
          activePage={activePage}
          currentAccounts={currentAccounts}
          onPageChanged={setActivePage}
        />
      </div>
    </>
  );
};

export default List;
