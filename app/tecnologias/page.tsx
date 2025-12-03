import React from "react";
import Image from "next/image";
import tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard";
import "@/app/globals.css"; 


// Define a interface do objeto de tecnologia
interface Tecnologia {
  title: string;
  description: string;
  image: string;
  rating: number;
}

export default function TecnologiasPage() {
  const data: Tecnologia[] = JSON.parse(JSON.stringify(tecnologias));

  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-semibold">Tecnologias Exploradas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((tec: Tecnologia, index: number) => (
          <TecnologiaCard
            key={index}
            title={tec.title}
            image={tec.image}
            index={index}  
          />
        ))}
      </div>
    </section>
  );
}

