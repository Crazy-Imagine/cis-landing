import { type SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import RHFInput from '@/components/react/forms/RHFInput.tsx';
import { getLangFromUrl, useTranslations } from '@/i18n/utils.ts';

interface IForm {
  name: string;
  company?: string;
  country?: string;
  phone?: string;
  email: string;
  comments: string;
  projectType?: string;
  howDidYouFindUs?: string;
}

interface Props {
  url: URL;
}

function ContactForm({ url }: Props) {
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
        company: yup.string(),
        country: yup.string(),
        phone: yup.string(),
        email: yup
          .string()
          .email(t('errors.email-is-not-valid'))
          .required(t('errors.email-required')),
        comments: yup.string().required(t('errors.comments-required')),
        projectType: yup.string(),
        howDidYouFindUs: yup.string(),
      })
    ),
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    // console.log({ data });
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 flex flex-col gap-5 md:flex-row">
        <RHFInput name="name" label={t('forms.name')} register={register} errors={errors} />
        <RHFInput name="company" label={t('forms.company')} register={register} errors={errors} />
      </div>

      <div className="mb-6 flex flex-col gap-5 md:flex-row">
        <RHFInput name="country" label={t('forms.country')} register={register} errors={errors} />
        <RHFInput name="phone" label={t('forms.phone')} register={register} errors={errors} />
      </div>

      <div className="mb-6 flex flex-col gap-5 md:flex-row">
        <RHFInput
          type="email"
          name="email"
          label={t('forms.email')}
          register={register}
          errors={errors}
        />
      </div>

      <div className="mb-6 flex flex-col gap-5 md:flex-row">
        <RHFInput
          name="comments"
          label={t('forms.comments-questions-schemes')}
          register={register}
          errors={errors}
        />
      </div>

      <div className="mb-6 flex flex-col gap-5 md:flex-row">
        <RHFInput
          name="projectType"
          label={t('forms.project-type')}
          register={register}
          errors={errors}
        />
        <RHFInput
          name="howDidYouFindUs"
          label={t('forms.how-did-you-find-us')}
          register={register}
          errors={errors}
        />
      </div>

      {/* <div className="mb-6 flex gap-5"> */}
      {/*  <input type="checkbox" /> */}
      {/* </div> */}

      <div>
        <input
          type="submit"
          value={t('forms.submit')}
          className="w-full rounded-full bg-periwinkle px-5 py-2.5 font-nexaLight uppercase tracking-wide text-white hover:cursor-pointer hover:bg-blue-purple-contrast lg:w-auto"
        />
      </div>
    </form>
  );
}

export default ContactForm;
