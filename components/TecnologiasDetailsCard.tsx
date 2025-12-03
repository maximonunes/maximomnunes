import React from "react";

interface TecnologiaDetailsCardProps {
  title: string;
  description: string;
  rating: number;
  image: string;
}

export default function TecnologiaDetailsCard({
  title,
  description,
  rating,
  image,
}: TecnologiaDetailsCardProps) {
  return (
    <div
      className="
        bg-gray-800 text-white 
        rounded-2xl p-6 
        shadow-xl 
        flex flex-col items-center gap-4
        max-w-md w-full
      "
    >
      <img src={image} alt={title} className="w-32 h-32 object-contain" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-300">{description}</p>
      <span className="font-semibold">
        ⭐ Rating: {rating}
      </span>
    </div>
  );
}
