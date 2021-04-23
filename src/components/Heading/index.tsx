import React from "react";

interface HeaderProps {
  level?: "1" | "2" | "3";
  children?: React.ReactNode;
}

const Heading = ({ level, children }: HeaderProps) => {
  switch (level) {
    case "1":
      return <h1 className="text-2xl font-semibold text-gray-800 leading-tight">{children}</h1>;
    case "2":
      return <h2 className="text-2xl font-semibold text-gray-800 leading-tight">{children}</h2>;
    case "3":
      return <h3 className="text-2xl font-semibold text-gray-800 leading-tight">{children}</h3>;
    default:
      return <span>{children}</span>;
  }
};

export default Heading;
