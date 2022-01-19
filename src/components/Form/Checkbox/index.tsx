import React from 'react';
import Checkbox from 'react-custom-checkbox';
import { HiCheck } from 'react-icons/hi';
import './style.scss';

type FormCheckboxProps = {
  label: string;
  value: boolean | null;
  onChecked: (value: boolean) => void;
};

function FormCheckbox({ label, value, onChecked }: FormCheckboxProps) {
  return (
    <Checkbox
      checked={value || false}
      onChange={onChecked}
      icon={
        <div className="cbx-icon fe-2">
          <HiCheck />
        </div>
      }
      className="cbx cursor-pointer"
      labelClassName={`pe-3 cursor-pointer ${value ? `selected` : ``}`}
      label={label}
    />
  );
}

export default FormCheckbox;
