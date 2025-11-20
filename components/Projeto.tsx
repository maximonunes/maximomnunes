import React from "react";
import Link from "next/link";
import "@/app/globals.css"; 

interface ProjetoProps {
  nome: string;
  url: string;
}

export default function Projeto({ nome, url }: ProjetoProps) {
  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <p className="text-lg">
        Este é o projeto <strong>{nome}</strong>. Você pode acessá-lo clicando no 
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 underline"
        >
          link aqui
        </a>.
      </p>
    </div>
  );
}
