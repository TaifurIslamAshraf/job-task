import {
  BadgeDollarSign,
  Bug,
  CirclePlay,
  FileSpreadsheet,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type Props = {
  banner: string;
  heading: string;
  instructor: string;
  classNo: string;
  classSchedule: string;
};

const ClassCard: FC<Props> = ({
  banner,
  heading,
  instructor,
  classNo,
  classSchedule,
}) => {
  return (
    <Card className="py-5 px-0">
      <CardContent className="">
        <div className="flex flex-col gap-5 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row lg:space-y-0 xl:space-y-0 2xl:space-y-0 3xl:space-y-0 space-y-5">
          <div className="space-y-4">
            <Image
              className="rounded-lg"
              src={banner}
              alt="class banner"
              width={460}
              height={295}
            />
            <div className="flex items-center text-[14px] text-[#565656] justify-start lg:justify-start xl:justify-start 2xl:justify-start 3xl:justify-start">
              <Link
                href={"/"}
                className="flex items-center justify-center gap-1 border-r-2 border-[#565656] px-2"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <p>Class Routine</p>
              </Link>
              <Link
                href={"/"}
                className="flex items-center justify-center gap-1 border-r-2 border-[#565656] px-2"
              >
                <Bug className="w-4 h-4" />
                <p>Report a Problem</p>
              </Link>
              <Link
                href={"/"}
                className="flex items-center justify-center gap-1 px-2"
              >
                <Star className="w-4 h-4" />
                <p>Give a Review</p>
              </Link>
            </div>
          </div>

          <div className="">
            <div className="space-y-4">
              <h1 className="font-semibold text-[#26235B] text-lg">
                {heading}
              </h1>
              <div className="">
                <div className="relative">
                  <div className="w-full h-[4px] bg-[#D9D9D9]"></div>
                  <div className="w-[20%] h-[4px] bg-[#FFB606] absolute top-0"></div>
                </div>

                <p className="text-[#B9B9B9] text-[14px]">
                  You have completed 20% of the Course! Continue your learning
                </p>
              </div>
              <p>Instructor: {instructor}</p>
              <p>Class No: {classNo}</p>
              <p>Class Schedule: {classSchedule}</p>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row items-center justify-evenly mt-12 gap-4">
              <Button
                variant={"custom2"}
                className="bg-[#26235B] text-[#F6F6F6] flex items-center gap-2"
              >
                <CirclePlay className="w-5 h-5" /> <span>Class Video</span>
              </Button>
              <Button
                variant={"custom2"}
                className="text-[#26235B] bg-[#F6F6F6] border border-[#26235B] flex items-center gap-2"
              >
                <Image
                  src={"/Meet.png"}
                  alt="google meet"
                  width={16}
                  height={16}
                />{" "}
                <span>Google Meet</span>
              </Button>
              <Button
                variant={"custom2"}
                className="bg-[#FFB606] text-[#26235B] border border-black flex items-center gap-2"
              >
                <BadgeDollarSign className="w-5 h-5" /> <span>Payment</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
