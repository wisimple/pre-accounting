import { IProduct } from "interfaces/IProduct";
import Button from "components/Button";
import { PencilAltIcon } from "@heroicons/react/solid";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const product: IProduct = {
  _id: "6",
  name: "Rota 12'lik klima",
  desc:
    "tüketiciler için ücretsiz bir bilgi servisidir. Alışveriş öncesi sipariş edilecek ürünle ilgili geçerli bilgi her zaman için ilgili satıcıdan alınmalıdır. akakce.com'da verilen bilgilerdeki hatalardan, eksikliklerden veya bu bilgilere dayanılarak yapılan işlemler sonucu meydana gelebilecek her ",
  categoryId: { _id: "1", name: "Beyaz Eşya" },
  sPrice: 100,
  pPrice: 120,
  active: true,
  cAt: "2021-04-26T19:26:02.986Z",
};

const ProductShow = () => {
  const { url } = useRouteMatch();
  return (
    <div className="bg-white shadow overflow-hidden rounded-lg">
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <div className="text-lg leading-6 font-medium text-gray-900">{product.name}</div>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{product.categoryId.name} kategorisi</p>
        </div>
        <Link to={url + "/edit"}>
          <Button size="sm">
            <PencilAltIcon className="w-4 h-4 mr-1" /> Ürün bilgilerini güncelle
          </Button>
        </Link>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Resimler</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <img src="/images/no-image.png" alt="No image" className="h-32 w-32 rounded-md" />
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Ürün Adı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Kategori</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.categoryId.name}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Açıklama</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.desc}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Alış Fiyatı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.pPrice}.00 ₺</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Satış Fiyatı</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.sPrice}.00 ₺</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProductShow;
