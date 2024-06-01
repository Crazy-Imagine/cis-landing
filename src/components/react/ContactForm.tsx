import * as yup from 'yup';
import Swal from 'sweetalert2';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import RHFInput from '@/components/react/inputs/RHFInput.tsx';
import RHFSelect from '@/components/react/inputs/RHFSelect.tsx';
import { getLangFromUrl, useTranslations } from '@/i18n/utils.ts';
import { postApi } from '@/lib/strapi.ts';

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
    reset,
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

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      await postApi({
        endpoint: 'contacts',
        data,
      });

      await Swal.fire({
        title: t('forms.thank-you'),
        text: t('forms.submission-received'),
        icon: 'success',
      });

      reset();
    } catch (e) {
      await Swal.fire({
        title: t('forms.oops'),
        text: t('forms.something-went-wrong'),
        icon: 'error',
      });
    }
  };

  return (
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
        <RHFSelect
          options={[
            t('common.web-development'),
            t('common.e-commerce'),
            t('common.mobile-apps'),
            t('common.customized-development'),
            t('common.other'),
          ]}
          name="projectType"
          label={t('forms.project-type')}
          errors={errors}
          register={register}
        />

        <RHFSelect
          options={[
            t('common.google'),
            t('common.rrss'),
            t('common.linkedin'),
            t('common.recommended'),
            t('common.other'),
          ]}
          name="howDidYouFindUs"
          label={t('forms.how-did-you-find-us')}
          errors={errors}
          register={register}
        />
      </div>

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
