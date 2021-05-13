import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "sm" | "md";
  color?: "primary" | "secondary" | "green" | "gray" | "blue" | "yellow";
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = ({ children, size = "md", color = "blue", loading, icon, className, ...rest }: ButtonProps) => {
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
    case "blue":
      colorClasses = "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
      break;
    case "green":
      colorClasses = "bg-green-600 hover:bg-green-700 focus:ring-green-500";
      break;
    case "gray":
      colorClasses = "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";
      break;
    case "yellow":
      colorClasses = "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500";
      break;
  }

  const loadingClasses = loading ? "opacity-80" : "";

  return (
    <button
      className={`relative inline-flex justify-center items-center border border-transparent shadow-sm text-sm rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses} ${sizeClasses} ${loadingClasses} ${className}`}
      {...rest}
      disabled={loading}
    >
      {loading && (
        <span className="h-5 w-5 mr-2">
          <svg className="animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      {icon && !loading && <span className="h-5 w-5 mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
