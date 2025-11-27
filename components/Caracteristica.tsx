import Link from "next/link";

export interface ICaracteristica {
  id: string;
  nome: string;
  descricao: string;
}

interface CaracteristicaProps {
  caracteristica: ICaracteristica;
}

export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{caracteristica.nome}</h2>
        <p className="text-gray-600">{caracteristica.descricao}</p>
      </div>

      {/* 🔗 Link para a rota dinâmica */}
      <Link
        href={`/caracteristicas/${caracteristica.id}`}
        className="text-blue-600 hover:underline"
      >
        Ver mais
      </Link>
    </div>
  );
}
