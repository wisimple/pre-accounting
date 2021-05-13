import { useEffect, useState } from "react";

import Heading from "components/Heading";
import ProductForm from "components/Product/ProductForm";
import { IProduct } from "interfaces/IProduct";

import { product } from "mockData/products";
import Spinner from "components/Spinner";

const ProductEdit = () => {
  const [fetchedProduct, setfetchedProduct] = useState<IProduct | undefined>();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("sdfsdf");
      setloading(false);
      setfetchedProduct(product);
    }, 2000);
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <Heading level="2">Ürün / Hizmet Bilgilerini Güncelle {loading && "loading..."}</Heading>
      </div>

      <div className="card mt-4">
        <Spinner loading={loading} />
        <ProductForm initialFormValues={fetchedProduct} />
      </div>
    </>
  );
};

export default ProductEdit;
