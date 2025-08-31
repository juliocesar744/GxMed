import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: 'default' | 'checkbox' | 'password';
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type='default', placeholder, id, className, ...rest }) => {
  return (
    <>
    {type !== 'checkbox'? (
        <div className="w-full flex flex-col gap-1">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                className={`px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#0c0570] focus:border-[#0c0570] ${className}`}
                {...rest}
            />
        </div>
        ) : (
        <label htmlFor={id} className="text-sm font-medium text-gray-400 flex gap-1">
            <input
                id={id}
                type="checkbox"
                className={` focus:outline-none accent-[#875ef8] focus:ring-[#0c0570] focus:border-[#0c0570] ${className} peer`}
                {...rest}
            />
             <span className="peer-checked:text-black peer-checked:font-bold">
                {label}
             </span>
        </label>
            
    )}
   
    </>
  );
};

export default Input;
