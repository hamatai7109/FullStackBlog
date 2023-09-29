import Link from 'next/link'
import React from 'react'

export default function BackButton () {
  return (
    <div className='mt-10'>
      <Link href="/" className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto my-5 hover:bg-red-200">
            戻る
      </Link>
    </div>
  )
}
