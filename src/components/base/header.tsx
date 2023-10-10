import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between p-6">
        <div>
          <FontAwesomeIcon className="text-4xl" icon={faGithubAlt} />
        </div>
        <nav>
          <ul className="flex gap-5">
            <Link
              href={"/"}
              className="rounded-md bg-slate-300 p-2 text-center font-semibold"
            >
              HOME
            </Link>
            {/* <Link
              href={"/blog/add"}
              className="rounded-md bg-slate-300 p-2 text-center font-semibold"
            >
              ブログ新規作成
            </Link> */}
            <Link
              href={"/admin/signup"}
              className="rounded-md bg-slate-300 p-2 text-center font-semibold"
            >
              Sign Up
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
