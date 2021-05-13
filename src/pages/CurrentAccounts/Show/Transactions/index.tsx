import { ArrowSmDownIcon, ArrowSmUpIcon, PrinterIcon } from "@heroicons/react/solid";
import { useLocation, Link } from "react-router-dom";

import Button from "components/Button";
import MoneyText from "components/MoneyText";

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
                          {item % 3 === 0 && (
                            <span className="text-sm text-gray-600 rounded-full">
                              <MoneyText amount={3600} />
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          {item % 3 !== 0 && (
                            <span className="text-sm text-gray-600 rounded-full">
                              <MoneyText amount={3600} />
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-right">
                          <span className="text-sm text-gray-600 rounded-full">
                            <MoneyText amount={3600} /> {item % 3 !== 0 ? "(A)" : "(B)"}
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
};

export default Transactions;
