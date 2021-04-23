import {
  HomeIcon,
  CollectionIcon,
  SwitchHorizontalIcon,
  DocumentReportIcon,
  CashIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { CubeIcon } from "@heroicons/react/outline";

export const routes = [
  { icon: <HomeIcon className="h-5 w-5" />, text: "Ana Ekran", path: "/" },
  { icon: <ShoppingCartIcon className="h-5 w-5" />, text: "Ürünler / Hizmetler", path: "/products" },
  { icon: <CollectionIcon className="h-5 w-5" />, text: "Cari Hesaplar", path: "/customers" },
  {
    icon: <SwitchHorizontalIcon className="h-5 w-5" />,
    text: "Alış Satış İşlemleri",
    path: "/sales-and-purchases-0",
    subRoutes: [
      { icon: <CubeIcon className="h-4 w-4" />, text: "a", path: "/a" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "b", path: "/b" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "c", path: "/c" },
    ],
  },
  {
    icon: <CubeIcon className="h-5 w-5" />,
    text: "Stok Yönetimi",
    path: "/sales-and-purchases--0",
    subRoutes: [
      { icon: <CubeIcon className="h-4 w-4" />, text: "a", path: "/a" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "b", path: "/b" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "c", path: "/c" },
    ],
  },
  {
    icon: <CashIcon className="h-5 w-5" />,
    text: "Tahsilat ve Ödemeler",
    path: "/sales-and-purchases",
    subRoutes: [
      { icon: <CubeIcon className="h-4 w-4" />, text: "a", path: "/a" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "b", path: "/b" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "c", path: "/c" },
    ],
  },
  {
    icon: <DocumentReportIcon className="h-5 w-5" />,
    text: "Raporlama",
    path: "/sales-and-purchases-1",
    subRoutes: [
      { icon: <CubeIcon className="h-4 w-4" />, text: "d", path: "/d" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "e", path: "/e" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "f", path: "/f" },
    ],
  },
];
