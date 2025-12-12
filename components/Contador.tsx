import { useState, useEffect } from "react";

export default function PaginaContador() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("contador");
    if (saved) setCount(Number(saved));

    const savedHistory = localStorage.getItem("contadorHistory");
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem("contador", count.toString());
    setHistory((prev) => {
      const newHist = [...prev, count];
      localStorage.setItem("contadorHistory", JSON.stringify(newHist));
      return newHist;
    });
  }, [count]);

  const incrementar = () => setCount((prev) => Math.max(prev + 1, 10));
  const decrementar = () => setCount((prev) => Math.min(prev - 1, 0));
  const reset = () => setCount(0);

  let color = "";
  if (count <= 3) {
    color = "text-red-500";
  } else if (count <= 7) {
    color = "text-yellow-500";
  } else {
    color = "text-green-500";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold mb-4">Contador Bonito</h1>

        <div className="text-7xl font-extrabold transition-all duration-300 ${color}">
          <span className={color}>{count}</span>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={incrementar}
            className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600 transition"
          >
            +
          </button>
          <button
            onClick={decrementar}
            className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow hover:bg-red-600 transition"
          >
            -
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-500 text-white rounded-2xl shadow hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>

        <div className="mt-6 text-left">
          <h2 className="font-semibold text-lg mb-2">Histórico:</h2>
          <ul className="bg-gray-100 rounded-xl p-4 h-40 overflow-auto shadow-inner">
            {history.map((v, i) => (
              <li key={i} className="border-b border-gray-300 py-1">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
