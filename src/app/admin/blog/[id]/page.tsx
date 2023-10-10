"use client";

import { PostType } from "@/lib/types";
import Profile from "@/components/util/profile";
import TableContents from "@/components/util/tableContents";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Header from "@/components/base/header";

//API取得用関数(詳細ページの内容を受け取る)
const getBlogId = async (id: number): Promise<PostType> => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

const detailPage = ({ params }: { params: { id: number } }) => {
  const [blogPost, setBlogPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await getBlogId(params.id);
        setBlogPost(post);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <Header />
      {blogPost ? (
        <div>
          <div className="text-center">
            <h1 className="text-3xl">{blogPost.title}</h1>
            {/* <p>{blogPost.description}</p> */}
            <p className="mt-10 text-lg">
              {new Date(blogPost.date).toDateString()}に公開しました。
            </p>
          </div>
          <div className="mt-10 flex gap-6 p-6">
            <div className="w-1/12 text-center">
              <FontAwesomeIcon
                className="h-6 w-6 rounded-full bg-white p-2 text-slate-400 duration-500 hover:text-pink-400"
                icon={faHeart}
              />
              <p className="text-sm">いいね</p>
              <FontAwesomeIcon
                className="mt-5 h-6 w-6 rounded-lg border-white bg-white p-2 text-slate-400 duration-500 hover:bg-blue-400 hover:text-white"
                icon={faTwitter}
              />
              <p className="text-sm">ツイート</p>
            </div>
            <div className="w-8/12 rounded-md bg-white p-7">
              <p>{blogPost.description}</p>
            </div>
            <div className="w-3/12">
              <Profile />
              <TableContents />
            </div>
          </div>
        </div>
      ) : (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </p>
      )}
    </div>
  );
};

export default detailPage;
