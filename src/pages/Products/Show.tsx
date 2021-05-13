import { IProduct } from "interfaces/IProduct";
import Button from "components/Button";
import { PencilAltIcon } from "@heroicons/react/solid";
import { Link, useRouteMatch } from "react-router-dom";
import MoneyText from "components/MoneyText";
import { getUnitFromValue } from "helpers/productHelpers";
import { product } from "mockData/products";

const ProductShow = () => {
  const { url } = useRouteMatch();

  const productUnitAbbr = getUnitFromValue(product.unit).abbr;
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg">
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <div className="text-lg leading-6 font-medium text-gray-900">{product.name}</div>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{product.categoryId.name} kategorisi</p>
        </div>
        <Link to={url + "/edit"}>
          <Button icon={<PencilAltIcon />}>Ürün bilgilerini güncelle</Button>
        </Link>
      </div>
      <div className="border-t border-gray-200">
        <dl className="">
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Resimler</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
              <img src="/images/no-image.png" alt="No image" className="h-32 w-32 rounded-md" />
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Alış Fiyatı</dt>
            <dd className="mt-1 text-gray-700 sm:mt-0 sm:col-span-2">
              <MoneyText amount={product.pPrice} />
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Satış Fiyatı</dt>
            <dd className="mt-1 text-gray-700 sm:mt-0 sm:col-span-2">
              <MoneyText amount={product.sPrice} />
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Stok Durumu</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
              <span className="text-lg">10 {productUnitAbbr}</span>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Ürün Adı</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">{product.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Kategori</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">{product.categoryId.name}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium">Açıklama</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">{product.desc}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProductShow;
