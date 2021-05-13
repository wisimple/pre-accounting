import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import { CheckIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import Input from "components/Input";

type CategoryFormInputs = {
  name: string;
  surname: string;
};

interface FormProps {
  onSubmitSuccess?: () => void;
}

const CreateCategoryForm = ({ onSubmitSuccess = () => {} }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormInputs>();
  const [loading, setloading] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setloading(true);
    setTimeout(() => {
      setloading(false);
      onSubmitSuccess();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-4 py-5 bg-white sm:p-6">
        <label className="label">Kategori İsmi</label>
        <input
          type="text"
          className="input"
          {...register("name", { required: "Lütfen kategori ismi giriniz" })}
        />
      </div>

      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Button icon={<CheckIcon />} loading={loading}>
          KAYDET
        </Button>
      </div>
    </form>
  );
};

export default CreateCategoryForm;
