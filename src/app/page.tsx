import Footer from "@/components/section/footer";
import SideBar from "../components/section/sideBar";
import TopMain from "../components/section/topMain";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/components/base/header";
config.autoAddCss = false;

export default async function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full">
        <div className="rounded-lgp-4 m-auto my-5 drop-shadow-xl sm:w-3/4 md:w-2/4 ">
          <h1 className="text-center text-2xl font-extrabold ">
            はまたいのテックブログ
          </h1>
        </div>
        <div className="flex p-10">
          <div className="w-3/4">
            <TopMain />
          </div>
          <div className="w-1/4">
            <SideBar />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
