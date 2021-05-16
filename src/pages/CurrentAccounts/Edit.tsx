import Heading from "components/Heading";
import Button from "components/Button";
import CurrentAccountForm from "components/CurrentAccount/CurrentAccountForm";

import { CurrentAccount } from "models/CurrentAccount";
import { currentAccounts } from "mockData/currentAccounts";
import { ExclamationCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Popconfirm from "components/Popconfirm";

const CurrentAccountEdit = () => {
  const account = new CurrentAccount(currentAccounts[0]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-grow items-center">
          <img src={account.avatarUrl} className="inline h-10 w-10 mr-2 rounded-full" />
          <Heading level="2">{account.name}</Heading>
        </div>

        <div>
          <Popconfirm
            title="Uyarı!"
            text={
              <>
                Bu işlem geri alınamaz, <span className="font-semibold">{account.name} </span> adlı cari hesabı silmek
                istediğinizden emin misiniz?
              </>
            }
            iconComponent={<ExclamationCircleIcon />}
            actionComponent={
              <Button icon={<TrashIcon />} size="sm" color="red">
                Bu hesabı sil
              </Button>
            }
            onCancel={() => console.log("cancelled")}
            onConfirm={() => console.log("confirmed")}
          />
        </div>
      </div>

      <div className="card mt-4">
        <CurrentAccountForm onSubmitSuccess={() => console.log("on submit success")} />
      </div>
    </>
  );
};

export default CurrentAccountEdit;
