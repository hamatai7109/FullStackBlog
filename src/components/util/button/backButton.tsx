import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mt-10 text-center">
      <button
        onClick={handleGoBack}
        className="m-auto my-5 rounded-lg bg-slate-200 px-4 py-2 font-semibold shadow-xl hover:bg-red-200"
      >
        戻る
      </button>
    </div>
  );
}
