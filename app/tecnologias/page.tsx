"use client";

import tecnologias from "@/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard";
import Link from "next/link";

export default function TecnologiasPage() {
    return (
        <section className="min-h-screen w-full p-10 bg-gray-50 dark:bg-neutral-900">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Tecnologias
            </h1>

            <div className="flex flex-wrap gap-6">
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
