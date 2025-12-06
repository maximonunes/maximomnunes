"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import tecnologias from "@/data/tecnologias.json";

export default function TecnologiaPage() {
  const params = useParams();
  const index = Number(params.tecnologias);

  if (isNaN(index) || index < 0 || index >= tecnologias.length) {
    return (
      <div className="flex flex-col items-center justify-center p-10">
        <h2 className="text-2xl font-bold mb-4">Tecnologia não encontrada</h2>
        <Link href="/tecnologias" className="text-blue-500 underline">
          Voltar
        </Link>
      </div>
    );
  }

  const tecnologia = tecnologias[index];

  return (
    <div className="flex flex-wrap gap-4 p-4 min-h-screen">

      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 p-6 rounded-xl w-80 shadow-lg text-center">

        
        <h2 className="text-2xl font-bold mb-2">{tecnologia.title}</h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {tecnologia.description}
        </p>

        <p className="text-yellow-500 text-xl mb-6">
          {tecnologia.rating} ⭐
        </p>

        <Link href="/tecnologias" className="text-blue-600 underline">
          Voltar
        </Link>
      </div>
    </div>
  );
}
