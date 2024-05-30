import { useStore } from '@nanostores/react';
import type { ProjectTypeCollection } from '@/types/strapi/ProjectType.ts';
import { getLangFromUrl, useTranslations } from '@/i18n/utils.ts';
import { projectTypeSelected } from '@/store/projectsStore.ts';

interface Props {
  url: URL;
  projectTypes: ProjectTypeCollection;
}

function ProjectsTypesList({ projectTypes, url }: Props) {
  const $projectTypeSelected = useStore(projectTypeSelected);

  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  return (
    <div className="flex flex-wrap justify-between gap-5 md:justify-normal">
      <span
        onClick={() => projectTypeSelected.set('all')}
        className={`cursor-pointer rounded-full border-2 border-primary px-5 font-roboto text-base uppercase text-primary
        ${$projectTypeSelected === 'all' ? 'bg-primary text-white' : 'transition-all hover:bg-primary-with-transparency hover:text-white'}
        `}
      >
        {t('common.all')}
      </span>

      {projectTypes.data.map((projectType) => (
        <span
          key={projectType.id}
          onClick={() => projectTypeSelected.set(projectType.attributes.slug)}
          className={`cursor-pointer rounded-full border-2 border-primary px-5 font-roboto text-base uppercase text-primary
          ${$projectTypeSelected === projectType.attributes.slug ? 'bg-primary text-white' : 'transition-all hover:bg-primary-with-transparency hover:text-white'}
          `}
        >
          {projectType.attributes.name}
        </span>
      ))}
    </div>
  );
}

export default ProjectsTypesList;
