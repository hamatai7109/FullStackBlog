"use client";

import { useEffect, useState } from "react";

interface BlogPost {
  title: string;
  description: string;
}

//API取得用関数(詳細ページの内容を受け取る)
const getBlogId = async (id: number): Promise<BlogPost> => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

const detailPage = ({ params }: { params: { id: number } }) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

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
      {blogPost ? (
        <>
          <h1>{blogPost.title}</h1>
          <p>{blogPost.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default detailPage;
