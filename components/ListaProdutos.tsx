'use client'
import { Produto } from '@/models/interface'
import ProductCard from '@/components/ProduCard'

interface ListaProdutosProps {
  produtos: Produto[]
  adicionarCarrinho: (produto: Produto) => void
  removerCarrinho: (produto: Produto) => void
  noCesto: boolean
}

export default function ListaProdutos({ produtos, adicionarCarrinho: adicionarCarrinho, removerCarrinho: removerCarrinho, noCesto }: ListaProdutosProps) {
  return (
    <section className="grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6">
      {produtos.length === 0 && <p>❌ Nenhum produto encontrado</p>}
      {produtos.map(p => (
        <ProductCard
          key={p.id}
          produto={p}
          adicionaProduto={() => adicionarCarrinho(p)}
          removeProduto={() => removerCarrinho(p)}
          noCesto={noCesto}
        />
      ))}
    </section>
  )
}