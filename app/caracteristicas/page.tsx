"use client"; 

import React, { useState } from "react";

const caracteristicas = [
  "JSX, sintaxe que mistura HTML e JS.",
  "Componentes, funções que retornam JSX.",
  "Componentes Reutilizáveis e Modulares.",
  "Roteamento Automático e APIs.",
  "Hooks: useState, useEffect e useSWR.",
  "Renderização Rápida e SEO Friendly.",
  "TypeScript Seguro e Escalável.",
  "Comunidade Ativa e Popularidade.",
];

export default function CaracteristicasPage() {
  const [mostrar, setMostrar] = useState(true);

  // Evento de clique no botão
  function handleClick() {
    setMostrar(!mostrar);
  }

  return (
    <section className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-semibold">
        Características do React e Next.js
      </h2>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {mostrar ? "Ocultar lista" : "Mostrar lista"}
      </button>

      {mostrar && (
        <ul className="list-disc list-inside">
          {caracteristicas.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
