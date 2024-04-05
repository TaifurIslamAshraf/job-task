import Image from "next/image";
import Sidebar from "./Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Profile = () => {
  return (
    <>
      <div className="cursor-pointer w-[75] h-[75] hidden xl:block 2xl:block 3xl:block">
        <Image src={"/avatar.png"} alt="profile" width={48} height={48} />
      </div>
      <div className="block xl:hidden 2xl:hidden 3xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={"/avatar.png"} alt="profile" width={48} height={48} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Sidebar />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Profile;
