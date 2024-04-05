import { cn } from "@/lib/utils";
import {
  BellRing,
  CloudUpload,
  Gift,
  GraduationCap,
  HandCoins,
  Heart,
  LogOut,
  PersonStanding,
  School,
  Settings,
  User,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sidebarItems = [
  {
    name: "karate Course",
    path: "/",
    icon: <GraduationCap />,
  },
  {
    name: "Online Courses",
    path: "/",
    icon: <School />,
  },
  {
    name: "Videos",
    path: "/",
    icon: <CloudUpload />,
  },
  {
    name: "Equipments",
    path: "/",
    icon: <Gift />,
  },
  {
    name: "Competition",
    path: "/",
    icon: <PersonStanding />,
    space: true,
  },
  {
    name: "Your Favorite",
    path: "/",
    icon: <Heart />,
  },
  {
    name: "Notification",
    path: "/",
    icon: <BellRing />,
  },
  {
    name: "My Profile",
    path: "/",
    icon: <User />,
  },
  {
    name: "Payment Method",
    path: "/",
    icon: <HandCoins />,
  },
  {
    name: "Setting",
    path: "/",
    icon: <Settings />,
  },
  {
    name: "Sign Out",
    path: "/",
    icon: <LogOut />,
  },
];

const Sidebar = () => {
  return (
    <div
      className={cn(
        poppins.className,
        "bg-white min-w-[250px] h-screen rounded-3xl py-6 xl:h-auto overflow-y-scroll xl:overflow-y-auto 2xl:h-auto 2xl:overflow-y-auto 3xl:h-auto 3xl:overflow-y-auto"
      )}
    >
      <div className="relative flex items-center justify-center top-[120px] px-2">
        <div className="w-[202px] h-[202px] bg-[#9280A0] rounded-full absolute"></div>
        <div className="w-[190px] h-[190px] bg-[#DEDEE6] rounded-full absolute "></div>
        <div className="w-[179px] h-[179px] bg-[#f7f7ff] rounded-full absolute "></div>
        <Image
          className="rounded-full absolute"
          src={"/avatar2.png"}
          alt="avatar"
          width={170}
          height={170}
        />
        <Image
          className=" absolute top-7 right-5"
          src={"/logo.png"}
          alt="avatar"
          width={52}
          height={52}
        />
        <Image
          className=" absolute top-7 left-5"
          src={"/Captain_band.png"}
          alt="avatar"
          width={44}
          height={44}
        />
      </div>

      <div className="mt-[250px]">
        <div className="text-center space-y-2 px-2">
          <h1 className="text-[20px] text-[#26235B]">Assessment Username</h1>
          <p className="text-[#565656]">Batch no: KC22041</p>
          <p className="text-[#565656]">Roll no : OKC1122334</p>
        </div>

        <div className="mt-6">
          {sidebarItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={cn(
                item.space ? "mb-7" : "mt-2 mb-2",
                "flex items-center bg-[#E9E9EF] text-[#565656] p-3 gap-4 hover:bg-[#26235B] hover:text-[#F6F6F6] transition-all duration-300"
              )}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
