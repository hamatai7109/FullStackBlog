"use client"; //CL(クライアントレンダリングに変更)：デフォルトではSSRになっており、useRefなどのHooksが使えないため。

import BackButton from "@/components/util/button/backButton";
import { useRouter } from "next/navigation";
import React from "react";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

//API取得用関数
const postBlog = async (
  title: string | undefined,
  description: string | undefined,
) => {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }), //Json形式として送信
  });

  return res.json();
};

//メイン
const PostBlog = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null); //inputタグの入力値を受け取る。
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null); //textareaの入力値を受け取る。

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); //リロードを防ぐ→ボタンを連打できなくする。

    const toastId = toast.loading("投稿中...");
    await postBlog(titleRef.current?.value, descriptionRef.current?.value);
    toast.success("投稿に成功しました！", { id: toastId });

    router.push("/"); //トップページに戻る（rootのpage.tsx）
    router.refresh(); //リロードさせて、記事投稿の更新を反映させるため。
  };

  return (
    <>
      <Toaster />
      <div className="absolute left-2/4 top-2/4 -z-30 flex w-3/4 -translate-x-1/2 -translate-y-1/2">
        <div className="mx-auto w-full">
          <p className="p-3 text-center text-4xl font-bold text-slate-600">
            ブログ新規作成 🚀
          </p>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              ref={titleRef}
              placeholder="タイトルを入力"
              type="text"
              className="my-5 w-1/2 rounded-md px-4 py-2"
            />
            <textarea
              ref={descriptionRef}
              placeholder="記事詳細を入力"
              className="my-2 h-96 w-full rounded-md px-4 py-2"
            ></textarea>
            <button className="m-auto rounded-lg bg-slate-200 px-4 py-2 font-semibold shadow-xl hover:bg-slate-100">
              投稿
            </button>
          </form>
          <BackButton />
        </div>
      </div>
    </>
  );
};

export default PostBlog;
