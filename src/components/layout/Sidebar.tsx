import { useState } from "react";
import { NavLink } from "react-router-dom";

import { routes } from "routes";

import { CubeTransparentIcon, ChevronDownIcon } from "@heroicons/react/solid";

interface RouteProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  subRoutes?: RouteProps[];
}

interface CollapsibleMenuProps {
  route: RouteProps;
}

const CollapsibleMenu = ({ route }: CollapsibleMenuProps) => {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <button
        className="relative flex w-full focus:outline-none items-center px-2 py-3 mb-1 rounded-md"
        onClick={() => setisActive(!isActive)}
      >
        {route.icon} <span className="ml-2 text-sm">{route.text}</span>
        <ChevronDownIcon className={`absolute right-2 h-4 w-4 transform ${isActive ? "rotate-180" : ""}`} />
      </button>
      {isActive && (
        <ul>
          {route.subRoutes?.map((subRoute) => (
            <li key={subRoute.path} className="pl-6">
              <NavLink
                to={subRoute.path}
                exact
                activeClassName="bg-blue-300 bg-opacity-25 text-gray-100"
                className="flex w-full focus:outline-none items-center px-2 py-1 mb-1 rounded-md"
              >
                {subRoute.icon}
                <span className="ml-1">{subRoute.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const Sidebar = () => {
  return (
    <div className="h-full p-2">
      <nav className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg h-full overflow-y-scroll">
        <div className="flex items-center px-2 mt-2 text-gray-100">
          <CubeTransparentIcon className="h-8 w-8" /> <span className="ml-1 text-2xl font-medium">Hakee</span>
        </div>
        <ul className="mt-6 text-gray-200 text-sm">
          {routes.map((route) => (
            <li key={route.path}>
              {route.subRoutes ? (
                <CollapsibleMenu route={route} />
              ) : (
                <NavLink
                  to={route.path}
                  exact
                  activeClassName="bg-blue-300 bg-opacity-25 text-gray-100"
                  className="relative flex items-center px-2 py-3 mb-1 rounded-md"
                >
                  {route.icon} <span className="ml-2">{route.text}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
