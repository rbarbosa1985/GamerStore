import produtos from "@/core/constants/produtos";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProdutoPage(props: any) {
  const id = +props.params.id;
  const produto = produtos.find((produto) => produto.id === id);
  return (
    <div>
      <h1>Produto: {produto?.nome}</h1>
    </div>
  );
}
