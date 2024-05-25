import { type SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import RHFInput from '@/components/react/inputs/RHFInput.tsx';
import { getLangFromUrl, useTranslations } from '@/i18n/utils.ts';

interface IForm {
  name: string;
  lastName: string;
  email: string;
}

interface Props {
  url: URL;
}

function SubscribeForm({ url }: Props) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(
      yup.object({
        name: yup.string().required(t('errors.name-required')),
        lastName: yup.string().required(t('errors.lastName-required')),
        email: yup
          .string()
          .email(t('errors.email-is-not-valid'))
          .required(t('errors.email-required')),
      })
    ),
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    // console.log({ data });
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 flex flex-col gap-5 bg-white md:flex-row">
        <RHFInput name="name" label={t('forms.name')} register={register} errors={errors} />
        <RHFInput name="lastName" label={t('forms.lastName')} register={register} errors={errors} />
      </div>
      <div className="mb-5">
        <RHFInput
          type="email"
          name="email"
          label={t('forms.email')}
          register={register}
          errors={errors}
        />
      </div>
      <div className="text-center">
        <input
          type="submit"
          value={t('forms.submit')}
          className="w-full rounded-full bg-periwinkle px-5 py-2.5 font-nexaLight uppercase tracking-wide text-white hover:cursor-pointer hover:bg-blue-purple-contrast lg:w-auto"
        />
      </div>
    </form>
  );
}
export default SubscribeForm;
