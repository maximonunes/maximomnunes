'use client';
import { useState } from 'react';

export default function InputPage() {
  const [input, setInput] = useState('');
  const [tech, setTech] = useState('');

  const techs = ['React', 'Next.js', 'TypeScript', 'Node.js'];

  return (
    <div className="flex flex-col items-center gap-6 p-6">

      {/* Card principal */}
      <div className="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md flex flex-col gap-6 border border-gray-100">

        <h2 className="text-2xl font-semibold text-center">Input & Tecnologias</h2>

        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Digite algo:</label>
          <input
            className="border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escreva alguma coisa..."
          />
          <p className="text-gray-700 text-lg">👉 <strong>{input || "Nada ainda..."}</strong></p>
        </div>

        {/* Select */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Escolha uma tecnologia:</label>

          <select
            className="border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400 transition"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          >
            <option value="">Escolha tecnologia</option>
            {techs.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <p className="text-gray-700 text-lg">
            🔧 Tecnologia selecionada:{" "}
            <strong>{tech || "Nenhuma escolhida"}</strong>
          </p>
        </div>

      </div>
    </div>
  );
}
