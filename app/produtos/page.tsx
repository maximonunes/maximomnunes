'use client'

import useSWR from 'swr';
import { Produto } from '@/models/interface';
import Image from 'next/image';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProdutosPage() {
    const { data, error, isLoading } = useSWR<Produto[]>('https://deisishop.pythonanywhere.com/products', fetcher);

    if (error) return <p>Erro ao carregar</p>;
    if (isLoading) return <p>Carregando...</p>;
    if (!data || data.length === 0) return <p>Sem produtos</p>;

    return (
        <section className="bg-gray-100 p-6 mt-6 rounded-xl border border-gray-300 w-full max-w-6xl">

            <h2 className="text-2xl font-semibold text-center mb-6">Lista de Produtos DEISIshop</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                {data.map((produto) => (
                    <article 
                        key={produto.id}
                        className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                    >
                        <Image
                            src={produto.image}
                            width={120}
                            height={120}
                            className="rounded-md object-contain"
                            alt={produto.title}
                        />
                        <p className="mt-2 font-medium">{produto.title}</p>
                    </article>
                ))}

            </div>
        </section>
    );
}
