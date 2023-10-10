"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export const GitHubAuthButton = ({ session }: { session: Session | null }) => {
  // Supabaseクライアント作成
  const supabase = createClientComponentClient();
  const router = useRouter();

  // サインイン処理
  const handleSignIn = async () => {
    // GitHub OAuthで認証する
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };
  // サインアウト処理
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session ? (
    // Sessionがあるかどうかで認証ボタンを切り替える
    <>
      <div>
        <div className="text-center">
          <FontAwesomeIcon className="text-6xl" icon={faGithub} />
          <h1 className="text-3xl">Logout</h1>
          <p className="mt-5">
            Are you sure you want to log out from this blog?
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <Link
            href={"/"}
            className="mx-auto flex w-full items-center justify-center gap-2 rounded-md border-2 border-slate-300 px-4 py-2 text-xl duration-500 hover:bg-blue-600 hover:text-white"
          >
            No
          </Link>
          <button
            onClick={handleSignOut}
            className="mx-auto flex w-full items-center justify-center gap-2 rounded-md border-2 border-slate-300 px-4 py-2 text-xl duration-500 hover:bg-blue-600 hover:text-white"
          >
            <p>YES</p>
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>
        <button
          onClick={handleSignIn}
          className="mx-auto flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-xl text-white"
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>Login with Github</p>
        </button>
      </div>
    </>
  );
};
