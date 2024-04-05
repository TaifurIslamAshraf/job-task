import { Share2 } from "lucide-react";
import Image from "next/image";
import BaseProgress from "./BaseProgress";
import ClassCard from "./ClassCard";
import ClassRoutine from "./ClassRoutine";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Hero = () => {
  return (
    <section className="bg-white shadow-md rounded-3xl p-6 w-full">
      <div className="">
        <h1 className="text-[#26235B] text-[24px] font-semibold ml-4">
          MY KARATE COURSES
        </h1>
        <div className="mt-2">
          <Tabs defaultValue="Course" className="space-y-4">
            <TabsList className="bg-transparent">
              <TabsTrigger
                className="data-[state=active]:shadow-none data-[state=active]:border-[#FFB606] data-[state=active]:border-b-2 rounded-none"
                value="Course"
              >
                Course Details
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:shadow-none data-[state=active]:border-[#FFB606] data-[state=active]:border-b-2 rounded-none"
                value="Class"
              >
                Class Videos
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="Course"
              className="flex-col flex gap-6 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row space-y-6 lg:space-y-0 xl:space-y-0 2xl:space-y-0 3xl:space-y-0"
            >
              <div className="basis-[60%]">
                <Image
                  src={"/course_banner.png"}
                  alt="course banner"
                  width={402}
                  height={260}
                />
              </div>
              <div className="basis-full space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#26235B] text-[18px] font-semibold">
                    SHITO-RYU KARATE
                  </h2>
                  <Share2 />
                </div>
                <p className="text-[#565656]">
                  non, amet, nibh ullamcorper ex. laoreet amet, commodo
                  fringilla leo. at, scelerisque tincidunt enim. facilisis amet,
                  urna. odio odio non urna. nibh id eu nisi . Morbi odio nisl.
                  nulla, vel dui. nisi sit orci quis efficitur. tincidunt quis
                  nisl. sed Sed ex est. varius Nam quis eget lorem. id Donec
                  libero, est. eget non . non, amet, nibh ullamcorper ex.
                  laoreet amet, commodo fringilla leo. at, scelerisque tincidunt
                  enim. facilisis amet, urna. odio odio non urna. nibh id eu
                  nisi . Morbi odio nisl. nulla, vel dui. nisi sit orci quis
                  efficitur. tincidunt quis nisl. sed Sed ex est. varius Nam
                  quis eget lorem. id Donec libero, est. eget non .
                </p>
              </div>
            </TabsContent>

            <TabsContent
              value="Class"
              className="flex-col gap-6 lg:flex xl:flex 2xl:flex 3xl:flex space-y-6 lg:space-y-0  xl:space-y-0 2xl:space-y-0  3xl:space-y-0"
            >
              <div className="basis-[60%]">
                <Image
                  src={"/course_banner.png"}
                  alt="course banner"
                  width={402}
                  height={260}
                />
              </div>
              <div className="basis-full space-y-2">
                <h2 className="text-[#26235B] text-[18px] font-semibold">
                  Class Videos
                </h2>
                <p className="text-[#565656]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita accusamus eum, nemo commodi esse dolorem libero a
                  dolorum harum inventore magnam asperiores quibusdam ratione
                  aut. Explicabo dolorum ratione quibusdam at consequuntur alias
                  sequi, in, eius vero veritatis omnis id officiis?
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="hidden md:block lg:block xl:block 2xl:block 3xl:block">
        <BaseProgress />
      </div>
      <div className="mt-10 md:mt-36 lg:mt-36 xl:mt-36 2xl:mt-36 3xl:mt-36">
        <ClassCard
          heading="SHITO-RYU KARATE WHIE BELT PROG"
          banner="/class_banner.png"
          classNo="3"
          instructor="Adil Rashid"
          classSchedule="19th Jan, 2024 / 2:00 pm - 4:00 pm"
        />
      </div>
      <div className="mt-6">
        <ClassRoutine />
      </div>
    </section>
  );
};

export default Hero;
