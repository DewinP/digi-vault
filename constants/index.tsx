import { Home, DollarSign, ArrowLeftRight, Send } from "lucide-react";

export const sidebarLinks = [
  {
    icon: <Home />,
    route: "/",
    label: "Home",
  },
  {
    icon: <DollarSign />,
    route: "/bank-accounts",
    label: "My Banks",
  },
  {
    icon: <ArrowLeftRight />,
    route: "/transactions",
    label: "Transaction History",
  },
  {
    icon: <Send />,
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];
