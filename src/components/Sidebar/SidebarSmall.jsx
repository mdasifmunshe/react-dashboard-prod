import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const sides = [
  { id: 1, href: "/dashboard", icon: "/dashboard.svg" },
  { id: 2, href: "/orders", icon: "/clipboard-alt.svg" },
  { id: 3, href: "/customers", icon: "/customers.svg" },
  { id: 4, href: "/products", icon: "/products.svg" },
  { id: 5, href: "/analytics", icon: "/analytics.svg" },
];

const SidebarSmall = () => {
  const [active, setActive] = useState(1);

  const handleActive = () => useEffect(() => setActive(1));
  return (
    <div className="col-span-1 hidden flex-col gap-8 pt-16 transition-all duration-300 ease-in-out xl:relative xl:flex">
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
      </Link>

      {/* page links */}
      <div className="flex flex-col gap-8">
        {sides.map((side) => (
          <Link
            key={side.id}
            to={side.href}
            onClick={() => setActive(side.id)}
            className={`flex h-8 items-center gap-4 rounded-br-lg rounded-tr-lg transition-all duration-300 ease-in-out ${
              active === side.id
                ? "ml-0 bg-[#f799a354] before:mr-[calc(1rem-8px)] before:h-full before:w-2 before:bg-[#ff919d]"
                : "ml-8"
            }`}
          >
            <div className="text-base">{side.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarSmall;
