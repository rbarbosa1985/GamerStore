import ProdutoItem from "@/components/produto/ProdutoItem";
import produtos from "@/core/constants/produtos";

export default function Home() {
  return (
    <div className="grid-cols-4 grid container">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
