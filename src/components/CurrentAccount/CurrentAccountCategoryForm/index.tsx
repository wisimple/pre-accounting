import { useForm } from "react-hook-form";
import { CheckIcon } from "@heroicons/react/solid";
import Button from "components/Button";

type FromInputs = {
  name: string;
};

interface Props {}

const CurrentAccountCategoryForm = ({}: Props) => {
  const { register, handleSubmit } = useForm<FromInputs>();

  const onSubmit = (data: FromInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="px-4 py-5 bg-white sm:p-6">
        <label htmlFor="name" className="label">
          Kategori Adı
        </label>
        <input
          {...register("name", { required: "Lütfen kategori ismi girniz" })}
          type="text"
          className="input"
          name="name"
          id="name"
        />
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Button icon={<CheckIcon />}>KAYDET</Button>
      </div>
    </form>
  );
};

export default CurrentAccountCategoryForm;
