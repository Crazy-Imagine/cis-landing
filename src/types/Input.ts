import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface BaseInputProps {
  name: string;
  label?: string;
  errors: FieldErrors<any>;
  register: UseFormRegister<any>;
}
