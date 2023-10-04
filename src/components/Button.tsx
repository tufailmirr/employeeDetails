import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'; // Add more variants as needed
  size?: 'sm' | 'md' | 'lg'; // Add more sizes as needed
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', ...rest }) => {
  // Define Tailwind CSS classes based on the variant and size props
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-[#EDF8FF] hover:bg-gray-400 text-[#1DA1F2]';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      default:
        return 'bg-[#1DA1F2] hover:bg-blue-600 text-white';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-2 text-sm';
      case 'lg':
        return 'px-4 py-2 text-lg';
      default:
        return 'px-3 py-2 text-base';
    }
  };

  return (
    <button
      className={`rounded-md  ${getVariantClass()} ${getSizeClass()} font-normal font-roboto focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-${variant}-300 ${rest.className} cursor-pointer`}
      {...rest}
    />
  );
};

export default Button;
