import Profile from "../util/profile";
import LatestArticles from "../util/latestArticles";
import CategoryLists from "../util/categoryLists";

export default function SideBar() {
  return (
    <>
      <Profile />
      <LatestArticles />
      <CategoryLists />
    </>
  );
}
