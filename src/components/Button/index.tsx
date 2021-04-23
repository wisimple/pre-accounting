import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "sm" | "md";
  color?: "primary" | "secondary" | "green" | "gray";
}

const Button = ({ children, size = "md", color = "primary", ...rest }: ButtonProps) => {
  let sizeClasses = "",
    colorClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "py-1 px-3";
      break;
    case "md":
      sizeClasses = "py-2 px-4";
      break;
  }

  switch (color) {
    case "primary":
      colorClasses = "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
      break;
    case "secondary":
      colorClasses = "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";
      break;
    case "green":
      colorClasses = "bg-green-600 hover:bg-green-700 focus:ring-green-500";
      break;
    case "gray":
      colorClasses = "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";
      break;
  }
  return (
    <button
      className={`inline-flex justify-center items-center border border-transparent shadow-sm text-sm rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses} ${sizeClasses}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
