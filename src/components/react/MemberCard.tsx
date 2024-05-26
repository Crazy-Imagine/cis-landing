import React from 'react';
import type { Member } from '@/types/strapi/Member.ts';

interface Props {
  member: Member;
}

function MemberCard({ member }: Props) {
  const attributes = member.attributes;
  const avatar = attributes.avatar.data[0].attributes;

  const imgRef = React.useRef<HTMLImageElement>(null);
  const textContainerRef = React.useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = React.useState<number>();

  React.useEffect(() => {
    const adjustCardHeight = () => {
      if (imgRef.current && textContainerRef.current) {
        const imgHeight = imgRef.current.clientHeight;
        const textContainerHeight = textContainerRef.current.clientHeight;
        setCardHeight(imgHeight + textContainerHeight);
      }
    };

    if (imgRef.current) {
      imgRef.current.addEventListener('load', adjustCardHeight);
      window.addEventListener('resize', adjustCardHeight);
    }

    adjustCardHeight();

    return () => {
      if (imgRef.current) {
        imgRef.current.removeEventListener('load', adjustCardHeight);
      }
      window.removeEventListener('resize', adjustCardHeight);
    };
  }, []);

  return (
    <div className="card w-full rounded-lg" style={{ height: cardHeight }}>
      <div className="card-inner">
        <div className="card-front">
          <img
            className="rounded-t-lg"
            ref={imgRef}
            src={avatar.url}
            alt={`${attributes.name} - ${attributes.role}`}
            width={avatar.width}
            height={avatar.height}
            loading="lazy"
            decoding="async"
          />

          <div ref={textContainerRef} className="mt-auto px-5 py-7 lg:px-4">
            <p className="mb-1 font-nexaBold text-primary lg:text-xl">{attributes.name}</p>
            <p className="font-nexaLight text-base text-primary">{attributes.role}</p>
          </div>
        </div>

        <div className="card-back overflow-hidden px-5 py-7 lg:p-4">
          <p className="font-nexaBold text-primary lg:text-xl">{attributes.name}</p>
          <p className="font-nexaLight text-base text-primary">{attributes.role}</p>
          <p className="mt-2.5 text-ellipsis font-roboto text-grayish">
            {attributes.cardDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
