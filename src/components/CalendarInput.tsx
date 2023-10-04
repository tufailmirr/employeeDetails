// @ts-nocheck
import React, { forwardRef } from "react";
import Input from "./Input";
import CalendarIcon  from '../assets/CalendarIcon.svg'
interface InputProps  extends HTMLProps<HTMLInputElement> {
  className: string;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
  placeholder?: string
}
const InputForwar: React.FC<InputProps> = (
  { className, value, onClick, onChange ,placeholder, ...rest},
  ref
) => {
  return (
    <Input
    leftIcon={<img src={CalendarIcon} />}
    //   className={className}
      type="text"
      value={value}
      ref={ref}
      onChange={(e) => onChange(e.target.value)}
      onClick={onClick}
      placeholder={"No Date"}
      {...rest}
    />
  );
};

export default forwardRef(InputForwar);
