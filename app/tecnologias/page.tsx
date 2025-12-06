"use client";

import tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard";
import Link from "next/link";

export default function TecnologiasPage() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center bg-gray-50 dark:bg-neutral-900 py-12 px-6">
      
      <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">
        Tecnologias
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {tecnologias.map((tec, index) => (
          <Link href={`/tecnologias/${index}`} key={index}>
            <TecnologiaCard 
              title={tec.title}
              image={tec.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
