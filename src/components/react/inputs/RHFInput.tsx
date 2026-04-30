import { type ForwardedRef, forwardRef } from 'react';
import InputWrapper from '@/components/react/inputs/InputWrapper.tsx';
import type { BaseInputProps } from '@/types/Input.ts';

interface Props extends BaseInputProps {
  type?: React.HTMLInputTypeAttribute;
  accept?: React.InputHTMLAttributes<HTMLInputElement>['accept'];
  required?: boolean;
}

const RHFInput = forwardRef(
  (
    { name, label, errors, register, accept, type = 'text', required }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const hasError = !!errors[name];
    const errorId = `${name}-error`;
    const ariaValues = hasError
      ? {
          'aria-invalid': !!errors[name],
          'aria-describedby': errorId,
        }
      : {};

    if (type === 'file') {
      const { ref: rhfRef, ...rest } = register(name);
      return (
        <InputWrapper name={name} errors={errors} required={required}>
          <input
            id={name}
            type="file"
            className="hidden"
            accept={accept}
            {...ariaValues}
            {...rest}
            ref={(instance) => {
              if (typeof ref !== 'function' && ref) {
                ref.current = instance;
              }
              rhfRef(instance);
            }}
          />
        </InputWrapper>
      );
    }

    return (
      <InputWrapper name={name} label={label} errors={errors} required={required}>
        <input
          id={name}
          type={type}
          className={`
          block w-full rounded-xl border-2 border-solid border-primary-blue bg-fog-white px-2 py-1.5 shadow-lg ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
          ${hasError ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600'}
          `}
          {...ariaValues}
          {...register(name)}
        />
      </InputWrapper>
    );
  }
);

export default RHFInput;
