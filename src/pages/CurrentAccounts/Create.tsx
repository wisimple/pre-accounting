import React from "react";

import { DocumentAddIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import Heading from "components/Heading";
import Layout from "containers/Layout";
import CurrentAccountForm from "components/CurrentAccount/CurrenAccountForm";

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

      <div className="card mt-4">
        <CurrentAccountForm />
      </div>
    </>
  );
}
