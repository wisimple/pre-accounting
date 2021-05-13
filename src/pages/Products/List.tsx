import { useState, useEffect } from "react";
import { ChevronRightIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import { Link } from "react-router-dom";

import { products } from "mockData/products";
import MoneyText from "components/MoneyText";
import { getUnitFromValue } from "helpers/productHelpers";
import Spinner from "components/Spinner";

export default function ProductList() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="page-header">
          <ShoppingCartIcon /> Ürün ve Hizmetler
        </h2>
        <Link to="/products/create">
          <Button icon={<PlusIcon />}>Yeni Ürün Ekle</Button>
        </Link>
      </div>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="card">
              <Spinner loading={loading} />
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 text-xs font-medium uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      Ürün Adı
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Fiyat
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Stok
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Durum
                    </th>
                    <th scope="col" className="px-6 py-3 text-left"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                  {products.map((product, i) => {
                    const unitAbbreviation = getUnitFromValue(product.unit).abbr;
                    return (
                      <tr key={product._id} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src="/images/no-image.png" alt="No image" className="w-8 h-8 mr-2 rounded-sm" />
                            <span className="flex flex-col">
                              <span>{product.name}</span>
                              <span className="text-xs text-gray-500">{product.categoryId.name}</span>
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <MoneyText amount={product.sPrice} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {product.stock} {unitAbbreviation}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {product.active ? "Aktif" : "Pasif"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={`/products/${product._id}`} className="flex items-center text-sm">
                            Ayrıntılar <ChevronRightIcon className="w-4 h-4 mr-1" />
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
}
