import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Navlist from "./Navlist";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="flex items-center lg:hidden xl:hidden 2xl:hidden 3xl:hidden"
      >
        <Button variant={"custom"} size={"icon"} className="bg-[#181738]">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="max-w-[400px] text-center">
        <Image
          className="mx-auto my-6"
          blurDataURL="bluer"
          src={"/Assessment-logo.png"}
          alt="Assessment-logo"
          placeholder="blur"
          width={190}
          height={67}
        />
        <Navlist className="items-center justify-center space-y-7 font-semibold uppercase text-[16px]" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
