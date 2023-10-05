import { PostType } from "@/app/types";
import Link from "next/link";
import React from "react";

// 全記事取得API
async function fetchAllBlog() {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    headers: {
      "content-Type": "application/json",
    },
    cache: "no-store", //SSR(Server Side Rendering) → 更新が頻繁に行われるブログなどに有効。
  });

  const data = await res.json();

  return data.posts;
}

const Footer = async () => {
  const posts = await fetchAllBlog();

  return (
    <div className="bg-blue-900 text-white flex justify-around gap-8 p-10 [&>*:not(:last-child)]:border-r-2 [&>*:not(:last-child)]:border-r-gray-300">
      <div className="w-[calc(100%/3)] p-3">
        <div className="pb-8">
          <h2 className="text-xl inline-block relative after:absolute after:-bottom-8 after:left-0 after:content-[''] after:w-full after:h-[2px] after:bg-amber-300">
            About me
          </h2>
        </div>
        <p className="mt-5">
          福岡の某SIerにSESとして派遣されています。現場では主にPostgresやJavaを触ることが多いです。VBAや.NETも少しばかり扱うことが出来ます。
          趣味でWeb系の勉強をしています。現在Next.jsを用いて複数の個人開発を進めています。サッカーと旅が好きです。
        </p>
        <p className="mt-5">
          Next.js / React / Java / Kotlin / Scala / Swift / Flutter
        </p>
      </div>
      <div className="w-[calc(100%/3)] p-3">
        <div className="pb-8">
          <h2 className="text-xl inline-block relative after:absolute after:-bottom-8 after:left-0 after:content-[''] after:w-full after:h-[2px] after:bg-amber-300">
            Latest Articles
          </h2>
        </div>
        <div className="w-full">
          {posts.map(
            (
              post: PostType //map関数で、配列（ブログ記事）を順番に並べていく。()だとreturn省略OK、{}だとreturnが必要
            ) => (
              <div key={post.id} className="mt-5">
                <div className="my-1">
                  <div className="mr-auto">
                    <Link
                      href={`/blog/${post.id}`}
                      className="mr-auto text-xs font-semibold"
                    >
                      {post.title}
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-[calc(100%/3)] p-3">
        <div className="pb-8">
          <h2 className="text-xl inline-block relative after:absolute after:-bottom-8 after:left-0 after:content-[''] after:w-full after:h-[2px] after:bg-amber-300">
            Contact
          </h2>
        </div>
        <ul className="mt-5">
          <li>E-mail</li>
          <li>X(旧Twitter)</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
