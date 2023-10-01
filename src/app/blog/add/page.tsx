"use client"; //CL(クライアントレンダリングに変更)：デフォルトではSSRになっており、useRefなどのHooksが使えないため。

import BackButton from "../../../components/util/backButton";
import { useRouter } from "next/navigation";
import React from "react";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

//API取得用関数
const postBlog = async (
  title: string | undefined,
  description: string | undefined
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
      <div className="w-3/4 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 flex -z-30">
        <div className="w-full mx-auto">
          <p className="text-4xl text-center text-slate-600 font-bold p-3">
            ブログ新規作成 🚀
          </p>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              ref={titleRef}
              placeholder="タイトルを入力"
              type="text"
              className="rounded-md px-4 w-1/2 py-2 my-5"
            />
            <textarea
              ref={descriptionRef}
              placeholder="記事詳細を入力"
              className="h-96 rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
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
