
import { Roboto_Mono } from "next/font/google"
const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export default function Test() {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-zinc-900">
      Teste
    </div >
  )
}
