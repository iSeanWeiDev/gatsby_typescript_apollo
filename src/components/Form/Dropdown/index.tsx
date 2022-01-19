import React from 'react';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';

type FormDropDownProps = {
  value: Option;
  options: Option[];
  className?: string;
  onChange: (value: Option) => void;
};

function FormDropdown({
  value,
  options,
  className,
  onChange,
}: FormDropDownProps) {
  return (
    <Dropdown
      options={options}
      onChange={onChange}
      value={value}
      className={className}
      placeholder="Select an option"
    />
  );
}

export default FormDropdown;
