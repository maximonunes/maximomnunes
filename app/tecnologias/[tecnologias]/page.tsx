"use client"

import Link from "next/link";
import tecnologias from "@/data/tecnologias.json";
import TecnologiaDetailsCard from "@/components/TecnologiasDetailsCard";
import { useParams } from "next/navigation";

export default function TecnologiaPage() {
  const params = useParams()
  const index = Number(params.tecnologia)

  if (isNaN(index) || index < 0 || index >= tecnologias.length) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Tecnologia não encontrada.
      </div>
    );
  }

  
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen text-center gap-6 p-6">
        title={tecnologias[index].title}
        description={tecnologias[index].description}
        rating={tecnologias[index].rating}
        image={tecnologias[index].image}
      

      <Link
        href="/tecnologias"
        className="px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded text-white"
      >Voltar</Link>
    </div>
  </>
  );
}
