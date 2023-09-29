import ListAllPosts from "@/components/section/listAllPosts";
import SideBar from "@/components/section/sideBar";

export default async function Home() {

  return (
    <main className="w-full h-full">
      <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-5 rounded-lg bg-blue-900 drop-shadow-xl">
          <h1 className="text-slate-200 text-center text-2xl font-extrabold">
            Next js 練習用のブログ
          </h1>
        </div>
      <div className="flex p-10">
        <ListAllPosts/>
        <SideBar />
      </div>
    </main>
  );
}
