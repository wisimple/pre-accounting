import { ChevronRightIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import { Link } from "react-router-dom";

import { products } from "mockData/products";
import MoneyText from "components/MoneyText";

export default function ProductList() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="page-header">
          <ShoppingCartIcon /> Ürün ve Hizmetler
        </h2>
        <Link to="/products/create">
          <Button size="sm">
            <PlusIcon className="h-6 w-6" />
            Yeni Ekle
          </Button>
        </Link>
      </div>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      Kategori
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Ürün / Hizmeti
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Fiyat
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Aktif
                    </th>
                    <th scope="col" className="px-6 py-3 text-left"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((p) => (
                    <tr key={p._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img src="/images/no-image.png" alt="No image" className="w-8 h-8 mr-2 rounded-sm" />
                          <span className="text-gray-800 text-sm">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-gray-900">{p.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <MoneyText amount={p.sPrice} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {p.active ? "Aktif" : "Pasif"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to={`/products/${p._id}`} className="flex items-center text-blue-600 text-sm">
                          Ayrıntılar <ChevronRightIcon className="w-4 h-4 mr-1" />
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
    </>
  );
}
