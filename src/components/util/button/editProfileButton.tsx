import Link from "next/link";
import React from "react";

const EditProfileButton = () => {
  return (
    <Link
      className="rounded-md border-2  p-4 text-xl duration-500 hover:bg-slate-300"
      href={"/admin/profile"}
    >
      プロフィールを編集
    </Link>
  );
};

export default EditProfileButton;
