import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";

import Sidebar from "components/layout/Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="bg-gray-50 h-screen">
      <div className="fixed left:0 top:0 w-64 h-full">
        <Sidebar />
      </div>
      <div className="ml-64 p-4 pl-2 overflow-hidden">
        <header>
          <div className="flex justify-between items-center">
            <div className="relative">
              <span className="absolute flex items-center inset-y-0 left-0 pl-3 text-gray-400">
                <SearchIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Arama yapın..."
                className="border border-gray-400 placeholder-gray-400 rounded-md py-2 pl-9"
              />
            </div>
            <div></div>
            <div className="flex items-center">
              <button className="text-gray-500">
                <BellIcon className="h-6 w-6" />
              </button>
              <button className="ml-6">
                <img
                  className="h-9 w-9 rounded-full object-cover"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Your profile image"
                />
              </button>
            </div>
          </div>
        </header>
        <main className="mt-8">{children}</main>
        <footer className="flex justify-center mt-10 p-4 text-gray-700">&copy; Hakee</footer>
      </div>
    </div>
  );
};

export default Layout;
