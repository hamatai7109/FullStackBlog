import Footer from "@/components/section/footer";
import SideBar from "../components/section/sideBar";
import TopMain from "../components/section/topMain";
import Header from "@/components/base/header";

export default async function Home() {
  return (
    <main className="h-full w-full">
      <div className="m-auto my-5 rounded-lg bg-blue-900 p-4 drop-shadow-xl sm:w-3/4 md:w-2/4 ">
        <h1 className="text-center text-2xl font-extrabold text-slate-200">
          Next js 練習用のブログ
        </h1>
      </div>
      <div className="flex p-10">
        <TopMain />
        <SideBar />
      </div>
      <Footer />
    </main>
  );
}
