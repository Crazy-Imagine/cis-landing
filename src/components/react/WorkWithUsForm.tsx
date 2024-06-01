import { type SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import RHFInput from '@/components/react/inputs/RHFInput.tsx';
import RHFSelect from '@/components/react/inputs/RHFSelect.tsx';
import { getLangFromUrl, useTranslations } from '@/i18n/utils.ts';

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin?: string;
  website?: string;
  // curriculum
  reference?: string;
}

interface Props {
  url: URL;
}

function WorkWithUsForm({ url }: Props) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(
      yup.object({
        firstName: yup.string().required(t('errors.name-required')),
        lastName: yup.string().required(t('errors.lastName-required')),
        email: yup
          .string()
          .email(t('errors.email-is-not-valid'))
          .required(t('errors.email-required')),
        phone: yup
          .string()
          .matches(/^[a-zA-Z0-9\-().\s]{10,15}$/, t('errors.phone-invalid'))
          .required(t('errors.phone-required')),
        linkedin: yup.string(),
        website: yup.string().url(),
        reference: yup.string(),
      })
    ),
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    // console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-10 flex flex-col gap-5 md:flex-row">
        <RHFInput name="name" label={t('forms.name')} register={register} errors={errors} />
        <RHFInput name="lastName" label={t('forms.lastName')} register={register} errors={errors} />
      </div>
      <div className="mb-10 flex flex-col gap-5 md:flex-row">
        <RHFInput
          type="email"
          name="email"
          label={t('forms.email')}
          register={register}
          errors={errors}
        />
        <RHFInput name="phone" label={t('forms.phone')} register={register} errors={errors} />
      </div>

      <div className="mb-10">
        <RHFInput name="linkedin" label={t('forms.linkedIn')} register={register} errors={errors} />
      </div>

      <div className="mb-10">
        <RHFInput name="website" label={t('forms.webSite')} register={register} errors={errors} />
      </div>

      <div className="mb-10">
        <RHFSelect
          options={[
            t('common.google'),
            t('common.instagram'),
            t('common.facebook'),
            t('common.linkedin'),
            t('common.recommended'),
            t('common.other'),
          ]}
          name="reference"
          label={t('forms.how-did-you-find-us')}
          errors={errors}
          register={register}
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
export default WorkWithUsForm;
