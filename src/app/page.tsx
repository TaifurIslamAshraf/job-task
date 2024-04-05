import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Heading from "@/components/headers/Heading";

export default function Home() {
  return (
    <main className="bg-[#F6F6F6]">
      <div className="">
        <Heading text="Profile" />
      </div>
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="p-6 flex gap-8">
          <div className="xl:block 2xl:block 3xl:block hidden">
            <Sidebar />
          </div>
          <Hero />
        </div>
      </div>
    </main>
  );
}
