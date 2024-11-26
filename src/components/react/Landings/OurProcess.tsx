import React from 'react';
import { OUR_PROCESS } from '@/consts/data';
import type { OurProcessProps } from '@/types/OurServicesLanding';

export function OurProcess() {
  const [currentProcess, setCurrentProcess] = React.useState<OurProcessProps>(OUR_PROCESS[0]);
  const handleSelectProcess = (process: OurProcessProps) => {
    setCurrentProcess(process);
  };
  return (
    <div className="flex items-center justify-center gap-10">
      <div className="flex w-1/2 flex-col gap-[32px]">
        {OUR_PROCESS.map((process) => (
          <div
            onClick={() => handleSelectProcess(process)}
            className="cursor-pointer bg-[#FAFAFA] p-10"
            style={{
              borderLeft: '7px solid',
              borderImage: 'linear-gradient(180deg, #27AAE1 0%, #193174 100%) 1',
            }}
          >
            <p className="font-nexaBold text-[30px] lg:text-[38px] ">{process.title}</p>
            {process.id === currentProcess.id && (
              <p className="font-nexaLight text-[16px] lg:text-[36px] ">{currentProcess.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className="w-1/2">
        <div
          style={{
            ...(currentProcess.id === 4
              ? {
                  overflow: 'hidden',
                  backgroundImage: `url(${currentProcess.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {
                  backgroundImage: `url(${currentProcess.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }),
            height: '450px',
          }}
          className={`our-process-img rounded-[30px] ${currentProcess.id === 4 ? 'h-[450px] overflow-hidden' : 'h-full '}`}
        >
          {/* {currentProcess.id !== 4 && (
            <img src={currentProcess.image} alt={currentProcess.title} className="rounded-[30px]" />
          )} */}
        </div>
      </div>
    </div>
  );
}
