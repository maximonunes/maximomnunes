"use client"

import Link from "next/link";
import tecnologias from "@/data/tecnologias.json";
import TecnologiaDetailsCard from "@/components/TecnologiasDetailsCard";
import { useParams } from "next/navigation";

export default function TecnologiaPage() {
  const params = useParams()
  const index = Number(params.tecnologia)

  

  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen text-center gap-6 p-6">
        title={tecnologias[index].title}
        description={tecnologias[index].description}
        rating={tecnologias[index].rating}
        <img 
        src={tecnologias[index].image}
        alt={tecnologias[index].title}
        className="w-[80px] h-auto object-contain"
      />
      

      <Link
        href="/tecnologias"
        className="px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded text-white"
      >Voltar</Link>
    </div>
  </>
  );
}
