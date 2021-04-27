import { DocumentAddIcon } from "@heroicons/react/solid";
import Heading from "components/Heading";
import Input from "components/Input";
import Button from "components/Button";

const NewCategoryForm = () => {
  return (
    <>
      <div className="flex justify-between">
        <Heading level="2">Yeni Kategori Oluştur</Heading>
      </div>
      <form className="mt-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Kategori Adı
          </label>
          <Input type="text" id="name" name="name" />
        </div>
        <div className="py-3 text-right">
          <Button>
            <DocumentAddIcon className="h-4 w-4 mr-2" /> KAYDET
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewCategoryForm;
