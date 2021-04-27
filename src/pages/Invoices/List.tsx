import InvoiceList from "components/Invoice/List";
import { SwitchHorizontalIcon, SearchIcon } from "@heroicons/react/solid";

const SalesList = () => {
  return (
    <div>
      <h2 className="page-header">
        <SwitchHorizontalIcon />
        Alış Satış İşlemleri
      </h2>
      <div className="grid grid-cols-4 gap-3 mt-4">
        <div className="relative">
          <span className="absolute left-0 pl-3 text-gray-500 inset-y-0 flex items-center">
            <SearchIcon className="w-5 h-5" />
          </span>
          <input type="search" placeholder="Müşteri Arayın" className="input pl-10" />
        </div>
        <select name="type" id="type" className="input">
          <option value="all">Tüm Faturalar</option>
          <option value="purchase">Alış Faturaları</option>
          <option value="sell">Satış Faturaları</option>
        </select>
        <div>
          <input type="date" name="date_from" id="date_from" className="input" placeholder="Zaman aralığı" />
        </div>
      </div>
      <InvoiceList />
    </div>
  );
};

export default SalesList;
