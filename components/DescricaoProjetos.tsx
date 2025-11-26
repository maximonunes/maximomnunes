import React from "react";
import Link from "next/link";
import Projeto from "./Projeto";
import "@/app/globals.css";

export function DescricaoProjetos() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-2">Meus Projetos</h2>

      <p className="mb-4">
        Ao longo da minha jornada como desenvolvedor, criei diversos projetos
        explorando diferentes tecnologias, frameworks e abordagens. Esta página
        apresenta apenas uma visão geral — você pode ver todos os meus projetos
        completos no link abaixo.
      </p>

      {/* Lista de Projetos */}
      <div className="space-y-4 mb-6">
        <Projeto nome="Loja Virtual" url="https://maximonunes.github.io/maximonunes/lab7/index.html" />
        <Projeto nome="Site com JS Interativo" url="https://maximonunes.github.io/maximonunes/" />
        <Projeto nome="Repositório" url="https://github.com/maximonunes/maximomnunes" />
      </div>

      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-semibold"
      >
        Acessar meus projetos no GitHub Pages
      </a>
    </section>
  );
}

