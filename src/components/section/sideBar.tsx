export default function SideBar() {
  return (
    <div className="w-1/3 bg-blue-100 p-4">
      <div className="mx-auto mt-6 w-3/4 text-center">
        <svg
          className="mx-auto my-0"
          viewBox="0 0 36 36"
          fill="none"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          <mask
            id=":rj4:"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <rect width="36" height="36" fill="#FFFFFF" rx="72"></rect>
          </mask>
          <g mask="url(#:rj4:)">
            <rect width="36" height="36" fill="#ff8716"></rect>
            <rect
              x="0"
              y="0"
              width="36"
              height="36"
              transform="translate(3 5) rotate(261 18 18) scale(1)"
              fill="#73bc91"
              rx="36"
            ></rect>
            <g transform="translate(-5 1) rotate(-1 18 18)">
              <path d="M13,19 a1,0.75 0 0,0 10,0" fill="#000000"></path>
              <rect
                x="13"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
              <rect
                x="21"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
            </g>
          </g>
        </svg>
        <h2 className="mt-5 text-2xl">Test Blogger</h2>
        <p className="mt-4 text-xl">I am a beginner of Next.js</p>
      </div>
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
          カテゴリー6{" "}
        </p>
      </div>
    </div>
  );
}
