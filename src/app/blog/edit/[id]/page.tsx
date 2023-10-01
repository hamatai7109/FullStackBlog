"use client";

import BackButton from "../../../../components/util/backButton";
import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

//API取得用関数(詳細ページの編集結果を送信)
const editBlog = async (
  title: string | undefined,
  description: string | undefined,
  id: number
) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, id }), //Json形式として送信
  });

  return res.json();
};

//API取得用関数(詳細ページの内容を受け取る)
const getBlogId = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

//API取得用関数
const deleteBlog = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: "DELETE",
    headers: {
      "content-Type": "application/json",
    },
  });

  return res.json();
};

// メイン
const EditPost = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null); //inputタグの入力値を受け取る。
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null); //textareaの入力値を受け取る。

  // 編集の送信
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); //リロードを防ぐ→ボタンを連打できなくする。

    const toastId = toast.loading("編集中...");
    await editBlog(
      titleRef.current?.value,
      descriptionRef.current?.value,
      params.id
    );
    toast.success("編集に成功しました！", { id: toastId });

    router.push("/"); //トップページに戻る（rootのpage.tsx）
    router.refresh(); //リロードさせて、記事投稿の更新を反映させるため。
  };

  // 削除の送信
  const handleDelete = async () => {
    const toastId = toast.loading("削除中です.....");
    await deleteBlog(params.id);
    toast.success("削除に成功しました！", { id: toastId });

    router.push("/");
    router.refresh();
  };

  // 記事のタイトル/内容を初期表示させる
  useEffect(() => {
    getBlogId(params.id)
      .then((data) => {
        if (titleRef.current && descriptionRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
        }
      })
      .catch((err) => {
        toast.error("エラーが発生しました。", { id: "1" });
      });
  });

  return (
    <>
      <Toaster />
      <div>
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-600 font-bold p-3">
            ブログの編集 🚀
          </p>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              ref={titleRef}
              placeholder="タイトルを入力"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2"
            />
            <textarea
              ref={descriptionRef}
              placeholder="記事詳細を入力"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg hover:bg-slate-100">
              更新
            </button>
          </form>
          <button
            onClick={handleDelete}
            className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto my-5 hover:bg-red-200"
          >
            削除
          </button>
          <BackButton />
        </div>
      </div>
    </>
  );
};

export default EditPost;
