'use client';
import { useState, useEffect } from 'react';

export default function Relogio() {
  const [hora, setHora] = useState<string | null>(null);

  useEffect(() => {
    const updateHora = () => setHora(new Date().toLocaleTimeString());
    updateHora(); // atualizar imediatamente
    const id = setInterval(updateHora, 1000);
    return () => clearInterval(id);
  }, []);

  if (!hora) return null;

  return (
    <div className="text-center text-xl font-mono p-2 bg-gray-100 rounded-md shadow-sm w-40">
      {hora}
    </div>
  );
}
