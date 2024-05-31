import type { BaseInputProps } from '@/types/Input.ts';
import InputWrapper from '@/components/react/inputs/InputWrapper.tsx';

interface Option {
  label: string;
  value: string;
}

interface Props extends BaseInputProps {
  options: Option[] | string[];
  labelColor?: string;
}

function RHFSelect({ name, register, label, errors, options, labelColor }: Props) {
  const hasError = !!errors[name];

  return (
    <InputWrapper name={name} label={label} errors={errors} labelColor={labelColor}>
      <select
        className={`
        block h-10 w-full rounded-md border-0 bg-fog-white px-2 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
        ${hasError ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600'}
        `}
        {...register(name)}
      >
        {options.map((option) => {
          if (typeof option === 'string') {
            return <option key={option}>{option}</option>;
          }

          return <option key={option.value}>{option.label}</option>;
        })}
      </select>
    </InputWrapper>
  );
}

export default RHFSelect;
