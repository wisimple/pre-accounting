import { useState } from "react";
import Heading from "components/Heading";
import Input from "components/Input";

import Modal from "components/Modal";
import Button from "components/Button";
import { DocumentAddIcon, PlusIcon } from "@heroicons/react/solid";

import CurrencyInput from "react-currency-input-field";
import NewCategoryForm from "components/Category/NewCategoryForm";

const ProductEdit = () => {
  const [isCategoryModalActive, setisCategoryModalActive] = useState(false);
  const [isActive, setisActive] = useState(true);
  return (
    <>
      <Modal open={isCategoryModalActive} setOpen={setisCategoryModalActive}>
        <NewCategoryForm />
      </Modal>
      <div className="flex justify-between">
        <Heading level="2">Ürün / Hizmet Bilgilerini Güncelle</Heading>
      </div>

      <form className="mt-4">
        <div className="shadow overflow-hidden rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="flex flex-col col-span-6 sm:col-span-2">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Kategori Seçiniz
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>Elektronik</option>
                    <option>Ev Eşyası</option>
                    <option>Beyaz Eşya</option>
                  </select>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    className="flex items-center text-sm p-1 text-blue-600"
                    onClick={() => setisCategoryModalActive(true)}
                  >
                    <PlusIcon className="h-4 w-4" /> Yeni Kategori Oluştur
                  </button>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ürün İsimi
                </label>
                <Input type="text" id="name" name="name" defaultValue="12'lik rota klima" />
              </div>
              <div className="col-span-6">
                <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                  Ürün / Hizmet Açıklaması
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  rows={3}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                >
                  tüketiciler için ücretsiz bir bilgi servisidir. Alışveriş öncesi sipariş edilecek ürünle ilgili
                  geçerli bilgi her zaman için ilgili satıcıdan alınmalıdır. akakce.com'da verilen bilgilerdeki
                  hatalardan, eksikliklerden veya bu bilgilere dayanılarak yapılan işlemler sonucu meydana gelebilecek
                  her
                </textarea>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="salePrice" className="label">
                  Satış Fiyatı
                </label>
                <CurrencyInput
                  suffix=" ₺"
                  step={1}
                  decimalScale={2}
                  id="salePrice"
                  name="salePrice"
                  placeholder="0.00 ₺"
                  className="input"
                  value={100}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="purchasePrice" className="label">
                  Alış Fiyatı
                </label>
                <CurrencyInput
                  suffix=" ₺"
                  step={1}
                  decimalScale={2}
                  id="purchasePrice"
                  name="purchasePrice"
                  placeholder="0.00 ₺"
                  className="input"
                  value={200}
                />
              </div>
              <div className="col-span-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      defaultChecked={true}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                      Aktif Kullanılan Ürün
                    </label>
                    <p className="text-gray-500">Kullanmadığınız ürünleri pasifleştirebilirsiniz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Button loading>
              <DocumentAddIcon className="h-4 w-4 mr-2" /> KAYDET
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProductEdit;
