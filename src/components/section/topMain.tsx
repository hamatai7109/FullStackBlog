import { PostType } from "@/app/types";
import Link from "next/link";
import React from "react";

// 全記事取得API
async function fetchAllBlog() {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    cache: "no-store", //SSR(Server Side Rendering) → 更新が頻繁に行われるブログなどに有効。
  });

  const data = await res.json();

  return data.posts;
}

export default async function TopMain() {
  const posts = await fetchAllBlog();

  return (
    <div className="w-2/3">
      <div className="w-full">
        {posts.map(
          (
            post: PostType //map関数で、配列（ブログ記事）を順番に並べていく。()だとreturn省略OK、{}だとreturnが必要
          ) => (
            <div
              key={post.id}
              className="p-4 rounded-md mx-3 mb-8 bg-slate-300"
            >
              <div className="flex items-center my-3">
                <div className="mr-auto">
                  <h2 className="mr-auto text-2xl font-semibold">
                    {post.title}
                  </h2>
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
    </div>
  );
}