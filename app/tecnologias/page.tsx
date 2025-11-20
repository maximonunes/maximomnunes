import React from "react";
import Image from "next/image";
import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard";

// Define a interface do objeto de tecnologia
interface Tecnologia {
  title: string;
  description: string;
  image: string;
  rating: number;
}

export default function TecnologiasPage() {
  // Tipa o array de tecnologias
  const data: Tecnologia[] = JSON.parse(JSON.stringify(tecnologias));

  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-semibold">Tecnologias Exploradas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((tec: Tecnologia, index: number) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <Image
              src={`/tecnologias/${tec.image}`}
              alt={tec.title}
              width={80}
              height={80}
              className="mb-3"
            />
            <h3 className="text-xl font-bold">{tec.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{tec.description}</p>
            <p className="text-yellow-500">⭐ {tec.rating}</p>
          </div>
        ))}

        <div className="flex flex-col items-center gap-4 p-6">
          {data.map(( tec ,index) => (
            <TecnologiaCard
            key = {`simple-${index}`}
            title = {tec.title}
            image = {`/tecnologias/${tec.image}`}
            />
          ))};

           </div>
      </div>
    </section>
  );
}
