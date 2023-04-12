import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, text: "Dashboard", href: "/dashboard", icon: "/dashboard.svg" },
  { id: 2, text: "Orders", href: "/orders", icon: "/clipboard-alt.svg" },
  { id: 3, text: "Customers", href: "/customers", icon: "/customers.svg" },
  { id: 4, text: "Products", href: "/products", icon: "/products.svg" },
  { id: 5, text: "Analytics", href: "/analytics", icon: "/analytics.svg" },
];

const Sidebar = () => {
  const [active, setActive] = useState(1);

  const handleActive = () => useEffect(() => setActive(1));
  return (
    <div className="relative col-span-1 flex flex-col gap-8 pt-16 transition-all duration-300 ease-in-out">
      {/* logo */}
      <Link
        to={"/dashboard"}
        onClick={handleActive}
        className="flex h-[5rem] items-center justify-center gap-4 text-[22px] font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <p>
          Sh<span className="text-[#ff919d]">o</span>ps
        </p>
      </Link>

      {/* page links */}
      <div className="flex flex-col gap-8">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.href}
            onClick={() => setActive(link.id)}
            className={`flex h-8 items-center gap-4 rounded-br-lg rounded-tr-lg transition-all duration-300 ease-in-out ${
              active === link.id
                ? "ml-0 bg-[#f799a354] before:mr-[calc(1rem-8px)] before:h-full before:w-2 before:bg-[#ff919d]"
                : "ml-8"
            }`}
          >
            <img src={link.icon} alt={link.text} className="h-8 w-8" />
            <div className="text-base">{link.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
