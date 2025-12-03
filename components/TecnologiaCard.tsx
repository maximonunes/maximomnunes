import React from "react";
import Link from "next/link"; 
import "@/app/globals.css"; 


interface TecnologiaCard {
  title: string;
  image: string;
  index: number; 
}

export default function TecnologiaCard({ title, image, index }: TecnologiaCard) {
  return (
    <Link
      href={`/tecnologias/${index}`}
      className="
        w-48 h-56
        bg-gray-800
        text-white
        rounded-xl
        p-4
        flex
        flex-col
        items-center
        justify-between
        shadow-lg
        hover:scale-105
        transition
        m-3
      "
    >
      <img src={image} alt={title} className="w-20 h-20 object-contain" />
      <h3 className="text-center text-lg font-semibold">{title}</h3>
    </Link>
  );
}
