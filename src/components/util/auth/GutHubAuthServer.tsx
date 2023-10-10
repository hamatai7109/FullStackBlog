import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { GitHubAuthButton } from "./GitHubAuthButton";

export default async function GitHubAuthServer() {
  const supabase = createServerComponentClient({ cookies });

  // サーバーコンポーネント上ではセッションを取得する
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // クライアントコンポーネントへセッションを渡す
  return <GitHubAuthButton session={session} />;
}
