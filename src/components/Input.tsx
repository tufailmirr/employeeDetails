import React, { HTMLProps, ReactNode } from 'react'

interface InputProps extends HTMLProps<HTMLInputElement> {
    leftIcon?: ReactNode;
    type?: string;
    placeholder ?: string;
    rightIcon?: ReactNode;
  }


const Input = ({  type = 'text', leftIcon, rightIcon, ...rest }:InputProps) => {
  return (
   <div className='flex gap-4 relative'>
     {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        )}
     <input
        className="border pl-10 rounded-[4px] px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        type={type}
        {...rest}
      />
       {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {rightIcon}
          </div>
        )}
   </div>
  )
}

export default Input