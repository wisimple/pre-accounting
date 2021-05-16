import { Fragment } from "react";
import { Transition } from "@headlessui/react";

import { StyledSpinner } from "./styles";

interface SpinnerProps {
  loading?: boolean;
  fullScreen?: boolean;
  text?: string;
}

const Spinner = ({ loading = false, fullScreen = true, text = "Lütfen bekleyiniz..." }: SpinnerProps) => {
  if (fullScreen)
    return (
      <Transition
        appear={true}
        show={loading}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2">
          <div className="card flex flex-col items-center space-y-2 bg-gray-50 bg-opacity-90 p-2">
            <StyledSpinner />
            <span className="text-sm text-gray-600">{text}</span>
          </div>
        </div>
      </Transition>
    );

  if (loading) return <StyledSpinner />;

  return null;
};

export default Spinner;
