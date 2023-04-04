'use client'
import { Roboto_Mono } from "next/font/google"
import { MouseEvent } from "react"
import { LogIn, User } from "react-feather"

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export default function Home() {

  const handlelogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('login')
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-zinc-900">

      <form className="flex flex-col justify-center items-center gap-4 p-5 w-auto bg-zinc-800 rounded-lg shadow-md shadow-black">
        <span className="flex gap-3 items-center">
          <User size={20} className="text-purple-500" />
          <p className={`text-gray-100 font-medium ${roboto_mono}`}>
            {"<"}<span className={"text-purple-500"}>NextjsRoutesAuth</span> varaint={"{"}<span className={"text-purple-400"}>study</span>{"}"} {"/>"}
          </p>
        </span>

        <input type="email" className="p-2 w-full h-8 rounded-md" />

        <input type="password" className="p-2 w-full h-8 rounded-md" />

        <button
          type="submit"
          className={`flex items-center justify-center gap-2 px-8 py-4 w-full rounded-md text-gray-200 font-medium bg-purple-800 hover:bg-purple-700 transition-colors ${roboto_mono}`}
          onClick={(e: MouseEvent<HTMLButtonElement>) => handlelogin(e)}
        >
          <LogIn size={20} />log in
        </button>
      </form>
    </div >
  )
}
