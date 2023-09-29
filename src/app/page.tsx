import Image from "next/image";
import Link from "next/link";
import { PostType } from "./types";
import Header from "@/components/base/header/header";

// 全記事取得API
async function fetchAllBlog() {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    cache: "no-store", //SSR(Server Side Rendering) → 更新が頻繁に行われるブログなどに有効。
  });

  const data = await res.json();

  return data.posts;
}

export default async function Home() {
  const posts = await fetchAllBlog();

  return (
    <main className="w-full h-full">
      <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-5 rounded-lg bg-blue-900 drop-shadow-xl">
        <h1 className="text-slate-200 text-center text-2xl font-extrabold">
          Next js 練習用のブログ
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {posts.map(
          (
            post: PostType //map関数で、配列（ブログ記事）を順番に並べていく。()だとreturn省略OK、{}だとreturnが必要
          ) => (
            <div
              key={post.id}
              className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-300 flex flex-col justify-center"
            >
              <div className="flex items-center my-3">
                <div className="mr-auto">
                  <h2 className="mr-auto font-semibold">{post.title}</h2>
                </div>
                <Link
                  href={`/blog/edit/${post.id}`}
                  className="px-4 py-1 text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
                >
                  編集
                </Link>
              </div>
              <div className="mr-auto my-1">
                <blockquote className="font-bold text-slate-700">
                  {new Date(post.date).toDateString()}
                </blockquote>
              </div>

              <div className="mr-auto my-1">
                <h2>{post.description}</h2>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}
