import Link from "next/link";
import React from "react";

const NewPostButton = () => {
  return (
    <Link
      className="rounded-md border-2  p-4 text-xl duration-500 hover:bg-slate-300"
      href={"/admin/blog/add"}
    >
      新規投稿
    </Link>
  );
};

export default NewPostButton;
