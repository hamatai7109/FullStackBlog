import GitHubAuthServer from "@/components/util/auth/GutHubAuthServer";
import EditPostButton from "@/components/util/button/editPostButton";
import EditProfileButton from "@/components/util/button/editProfileButton";
import NewPostButton from "@/components/util/button/newPostButton";
import React from "react";

const DashBoard = () => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-xl bg-white px-20 py-10 text-center">
        <div className="flex flex-col gap-2">
          <NewPostButton />
          <EditPostButton />
          <EditProfileButton />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
