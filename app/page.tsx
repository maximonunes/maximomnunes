import Image from "next/image";
import Link from "next/link";
import MagiaDoJSX from "@/components/MagiaDoJSX";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">


      <main className="bg-blue-200 p-8 rounded-2xl max-w-2xl w-full">

       
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mt-8">
          <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bem-vindo ao meu projeto com React e Next.js!
          </h1>

          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Aqui estou a explorar componentes, JSX e tudo o que torna o desenvolvimento moderno muito mais rápido e divertido.
          </p>

          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            O Next.js permite criar aplicações rápidas, escaláveis e fáceis de manter — e este projeto é só o começo.
          </p>

          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Continua a editar, experimentar e brincar com o código… é assim que a magia acontece!
          </p>
        </div>
      </main>
    </div>
  );
}
