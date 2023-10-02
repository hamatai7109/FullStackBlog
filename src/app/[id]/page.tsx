"use client";

import React, { use, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

//API取得用関数(詳細ページの内容を受け取る)
const getBlogId = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};


// メイン
const showPost = async ({ params }: { params: { id: number } }) => {
  const post = await getBlogId(params);

  return (
    <>
      <Toaster/>
      <div>
        {post.title}
      </div>
    </>
  );
};

export default showPost;
