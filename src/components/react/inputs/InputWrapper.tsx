import type { FieldError, FieldErrors } from 'react-hook-form';
import type { BaseInputProps } from '@/types/Input.ts';

interface Props extends Omit<BaseInputProps, 'register'> {
  name: string;
  label: string;
  errors: FieldErrors<any>;
}

function InputWrapper({ children, errors, name, label }: React.PropsWithChildren<Props>) {
  const hasError = !!errors[name];
  const errorId = `${name}-error`;

  return (
    <div className="w-full">
      <div className="relative h-full">
        <label
          htmlFor={name}
          className="absolute -top-2 left-2 inline-block bg-fog-white px-1 text-xs font-medium capitalize text-gray-900"
        >
          {label}
        </label>
        {children}

        {hasError && (
          <>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </div>
          </>
        )}
      </div>

      {hasError && (
        <p className="mt-2 text-sm text-red-600" id={errorId}>
          {(errors[name] as FieldError).message}
        </p>
      )}
    </div>
  );
}

export default InputWrapper;
