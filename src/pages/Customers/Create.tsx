import React from "react";

import { DocumentAddIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import Heading from "components/Heading";
import Layout from "containers/Layout";

export default function CustomerCreate() {
  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <div className="flex justify-between">
        <Heading level="2">Yeni Cari Hesap Oluştur</Heading>
      </div>

      <form className="mt-4" onSubmit={handleOnSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Cari Hesap Tipi
                </label>
                <select
                  id="type"
                  name="type"
                  autoFocus
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Şahıs</option>
                  <option>Şirket</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Unvan (İsim Soyisim)
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon Numarası
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Adres
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="note">Notlar</label>
                <textarea
                  name="note"
                  id="note"
                  rows={3}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Button>
              <DocumentAddIcon className="h-4 w-4 mr-2" /> KAYDET
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
