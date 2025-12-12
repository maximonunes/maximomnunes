'use client';
import { useState, useEffect } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('contador');
    if (saved) setCount(Number(saved));

    const savedHistory = localStorage.getItem('contadorHistory');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem('contador', count.toString());
    setHistory(prev => {
      const newHist = [...prev, count];
      localStorage.setItem('contadorHistory', JSON.stringify(newHist));
      return newHist;
    });
  }, [count]);


  const incrementar = () => setCount( prev =>Math.max( prev + 1 ,10));

  const decrementar = () => setCount(prev => Math.min(prev -1 , 0));

  const reset = () => setCount(0);

  let color = '';
  if(count <= 3){
    color = 'red';
  } else if( count <= 7){
    color = 'yellow'
  } else {
    color = 'green';
  }

  return(
    <div>
        <h2 style = {{color}}>{count}</h2>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        <button onClick={reset}>Reset</button>

        <ul>
            {history.map( (v , i) => <li key = {i}>{v}</li>)}
        </ul>
    </div>
  )
}