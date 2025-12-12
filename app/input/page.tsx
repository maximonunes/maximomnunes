'use client';
import { useEffect, useState } from 'react';

export default function InputPage(){

    const [input , setInput] = useState('');
    const [tech , setTech] = useState('');

     const techs = ['React', 'Next.js', 'TypeScript', 'Node.js'];

     return(
        <div>
            <input value = {input} onChange={e => setInput(e.target.value)}/>
            <p>{input}</p>

              <select value={tech} onChange={e => setTech(e.target.value)}>
        <option value="">Escolha tecnologia</option>
        {techs.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <p>Tecnologia selecionada : {tech}</p>
        </div>
     )
}