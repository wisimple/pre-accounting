import { useState } from "react";
import { useHistory } from "react-router-dom";
import Heading from "components/Heading";
import ProductForm from "components/Product/ProductForm";

const ProductCreate = () => {
  const [isCategoryModalActive, setisCategoryModalActive] = useState(false);
  const history = useHistory();
  return (
    <>
      <div className="flex justify-between">
        <Heading level="2">Yeni Ürün / Hizmet Oluştur</Heading>
      </div>

      <div className="card mt-4">
        <ProductForm
          onSubmitSuccess={() => {
            history.goBack();
            console.log("onSubmitSuccess");
          }}
        />
      </div>
    </>
  );
};

export default ProductCreate;
