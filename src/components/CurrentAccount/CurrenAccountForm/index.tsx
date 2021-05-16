import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import { CheckIcon, PlusIcon } from "@heroicons/react/solid";
import { CurrentAccountTypes } from "interfaces/ICurrentAccountType";
import { currentAccountTypes } from "constants/currentAccount";
import { ICurrentAccount } from "interfaces/ICurrentAccount";

type CurrentAccountFormInputs = {
  type: CurrentAccountTypes;
  catId: string;
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  note?: string;
  gender: boolean;
};

interface FormProps {
  onSubmitSuccess?: () => void;
  initialFormValues?: ICurrentAccount;
}

const CurrentAccountForm = ({ onSubmitSuccess = () => {}, initialFormValues }: FormProps) => {
  const { register, handleSubmit, reset } = useForm<CurrentAccountFormInputs>();
  const [showGender, setshowGender] = useState(false);

  const onSubmit = (data: CurrentAccountFormInputs) => {
    console.log(data);
    onSubmitSuccess();
  };

  useEffect(() => {
    if (initialFormValues) {
      reset({
        ...initialFormValues,
      });
    }
  }, [initialFormValues]);

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="type" className="label">
              Cari Hesap Tipi
            </label>
            <select
              {...register("type")}
              name="type"
              autoFocus
              className="input"
              onChange={({ target }) => setshowGender(target.value === "individual")}
            >
              {currentAccountTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          {showGender && (
            <div className="col-span-6 sm:col-span-2">
              <label htmlFor="type" className="label">
                Cinsiyet
              </label>
              <select {...register("gender", { setValueAs: (value) => value === "1" })} name="type" autoFocus className="input">
                <option value="1">Bay</option>
                <option value="0">Bayan</option>
              </select>
            </div>
          )}
          <div className="col-span-6 sm:col-span-2">
            <div>
              <label htmlFor="catId" className="label">
                Kategori
              </label>
              <select {...register("catId", { setValueAs: (value) => value === "1" })} name="type" autoFocus className="input">
                <option value="1">T</option>
                <option value="0">K</option>
                <option value="2">Tanidiklar</option>
              </select>
            </div>
            <div className="flex justify-end mt-1">
              <button type="button" className="flex items-center text-sm p-1 text-blue-600">
                <PlusIcon className="h-4 w-4" />
                Yeni kategori
              </button>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="name" className="label">
              İsim veya Unvan
            </label>
            <input {...register("name", { required: true })} type="text" id="name" className="input" />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="phone" className="label">
              Telefon Numarası
            </label>
            <input {...register("phone")} type="text" id="phone" className="input" />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="email" className="label">
              E-posta
            </label>
            <input {...register("email")} type="text" id="email" className="input" />
          </div>

          <div className="col-span-12">
            <label htmlFor="address" className="label">
              Adres
            </label>
            <input {...register("address")} type="text" name="address" id="address" className="input" />
          </div>
          <div className="col-span-12">
            <label htmlFor="note">Notlar</label>
            <textarea {...register("note")} id="note" rows={3} className="input"></textarea>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Button icon={<CheckIcon />}>KAYDET</Button>
      </div>
    </form>
  );
};

export default CurrentAccountForm;
