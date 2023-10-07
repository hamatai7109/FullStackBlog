import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../util/profile";

export default function SideBar() {
  return (
    <div className="w-1/3 bg-blue-100 p-4">
      <Profile />
      <div className="mx-auto mt-6 w-3/4 bg-slate-300 p-6">
        <h2 className="text-center">最近の記事</h2>
        <ul>
          <li>blog1</li>
          <li className="mt-2">blog2</li>
          <li className="mt-2">blog3</li>
          <li className="mt-2">blog4</li>
          <li className="mt-2">blog5</li>
        </ul>
      </div>
      <div className="mx-auto mt-6 w-3/4 bg-slate-300 p-6">
        <h2 className="text-center">カテゴリー/タグ</h2>
        <p className="mt-5">
          カテゴリー1 / カテゴリー2 / カテゴリー3 / カテゴリー4 / カテゴリー5 /
          カテゴリー6
        </p>
      </div>
    </div>
  );
}
