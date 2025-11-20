
import React from "react";
import Link from "next/link";
import "./globals.css"; 

export function DescricaoProjetos() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-2">Meus Projetos</h2>

      <p className="mb-2">
        Ao longo da minha jornada como desenvolvedor, criei diversos projetos
        explorando diferentes tecnologias, frameworks e abordagens.  
        Esta página apresenta apenas uma visão geral — você pode ver todos os meus projetos completos no link abaixo.
      </p>

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
