import Image from "next/image";
import Profile from "../Profile";
import SearchBar from "../Search";
import MobileNav from "./MobileNav";
import Navlist from "./Navlist";

const Navbar = () => {
  return (
    <nav className="bg-[#27245c] text-[#F6F6F6] py-2 ">
      <div className="lg:px-24 px-10 max-w-[1400px] w-full mx-auto flex justify-between">
        <Image
          className="lg:block xl:block 2xl:block 3xl:block hidden"
          blurDataURL="bluer"
          src={"/Assessment-logo.png"}
          alt="Assessment-logo"
          placeholder="blur"
          width={190}
          height={67}
        />
        <MobileNav />
        <Navlist className="items-center justify-center gap-6 uppercase text-[16px] lg:flex xl:flex 2xl:flex 3xl:flex hidden" />
        <div className="flex items-center justify-center gap-10">
          <SearchBar />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
