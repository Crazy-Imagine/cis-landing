import * as yup from 'yup';
import Swal from 'sweetalert2';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import RHFInput from '@/components/react/inputs/RHFInput.tsx';
import RHFSelect from '@/components/react/inputs/RHFSelect.tsx';
import type { Upload } from '@/types/Upload.ts';
import { getLangFromUrl, useTranslations } from '@/i18n/utils.ts';
import { postApi } from '@/lib/strapi.ts';

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin?: string;
  website?: string;
  curriculum?: any;
  reference?: string;
}

interface Props {
  url: URL;
}

function WorkWithUsForm({ url }: Props) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
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
        curriculum: yup
          .mixed()
          .test('fileSize', t('errors.curriculum-size'), (value) => {
            const _files = value as FileList;
            if (!_files || _files?.length === 0) return true;

            const MAX_ALLOWED_SIZE = 2 * 1024 * 1024; // 2MB

            return _files && _files[0] && _files[0].size <= MAX_ALLOWED_SIZE;
          })
          .test('type', t('errors.curriculum-type'), (value) => {
            const _files = value as FileList;
            if (!_files || _files?.length === 0) return true;

            const ALLOWED_TYPES = [
              'image/jpg',
              'image/jpeg',
              'application/pdf',
              'application/msword',
            ];

            const isObject = typeof _files === 'object';
            const hasFile = !!_files[0]?.type;
            const isValidType = ALLOWED_TYPES.includes(_files[0].type);

            return isObject && hasFile && isValidType;
          }),
      })
    ),
  });

  const curriculum = watch('curriculum') as FileList | undefined;

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    let fileId: number | null = null;

    if (data.curriculum !== undefined) {
      if ((data.curriculum as FileList).length > 0) {
        const file = (data.curriculum as FileList)[0];

        const formData = new FormData();
        formData.append('files', file);

        try {
          const response = await postApi<Upload[]>({
            endpoint: 'upload',
            data: formData,
            contentType: 'multipart/form-data',
          });

          fileId = response[0].id;
        } catch (e) {
          await Swal.fire({
            title: t('forms.oops'),
            text: t('forms.something-went-wrong'),
            icon: 'error',
          });
          return;
        }
      }
    }

    try {
      await postApi({
        endpoint: 'curriculums',
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          linkedin: data.linkedin,
          website: data.website,
          reference: data.reference,
          ...(fileId ? { curriculum: fileId } : {}),
        },
      });

      await Swal.fire({
        title: t('forms.thank-you'),
        text: t('forms.submission-received'),
        icon: 'success',
      });
    } catch (e) {
      await Swal.fire({
        title: t('forms.oops'),
        text: t('forms.something-went-wrong'),
        icon: 'error',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-5 py-10 shadow-lg md:p-10">
      <div className="mb-10 flex flex-col gap-10 md:flex-row md:gap-5">
        <RHFInput name="firstName" label={t('forms.name')} register={register} errors={errors} />
        <RHFInput name="lastName" label={t('forms.lastName')} register={register} errors={errors} />
      </div>
      <div className="mb-10 flex flex-col gap-10 md:flex-row md:gap-5">
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

      <div className="mb-8">
        <RHFInput name="website" label={t('forms.webSite')} register={register} errors={errors} />
      </div>

      <div className="mb-10">
        <div className="font-roboto text-xs text-primary">
          <p>{t('forms.curriculum')}</p>
          <p className="cursor-pointer text-base uppercase" onClick={handleClick}>
            {t('forms.attach')}
          </p>
          <p>{t('forms.max-size')}</p>

          {curriculum && curriculum.length > 0 && !errors.curriculum && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-green-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              {t('forms.file-uploaded')}: {curriculum[0].name}
            </p>
          )}
        </div>

        <RHFInput
          type="file"
          name="curriculum"
          register={register}
          errors={errors}
          ref={inputRef}
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
          name="reference"
          label={t('forms.how-did-you-find-us')}
          errors={errors}
          register={register}
        />
      </div>

      <div className="text-center">
        <input
          disabled={isSubmitting}
          type="submit"
          value={t('forms.submit')}
          className="w-full rounded-full bg-periwinkle px-5 py-2.5 font-nexaLight uppercase tracking-wide text-white hover:cursor-pointer hover:bg-blue-purple-contrast lg:w-auto"
        />
      </div>
    </form>
  );
}
export default WorkWithUsForm;
