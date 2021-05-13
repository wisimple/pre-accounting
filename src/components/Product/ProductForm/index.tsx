import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CheckIcon, PlusIcon } from "@heroicons/react/solid";
import { units } from "constants/units";
import Button from "components/Button";
import NewCategoryForm from "components/Category/CreateCategoryForm";
import Modal from "components/Modal";

import { IProduct } from "interfaces/IProduct";
import { categories } from "mockData/categories";

type ProductFormInputs = {
  catId: string;
  name: string;
  desc: string;
  unit: string;
  stock: number;
  sPrice: number;
  pPrice: number;
  active: boolean;
};

interface FormProps {
  onSubmitSuccess?: () => void;
  initialFormValues?: IProduct;
}

const ProductForm = ({ initialFormValues, onSubmitSuccess = () => {} }: FormProps) => {
  const { register, handleSubmit, reset } = useForm<ProductFormInputs>();
  const [isCategoryModalActive, setisCategoryModalActive] = useState(false);

  const onSubmit = (data: ProductFormInputs) => {
    console.log(data);

    onSubmitSuccess();
  };

  useEffect(() => {
    if (initialFormValues) {
      const { categoryId } = initialFormValues;
      reset({
        ...initialFormValues,
        catId: categoryId._id,
      });
    }
  }, [initialFormValues]);

  return (
    <>
      <Modal show={isCategoryModalActive} setShow={setisCategoryModalActive} title="Yeni Kategori Oluştur">
        <NewCategoryForm onSubmitSuccess={() => setisCategoryModalActive(false)} />
      </Modal>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-8 gap-6">
            <div className="flex flex-col col-span-8 sm:col-span-3">
              <div>
                <label htmlFor="category" className="label">
                  Kategori Seçiniz
                </label>
                <select {...register("catId")} id="category" autoFocus className="input">
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
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
            <div className="col-span-8 sm:col-span-5">
              <label htmlFor="name" className="label">
                Ürün İsimi
              </label>
              <input
                type="text"
                id="name"
                className="input"
                {...register("name", {
                  required: "Lütfen ürün ismini giriniz",
                })}
              />
            </div>
            <div className="col-span-8 sm:col-span-2">
              <label htmlFor="unit" className="label">
                Satış Birimi
              </label>
              <select {...register("unit")} id="unit" className="input">
                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-8 sm:col-span-2">
              <label htmlFor="stock" className="label">
                Başlangıç Stoğu
              </label>
              <input {...register("stock", { valueAsNumber: true })} id="stock" type="number" className="input" placeholder="0" />
            </div>
            <div className="col-span-8 sm:col-span-2">
              <label htmlFor="sPrice" className="label">
                Satış Fiyatı
              </label>
              <input
                {...register("sPrice", { valueAsNumber: true })}
                className="input"
                type="number"
                step="any"
                placeholder="0.00"
              />
            </div>
            <div className="col-span-8 sm:col-span-2">
              <label htmlFor="purchasePrice" className="label">
                Alış Fiyatı
              </label>
              <input
                {...register("pPrice", { valueAsNumber: true })}
                className="input"
                type="number"
                step="any"
                placeholder="0.00"
              />
            </div>
            <div className="col-span-8">
              <label htmlFor="desc" className="label">
                Ürün / Hizmet Açıklaması
              </label>
              <textarea {...register("desc")} id="desc" rows={3} className="input"></textarea>
            </div>
            <div className="col-span-8">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    {...register("active")}
                    id="active"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    defaultChecked={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="active" className="font-medium text-gray-700">
                    Aktif Ürün
                  </label>
                  <p className="text-gray-500">Bu ürünü alım satım işlemlerinde kullanıyorum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <Button icon={<CheckIcon />} type="submit">
            KAYDET
          </Button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
