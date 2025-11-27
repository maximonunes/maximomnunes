"use client";

import React, { useState } from "react"
import "@/app/globals.css";
import { ICaracteristica } from "@/components/Caracteristica";

// Simulando os dados da mesma forma
const listaDeCaracteristicas: ICaracteristica[] = [
  { id: "velocidade", nome: "Velocidade", descricao: "Muito rápido!" },
  { id: "forca", nome: "Força", descricao: "Extremamente forte!" },
  { id: "agilidade", nome: "Agilidade", descricao: "Se move com precisão!" },
];

interface PageProps {
  params: {
    caracteristica: string;
  };
}

export default function CaracteristicaPage({ params }: PageProps) {
  const caracteristica = listaDeCaracteristicas.find(
    (c) => c.id === params.caracteristica
  );

  if (!caracteristica) {
    return <p className="text-center mt-20 text-xl">Característica não encontrada.</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center gap-4">
      <h1 className="text-4xl font-bold">{caracteristica.nome}</h1>
      <p className="text-xl text-gray-600">{caracteristica.descricao}</p>

      <Link
        href="/caracteristicas"
        className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
      >
        Voltar às características
      </Link>
    </div>
  );
}
