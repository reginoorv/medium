
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'font-semibold rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-[#C6A477] text-[#0B121F] hover:bg-[#b39065] focus:ring-[#C6A477]';
      break;
    case 'secondary':
      variantStyles = 'bg-[#1E293B] text-[#F0EBE3] hover:bg-[#334155] focus:ring-[#1E293B]'; // Darker button
      break;
    case 'outline':
      variantStyles = 'border border-[#C6A477] text-[#C6A477] hover:bg-[#C6A477] hover:text-[#0B121F] focus:ring-[#C6A477]';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-4 py-2 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-6 py-3 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-8 py-4 text-lg';
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </button>
  );
};
