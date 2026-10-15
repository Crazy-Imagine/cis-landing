import type { Member } from '@/types/strapi/Member.ts';
import { getImageUrl } from '@/utils/imageUrl';

interface Props {
  member: Member;
}

/**
 * Card del equipo (rediseño 2026). Pensada para fotos PNG sin fondo: la sigla del cargo (`rol`)
 * va detrás de la persona. Al pasar el mouse o enfocar con teclado se muestra la descripción.
 */
function MemberCard({ member }: Props) {
  const { name, role, rol, cardDescription, avatar } = member.attributes;
  const photo = avatar.data[0]?.attributes;

  return (
    <article
      tabIndex={0}
      className="group relative aspect-[290/448] w-full overflow-hidden rounded-sm rounded-tl-[48px] bg-primary-blue shadow-[0_14px_24px_-12px_rgba(19,30,41,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-blue"
    >
      {rol && (
        <span
          aria-hidden="true"
          className="absolute left-[12%] top-[8%] rotate-180 font-colvetica text-[110px] leading-none text-transparent [-webkit-text-stroke:1.5px_#7b2fb0] [writing-mode:vertical-rl]"
        >
          {rol}
        </span>
      )}

      {photo && (
        <img
          className="absolute inset-x-0 bottom-0 mx-auto h-[85%] w-full object-contain object-bottom"
          src={getImageUrl(photo.url)}
          alt={`${name} - ${role}`}
          loading="lazy"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-blue to-transparent" />

      <p className="absolute inset-x-6 bottom-6 font-roboto text-2xl font-bold text-white">
        {name}
      </p>

      <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-[rgba(19,30,41,0.94)] p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <p className="font-roboto text-2xl font-bold text-white">{name}</p>
        <p className="font-roboto text-base text-primary-new">{role}</p>
        {cardDescription && (
          <p className="mt-2 font-roboto text-sm text-white">{cardDescription}</p>
        )}
      </div>
    </article>
  );
}

export default MemberCard;
