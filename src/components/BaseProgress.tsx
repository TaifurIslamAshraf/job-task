import { cn } from "@/lib/utils";
import Image from "next/image";
import Base1 from "../../public/base1.png";
import Base10 from "../../public/base10.png";
import Base2 from "../../public/base2.png";
import Base3 from "../../public/base3.png";
import Base4 from "../../public/base4.png";
import Base5 from "../../public/base5.png";
import Base6 from "../../public/base6.png";
import Base7 from "../../public/base7.png";
import Base8 from "../../public/base8.png";
import Base9 from "../../public/base9.png";

const progressLogo = [
  Base1,
  Base2,
  Base3,
  Base4,
  Base5,
  Base6,
  Base7,
  Base8,
  Base9,
  Base10,
];

const BaseProgress = () => {
  return (
    <div className="mt-10">
      <div className="relative">
        <div className="z-10 absolute w-full">
          <div className="flex items-center justify-between">
            {progressLogo.map((item, index) => (
              <div className="" key={index}>
                <div
                  className={cn(
                    index === 0 && "ring-2 ring-[#FFB606]",
                    "bg-[#E9E9EF] w-[48px] h-[48px] rounded-full flex justify-center items-center"
                  )}
                >
                  <Image src={item} alt="base" width={32} height={32} />
                </div>
              </div>
            ))}
          </div>
          <svg
            className="w-[16px] h-[16px] text-[#FFB606] rotate-180 ml-3 mt-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 22 22 2 22" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute w-full top-5 z-0">
          <div className="bg-[#E9E9EF] h-[6px] w-full"></div>
          <div className="bg-[#FFB606] h-[6px] w-[8%] absolute bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default BaseProgress;
