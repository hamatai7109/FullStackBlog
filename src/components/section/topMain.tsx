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

export default async function TopMain() {
  const posts = await fetchAllBlog();

  return (
    <div className="w-2/3">
      <div className="flex w-full flex-wrap gap-2">
        {posts.map(
          (
            post: PostType, //map関数で、配列（ブログ記事）を順番に並べていく。()だとreturn省略OK、{}だとreturnが必要
          ) => (
            <div
              key={post.id}
              className="w-[calc(100%/2-20px)] rounded-md bg-slate-300 p-4 hover:bg-slate-50"
            >
              <div className="my-3 flex items-center justify-between">
                <div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-lg font-semibold hover:underline"
                  >
                    {post.title}
                  </Link>
                </div>
                <Link
                  href={`/blog/edit/${post.id}`}
                  className="rounded-md bg-slate-900 px-3 py-1 text-center text-lg font-semibold text-slate-200 opacity-50 hover:opacity-100"
                >
                  編集
                </Link>
              </div>
              <div className="my-1 mr-auto">
                <blockquote className="font-bold text-slate-700">
                  {new Date(post.date).toDateString()}
                </blockquote>
              </div>
              <div className="my-1 mr-auto">
                <h2>{post.description}</h2>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
