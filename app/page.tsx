import Image from "next/image";
import Link from "next/link";
import MagiaDoJSX from "@/components/MagiaDoJSX"; 
import "./globals.css"; 

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <header className="flex flex-col items-center gap-4 py-6">
        <h1 className="text-2xl font-semibold dark:text-white"></h1>

        {/* 
<nav className="flex gap-4 text-lg">
  <Link href="/">Intro</Link>
  <Link href="/sobre">Sobre</Link>
  <Link href="/caracteristicas">Caracteristícas</Link>
  <Link href="/tecnologias">Tecnologias</Link>
  <Link href="/projetos">Projetos</Link>
</nav>
*/}

      </header>

      {/* 👉 Componente inserido aqui */}
      <MagiaDoJSX />

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  
  <Image
    className="dark:invert"
    src="/next.svg"
    alt="Next.js logo"
    width={100}
    height={20}
    priority
  />

  <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      Bem-vindo ao meu projeto com React e Next.js!
    </h1>

    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      Aqui estou a explorar componentes, JSX e tudo o que torna o desenvolvimento 
      moderno muito mais rápido e divertido.
    </p>

    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      O Next.js permite criar aplicações rápidas, escaláveis e fáceis de manter — 
      e este projeto é só o começo.
    </p>

    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      Continua a editar, experimentar e brincar com o código… é assim que a magia acontece!
    </p>
  </div>

  <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    <a
      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
      href="https://vercel.com/new"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={16}
        height={16}
      />
      Deploy Now
    </a>

    <a
      className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
      href="https://nextjs.org/docs"
      target="_blank"
      rel="noopener noreferrer"
    >
      Documentation
    </a>
  </div>
  </main>
  </div>
  );
}

