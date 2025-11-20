
import React from "react";
import Link from "next/link";
import { DescricaoProjetos } from "@/components/DescricaoProjetos";


export default function ProjetosPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Projetos</h1>
    <DescricaoProjetos></DescricaoProjetos>
    </main>
  );
}
