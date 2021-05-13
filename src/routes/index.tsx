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
  { icon: <CollectionIcon className="h-5 w-5" />, text: "Cari Hesaplar", path: "/current-accounts" },
  {
    icon: <SwitchHorizontalIcon className="h-5 w-5" />,
    text: "Alış Satış İşlemleri",
    path: "/invoices",
    subRoutes: [
      { icon: <CubeIcon className="h-4 w-4" />, text: "İşlemleri Görüntüle", path: "/invoices" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "Alış Yap", path: "/invoices/create/purchase" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "Satış Yap", path: "/invoices/create/sell" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "Virman Fişi", path: "/virman-fisi" },
    ],
  },
  {
    icon: <CashIcon className="h-5 w-5" />,
    text: "Tahsilat ve Ödemeler",
    path: "/transactions",
    subRoutes: [
      { icon: <CubeIcon className="h-4 w-4" />, text: "Tahsil Et", path: "/transactions/create/collect" },
      { icon: <CubeIcon className="h-4 w-4" />, text: "Ödeme Yap", path: "/transactions/create/pay" },
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
