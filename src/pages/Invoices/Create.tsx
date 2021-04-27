import { useState } from "react";

import { ClipboardCheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/solid";
import NumberFormat from "react-number-format";
import { IProduct } from "interfaces/IProduct";

import { products } from "mockData/products";
import Button from "components/Button";

interface InvoiceItem {
  product: IProduct;
  amount: number;
}

const SaleCreate = () => {
  const [basketItems, setbasketItems] = useState<any[]>([]);
  const [isAddingProduct, setisAddingProduct] = useState(false);

  const [addproductForm, setaddproductForm] = useState();

  const add2Basket = () => {
    setbasketItems((prev) => [...prev, { product: products[0], amount: 1 }]);
  };

  return (
    <>
      <h2 className="page-header">
        <ClipboardCheckIcon /> Yeni Satış Yap
      </h2>

      <div className="shadow bg-white overflow-hidden rounded-md mt-4">
        <div className="px-5 py-6">
          <div className="grid grid-cols-8 gap-3">
            <div className="col-span-4">
              <label htmlFor="customer" className="label">
                Müşteri Seçiniz
              </label>
              <select name="customer" id="customer" className="input">
                <option value="1">Ali Veli</option>
                <option value="2">Ayse YILMAZ</option>
              </select>
            </div>
            <div className="col-span-2 space-y-3">
              <div>
                <label htmlFor="invDate" className="label">
                  Fatura Tarihi
                </label>
                <input type="date" name="invDate" id="invDate" className="input" />
              </div>
              <div>
                <label htmlFor="dueDate" className="label">
                  Vade Tarihi
                </label>

                <input type="date" name="dueDate" id="dueDate" className="input" />
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="no" className="label">
                Fatura No
              </label>
              <input type="text" name="no" id="no" className="input" />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Ürün
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          ></th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Miktar
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Fiyat
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Tutar
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {basketItems.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Urun</div>
                              <div className="text-sm text-gray-500">Kategori (son 5 adet)</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <input
                                type="text"
                                name="desc"
                                id="desc"
                                className="input"
                                placeholder="Açıklama veya notlar"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                <NumberFormat type="text" suffix=" adet" className="input w-20" defaultValue={1} />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-800">15000 ₺</td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-800">40000 ₺</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                              <button className="flex items-center text-gray-700 hover:text-gray-800 p-1">
                                <TrashIcon className="w-4 h-4 mr-1" /> Kaldır
                              </button>
                            </td>
                          </tr>
                        ))}

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select id="product" name="product" className="input">
                              {products.map((product) => (
                                <option key={product._id} value={product._id}>
                                  {product.name}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              name="desc"
                              id="desc"
                              className="input"
                              placeholder="Açıklama veya notlar"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <NumberFormat type="text" suffix=" adet" className="input w-20" defaultValue={1} />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-800">15000 ₺</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-800">40000 ₺</td>
                          <td className="py-4 text-sm text-center">
                            <Button onClick={() => add2Basket()}>
                              <PlusIcon className="w-4 h-4 mr-1" /> Ekle
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleCreate;
