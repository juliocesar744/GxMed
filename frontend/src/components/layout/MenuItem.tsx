import type { MouseEventHandler } from "react";

interface MenuItemProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function MenuItem({ active, children, onClick }: MenuItemProps) {
  return (
    <button
        onClick={onClick}
        className={`
            flex h-[2.1875rem] items-center rounded-[0.3125rem] gap-[0.75rem] 
            border-none px-[0.8rem] py-[0.75rem] text-left 
            text-[0.875rem] font-medium leading-[0.9375rem] 
            transition-colors duration-300 cursor-pointer 
            ${active 
            ? "bg-[#875ef8] text-white" 
            : "bg-[#F9FBFF] text-black hover:bg-[#0c0570] hover:text-white"}
        `}
    >
        {children}
    </button>
  );
}
