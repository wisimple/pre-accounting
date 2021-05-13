import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

interface ModalProps {
  show?: boolean;
  setShow?: (status: boolean) => void;
  children?: React.ReactNode;
  title?: string;
}

const Modal = ({ show = true, setShow = () => {}, children, title }: ModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={show}
        onClose={setShow}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {title && (
                <div className="px-4 sm:px-6 py-4">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                  </Dialog.Title>
                </div>
              )}
              {children}
              <button
                className="absolute top-4 right-4 sm:right-6 text-white rounded-full p-1 bg-gradient-to-br from-red-500 to-red-300 focus:outline-none"
                onClick={() => setShow(false)}
              >
                <XIcon className="h-3 w-3" />
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
