import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Profile = () => {
  return (
    <div className="mx-auto w-full rounded-md bg-white px-4 py-5">
      <div className="flex items-center gap-5">
        <FontAwesomeIcon
          className="rounded-full border-2 border-blue-500 p-3 text-5xl"
          icon={faGithubAlt}
        />
        <div>
          <h2 className="text-xl">Test Blogger</h2>
          <div className="mt-2 flex gap-2">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-lg">
        I am a full-stuck engineer working in Fukuoka, Japan. I was born and
        raised in Osaka. My goal is to get the permanent visa in Australia. My
        hobby is to play football and read books. Currently I am into making web
        apps by Next.js framework.
      </p>
    </div>
  );
};

export default Profile;
