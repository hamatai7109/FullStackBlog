import GitHubAuthServer from "@/components/util/auth/GutHubAuthServer";
import React from "react";

const SignUp = async () => {
  return (
    <div className="absolute left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 bg-white p-8">
      <GitHubAuthServer />
      {/* <EmailAuthServer /> */}
    </div>
  );
};

export default SignUp;
