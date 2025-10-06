import React from 'react';
import type { OurProcessProps } from '@/types/OurServicesLanding';

interface Props {
  data: {
    id: number;
    title: string;
    image: string;
    content: string;
  }[];
}

export function OurProcess({ data }: Props) {
  const [currentProcess, setCurrentProcess] = React.useState<OurProcessProps>(data[0]);
  const handleSelectProcess = (process: OurProcessProps) => {
    setCurrentProcess(process);
  };
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="flex w-full flex-col gap-[32px] lg:w-1/2">
        {data.map((process, index) => (
          <>
            <div
              key={index}
              onClick={() => handleSelectProcess(process)}
              className="cursor-pointer bg-[#FAFAFA] p-10"
              style={{
                borderLeft: '7px solid',
                borderImage: 'linear-gradient(180deg, #27AAE1 0%, #193174 100%) 1',
              }}
            >
              <p className="font-nexaBold text-[20px] lg:text-[38px] ">{process.title}</p>
              {process.id === currentProcess.id && (
                <p className="font-nexaLight text-[16px] lg:text-[36px] ">
                  {currentProcess.content}
                </p>
              )}
            </div>
            {process.id === currentProcess.id && (
              <div
                style={{
                  ...(currentProcess.id === 4
                    ? {
                        overflow: 'hidden',
                        backgroundImage: `url(${currentProcess.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }
                    : {
                        backgroundImage: `url(${currentProcess.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }),
                }}
                className={`our-process-img rounded-[30px] lg:hidden ${currentProcess.id === 4 ? 'h-[450px] overflow-hidden' : 'h-full '}`}
              >
                {/* {currentProcess.id !== 4 && (
            <img src={currentProcess.image} alt={currentProcess.title} className="rounded-[30px]" />
          )} */}
              </div>
            )}
          </>
        ))}
      </div>
      <div className=" hidden w-1/2 items-center justify-center lg:flex">
        <img
          src={currentProcess.image}
          alt={currentProcess.title}
          className="max-w-[450px] rounded-[30px] object-contain  md:h-[480px]"
        />
      </div>
    </div>
  );
}
