import { type SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import RHFInput from '@/components/react/inputs/RHFInput.tsx';
import { getLangFromUrl, useTranslations } from '@/i18n/utils.ts';
import RHFSelect from '@/components/react/inputs/RHFSelect.tsx';

interface IForm {
  name: string;
  lastName: string;
  email: string;
  linkedIn: string;
  phone: string;
  webSite: string;
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
        name: yup.string().required(t('errors.name-required')),
        lastName: yup.string().required(t('errors.lastName-required')),
        linkedIn: yup.string().required(t('errors.linkedIn-required')),
        phone: yup.string().required(t('errors.phone-required')),
        webSite: yup.string().required(t('errors.webSite-required')),
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
      <div className="mb-10 flex flex-col gap-5 md:flex-row">
        <RHFInput
          name="name"
          label={t('forms.name')}
          register={register}
          errors={errors}
          labelColor={'rgba(235, 235, 235, 0.30)'}
        />
        <RHFInput
          name="lastName"
          label={t('forms.lastName')}
          register={register}
          errors={errors}
          labelColor={'rgba(235, 235, 235, 0.30)'}
        />
      </div>
      <div className="mb-10 flex flex-col gap-5 md:flex-row">
        <RHFInput
          type="email"
          name="email"
          label={t('forms.email')}
          labelColor={'rgba(235, 235, 235, 0.30)'}
          register={register}
          errors={errors}
        />
        <RHFInput
          name="phone"
          label={t('forms.phone')}
          register={register}
          errors={errors}
          labelColor={'rgba(235, 235, 235, 0.30)'}
        />
      </div>

      <div className="mb-10">
        <RHFInput
          name="linkedIn"
          label={t('forms.linkedIn')}
          register={register}
          errors={errors}
          labelColor={'rgba(235, 235, 235, 0.30)'}
        />
      </div>

      <div className="mb-10">
        <RHFInput
          name="webSite"
          label={t('forms.webSite')}
          register={register}
          errors={errors}
          labelColor={'rgba(235, 235, 235, 0.30)'}
        />
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
          name="howDidYouFindUs"
          label={t('forms.how-did-you-find-us')}
          errors={errors}
          register={register}
          labelColor={'rgba(235, 235, 235, 0.30)'}
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
