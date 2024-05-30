import { useStore } from '@nanostores/react';
import type { ProjectCollection } from '@/types/strapi/Project.ts';
import { projectTypeSelected } from '@/store/projectsStore.ts';
import { getLangFromUrl, useTranslatedPath, useTranslations } from '@/i18n/utils.ts';

interface Props {
  url: URL;
  projects: ProjectCollection;
}

function ProjectsList({ projects, url }: Props) {
  const $projectTypeSelected = useStore(projectTypeSelected);

  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const filteredProjects = projects.data.filter((project) => {
    if ($projectTypeSelected === 'all') return true;
    return project.attributes.project_types.data?.[0].attributes.slug === $projectTypeSelected;
  });

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 ">
      {filteredProjects.map((project) => (
        <article key={project.id} className="flex flex-col rounded-xl shadow-lg">
          <picture>
            <img
              className="h-auto w-full rounded-t-xl"
              src={project.attributes.images.data[0].attributes.url}
              alt={project.attributes.title}
              width={project.attributes.images.data[0].attributes.width}
              height={project.attributes.images.data[0].attributes.height}
              loading="lazy"
              decoding="async"
            />
          </picture>

          <div className="mt-auto p-5 text-center">
            <p className="font-nexaBold text-base text-primary">{project.attributes.title}</p>
            <p className="inline-block font-nexaBold uppercase text-periwinkle">
              <a
                className="group relative flex items-end justify-center
              after:absolute after:-left-0.5 after:bottom-0.5 after:h-0.5 after:w-full after:origin-bottom-right after:scale-0 after:bg-periwinkle after:transition-transform after:duration-200 after:ease-out after:content-['']
              hover:after:origin-bottom-left hover:after:scale-100"
                href={translatePath(`/project/${project.attributes.slug}`, lang)}
              >
                <span className="text-sm">{t('common.view-project')}</span>
                <svg
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  fill="none"
                  role="img"
                  className="group-hover:animate-wiggle"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 12h14M15 16l4-4M15 8l4 4"></path>
                </svg>
              </a>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectsList;
