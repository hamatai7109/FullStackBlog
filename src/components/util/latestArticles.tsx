import React from "react";

const LatestArticles = () => {
  return (
    <div className="mx-auto mt-6 rounded-md bg-white p-6">
      <h2 className="text-center">最近の記事</h2>
      <ul>
        <li className="opacity-50 duration-500 hover:font-bold hover:opacity-100">
          blog1
        </li>
        <li className="mt-2 opacity-50 duration-500 hover:font-bold hover:opacity-100">
          blog2
        </li>
        <li className="mt-2 opacity-50 duration-500 hover:font-bold hover:opacity-100">
          blog3
        </li>
        <li className="mt-2 opacity-50 duration-500 hover:font-bold hover:opacity-100">
          blog4
        </li>
        <li className="mt-2 opacity-50 duration-500 hover:font-bold hover:opacity-100">
          blog5
        </li>
      </ul>
    </div>
  );
};

export default LatestArticles;
