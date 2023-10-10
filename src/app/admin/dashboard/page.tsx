import Link from 'next/link'
import React from 'react'

const DashBoard = () => {
  return (
    <>
    <div>
      <Link href={"/admin/add"}>記事を作成する</Link>
      <Link href={"/admin/edit"}>記事を編集する</Link>
      <Link href={"/admin/profile"}>プロフィールを編集する</Link>
      </div>
      <div>Log out</div></>
  )
}

export default DashBoard