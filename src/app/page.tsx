import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-zinc-900">

      <form className="flex flex-col justify-center items-center gap-4 p-5 w-96 bg-zinc-700 rounded-lg">
        <p className="text-white font-bold">Faça Login</p>
        <input type="text" className="p-2 w-full h-8 rounded-sm" />
        <input type="password" className="p-2 w-full h-8 rounded-sm" />
        <button className={`px-8 py-4 w-full rounded-md text-white font-bold bg-purple-800 hover:bg-purple-700  ${inter}`}>
          ENTRAR
        </button>
      </form>
    </div >
  )
}
