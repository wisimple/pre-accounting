import { PlusIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import Heading from "components/Heading";

const products = [
  { _id: "1", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "2", name: "12 kg tup", category: { _id: "1", name: "Tup" }, sellPrice: 100, active: true },
  { _id: "3", name: "24 kg tup", category: { _id: "1", name: "Tup" }, sellPrice: 100, active: true },
  { _id: "4", name: "12'lik klima", category: { _id: "1", name: "Tup" }, sellPrice: 100, active: true },
  { _id: "5", name: "12'lik klima", category: { _id: "1", name: "Tup" }, sellPrice: 100, active: true },
  { _id: "6", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "7", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "8", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "9", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "0", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "11", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "12", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "13", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "14", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "15", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "16", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "17", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "18", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "19", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
  { _id: "20", name: "12'lik klima", category: { _id: "1", name: "Beyaz Eşya" }, sellPrice: 100, active: true },
];

export default function ProductList() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading level="2">Ürün ve Hizmetler</Heading>
        <Button size="sm">
          <PlusIcon className="h-6 w-6" />
          Yeni Ekle
        </Button>
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
                        <span className="text-gray-800 text-sm">{p.category.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-gray-900">{p.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{p.sellPrice}.00 ₺</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {p.active ? "Aktif" : "Pasif"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap"></td>
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
