import Homes from "@/pages/home";
import HomeExtra from "@/pages/home/HomeExtra";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Homes />
        <HomeExtra />
      </div>
    </main>
  );
}
