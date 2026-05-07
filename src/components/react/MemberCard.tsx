import type { Member } from '@/types/strapi/Member.ts';

interface Props {
  member: Member;
}

function MemberCard({ member }: Props) {
  const attributes = member.attributes;
  const avatar = attributes.avatar.data[0].attributes;

  return (
    <div className="card h-full w-full rounded-lg">
      <div className="card-inner">
        <div className="card-front !relative !inset-auto">
          <div className="rounded-t-xl bg-primary-blue">
            <img
              className="w-full rounded-3xl p-4"
              src={avatar.url}
              alt={`${attributes.name} - ${attributes.role}`}
            />
          </div>

          <div className="mt-auto rounded-b-xl bg-primary-blue px-5 py-7 lg:px-4">
            <p className="font-nexaBold mb-1 text-white lg:text-xl">{attributes.name}</p>
            <p className="font-nexaLight text-base text-primary-new">{attributes.role}</p>
          </div>
        </div>

        <div className="card-back bg-primary-blue px-5 py-7 lg:p-4">
          <p className="font-nexaBold text-white lg:text-xl">{attributes.name}</p>
          <p className="font-nexaLight text-base text-primary-new">{attributes.role}</p>
          <p className="mt-2.5 font-roboto text-white">{attributes.cardDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
