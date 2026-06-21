import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  Bot,
  Briefcase,
  LogOut,
  History
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    {
      icon: <LayoutDashboard size={20} />,
      text: "Dashboard",
      path: "/dashboard",
    },

    {
      icon: <Wallet size={20} />,
      text: "Portfolio",
      path: "/portfolio",
    },

    {
      icon: <BarChart3 size={20} />,
      text: "Analytics",
      path: "/analytics",
    },

    {
      icon: <Bot size={20} />,
      text: "Automation",
      path: "/automation",
    },

    {
      icon: <Briefcase size={20} />,
      text: "Trading",
      path: "/trading",
    },
    {
      icon: <History size={20} />,
      text: "Transactions",
      path: "/transactions",
    }
  ];

  return (
    <div
      className="
 fixed
  left-0
  top-0
  w-72
  h-screen
  bg-[#0D1B2A]
  border-r
  border-white/10"
    >
      <h1
        className="
 text-3xl
 font-bold
 text-[#D4AF37]
 mb-10
 "
      >
        TradeX
      </h1>

      {menu.map((item) => (
        <NavLink
          key={item.text}
          to={item.path}
          className={({ isActive }) =>
            `
    flex
    items-center
    gap-4
    p-4
    rounded-xl
    mb-2
    transition-all
    ${
      isActive
        ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/20"
        : "text-white hover:bg-white/10"
    }
    `
          }
        >
          {item.icon}

          {item.text}
        </NavLink>
      ))}

      <button
        className="
 absolute
 bottom-8
 text-red-400
 flex
 items-center
 gap-3
 "
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}
