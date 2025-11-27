import Link from "next/link";
import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaDetailsCard from "@/components/TecnologiaCard";
import "@/app/globals.css";

export default function TecnologiaPage({ params }: { params: { tecnologia: string } }) {
  const index = Number(params.tecnologia);

  if (isNaN(index) || index < 0 || index >= tecnologias.length) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Tecnologia não encontrada.
      </div>
    );
  }

  const tecnologia = tecnologias[index];

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center gap-6 p-6">
      <TecnologiaDetailsCard
        title={tecnologia.title}
        description={tecnologia.description}
        image={`/tecnologias/${tecnologia.image}`}
        rating={tecnologia.rating}
      />

      <Link
        href="/tecnologias"
        className="px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded text-white"
      >
        Voltar
      </Link>
    </div>
  );
}
