import InputWrapper from '@/components/react/inputs/InputWrapper.tsx';
import type { BaseInputProps } from '@/types/Input.ts';

interface Props extends BaseInputProps {
  type?: React.HTMLInputTypeAttribute;
}

function RHFInput({ name, label, errors, register, type = 'text' }: Props) {
  const hasError = !!errors[name];
  const errorId = `${name}-error`;
  const ariaValues = hasError
    ? {
        'aria-invalid': !!errors[name],
        'aria-describedby': errorId,
      }
    : {};

  return (
    <InputWrapper name={name} label={label} errors={errors}>
      <input
        type={type}
        className={`
        block w-full rounded-md border-0 bg-fog-white px-2 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
        ${hasError ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600'}
        `}
        {...ariaValues}
        {...register(name)}
      />
    </InputWrapper>
  );
}

export default RHFInput;
