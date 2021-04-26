import { PlusIcon, PhoneIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import Heading from "components/Heading";
import Button from "components/Button";

const people = [
  {
    _id: "1",
    name: "Ali Yilmaz",
    phone: "05454224138",
    note: "Pazar günü ödeme yapacak",
    blnc: -5000.4,
    type: "company",
    address: "Anıt, Necip Fazıl Kısakürek Cd., 33430 Tarsus/Mersin",
  },
  {
    _id: "2",
    name: "Ali Yilmaz",
    phone: "05454224138",
    note: "burası musterı hakkında not kısmıdır",
    blnc: -2330,
    type: "person",
    gender: 1,
    address: "Yeni, Şht. Mesut Çiftçi Sk. No:2 D:4, 33400 Tarsus/Mersin",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 500w, https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 1000w",
  },
  {
    _id: "3",
    name: "Ali Yilmaz",
    phone: "05454224138",
    title: "Regional Paradigm Technician",
    blnc: -4050,
    type: "person",
    gender: 0,
  },
  {
    _id: "4",
    name: "Ali Yilmaz",
    title: "Regional Paradigm Technician",
    blnc: 100,
    type: "company",
  },
  {
    _id: "5",
    name: "Ali Yilmaz",
    phone: "05454224138",
    blnc: 0,
    type: "person",
    address: "Yeni, Şht. Mesut Çiftçi Sk. No:2 D:4, 33400 Tarsus/Mersin",
    gender: 1,
  },
  {
    _id: "6",
    name: "Ali Yilmaz",
    phone: "05454224138",
    blnc: -100,
    type: "person",
    address: "Yeni, Şht. Mesut Çiftçi Sk. No:2 D:4, 33400 Tarsus/Mersin",
    gender: 1,
  },
  {
    _id: "7",
    name: "Ali Yilmaz",
    phone: "05454224138",
    blnc: -460,
    type: "person",
    gender: 1,
  },
  {
    _id: "8",
    name: "Ali Yilmaz",
    phone: "05454224138",
    blnc: -5000,
    type: "person",
    gender: 1,
  },
];

const List = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading level="2">Cari Hesaplar</Heading>
        <Link to="/customers/create">
          <Button size="sm">
            <PlusIcon className="h-6 w-6" />
            Yeni Ekle
          </Button>
        </Link>
      </div>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 text-gray-500 text-xs font-medium uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      Unvan
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Notlar
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      Adres
                    </th>
                    <th scope="col" className="px-6 py-3 text-right">
                      Bakiye
                    </th>

                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Ayrıntılar</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => {
                    const profileUrl =
                      person.imageUrl ||
                      (person.type === "company"
                        ? "images/avatar/company.png"
                        : person.gender
                        ? "images/avatar/male.png"
                        : "images/avatar/female.png");
                    return (
                      <tr key={person._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full shadow object-cover"
                                src={profileUrl}
                                alt="Profil"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                              {person.phone && (
                                <a href={`tel:${person.phone}`} className="flex items-center text-sm text-gray-500">
                                  <PhoneIcon className="h-4 w-4" />
                                  <span className="ml-1">{person.phone}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {person.note && <div className="text-sm text-gray-600">{person.note}</div>}
                        </td>
                        <td className="px-6 py-4 whitespace-pre-wrap">
                          <span className="text-sm text-gray-600">{person.address}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <span
                            className={`px-2 inline-flex leading-5 font-semibold rounded-full ${
                              person.blnc < 0 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                            }`}
                          >
                            {Math.abs(person.blnc)} ₺ {person.blnc < 0 ? "(B)" : person.blnc === 0 ? "" : "(A)"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Link
                            to={`/customers/${person._id}/transactions`}
                            className="flex items-center text-blue-600"
                          >
                            Ayrıntılar <ChevronRightIcon className="h-4 w-4 ml-1" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
