import type { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
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

  // text-red-900  ring-red-300
  return (
    <div className="w-full">
      <div className="relative">
        <label
          htmlFor={name}
          className="absolute -top-2 left-2 inline-block bg-fog-white px-1 text-xs font-medium capitalize text-gray-900"
        >
          {label}
        </label>
        <input
          type={type}
          className={`
        block w-full rounded-md border-0 bg-fog-white px-2 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
        ${hasError ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500' : 'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600'}
        `}
          {...ariaValues}
          {...register(name)}
        />

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

export default RHFInput;
