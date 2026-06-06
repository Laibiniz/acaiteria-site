import { Link } from "react-router-dom";

const produtos = [
  {
    nome: "Açaí Tradicional",
    preco: "R$ 18,90",
    imagem:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Banana, granola e leite condensado",
  },
  {
    nome: "Açaí Premium",
    preco: "R$ 24,90",
    imagem:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Morango, Nutella e leite ninho",
  },
  {
    nome: "Combo Tropical",
    preco: "R$ 29,90",
    imagem:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Kiwi, manga, banana e mel",
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden p-10">

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10">

        <div className="text-center mb-16 mt-20">
          <h1 className="text-6xl font-bold text-purple-500">
            Nosso Cardápio 🍇
          </h1>

          <p className="text-zinc-400 mt-4 text-xl">
            Escolha seu açaí favorito
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-purple-600 px-5 py-2 rounded-full">
            Todos
          </button>

          <button className="bg-zinc-800 px-5 py-2 rounded-full">
            Tradicionais
          </button>

          <button className="bg-zinc-800 px-5 py-2 rounded-full">
            Premium
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {produtos.map((produto, index) => (
            <div
              key={index}
              className="
                bg-zinc-900/80
                backdrop-blur-lg
                rounded-3xl
                overflow-hidden
                border
                border-purple-500/20
                hover:border-purple-500
                hover:scale-105
                transition
                duration-300
                shadow-2xl
              "
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {produto.nome}
                </h2>

                <p className="text-zinc-400 mt-3">
                  {produto.ingredientes}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-bold text-purple-400">
                    {produto.preco}
                  </span>

                  <button
                    className="
                      bg-gradient-to-r
                      from-purple-700
                      to-purple-500
                      px-5
                      py-2
                      rounded-xl
                      hover:scale-105
                      transition
                    "
                  >
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}