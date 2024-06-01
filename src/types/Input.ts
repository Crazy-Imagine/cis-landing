import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface BaseInputProps {
  isDisabled?: boolean;
  name: string;
  label?: string;
  errors: FieldErrors<any>;
  register: UseFormRegister<any>;
}
