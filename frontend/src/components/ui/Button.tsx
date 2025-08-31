import type { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "danger" | "text";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const sizeClasses = {
    sm: "px-2 py-1 text-sm size-sm",
    md: "px-6 py-2 text-md size-md",
    lg: "px-8 py-3 text-lg size-lg",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    ...rest
}: ButtonProps) {
    const baseClass =
        "p-1 rounded font-semibold transition-colors disabled:opacity-50 cursor-pointer rounded-xl";

    const variantClass = {
        primary: "bg-[#875ef8] text-white hover:bg-[#0c0570]",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        text: "!px-1 bg-none text-[#875ef8] hover:text-[#0c0570] text-sm "
    };

    return (
        <button
            className={classNames(baseClass, sizeClasses[size], variantClass[variant])}
            disabled={isLoading || rest.disabled}
            {...rest}
        >
            {isLoading ? "Carregando..." : children}
        </button>
    );
}