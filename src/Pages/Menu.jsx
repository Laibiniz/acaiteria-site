import { Link } from "react-router-dom";
import { useState } from "react";
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

  const [abrirModal, setAbrirModal] = useState(false);
  const [tamanho, setTamanho] = useState("");
  const [banana, setBanana] = useState(false);
const [morango, setMorango] = useState(false);
const [kiwi, setKiwi] = useState(false);

const [nutella, setNutella] = useState(false);
const [ninho, setNinho] = useState(false);
const [granola, setGranola] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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

                 <a
  href={`https://wa.me/79999390396?text=Olá,%20quero%20pedir%20${produto.nome}`}
  target="_blank"
  rel="noreferrer"
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
</a>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
<button
  onClick={() => setAbrirModal(true)}
  className="
    fixed
    bottom-8
    right-8
    bg-gradient-to-r
    from-purple-700
    to-purple-500
    text-white
    px-6
    py-4
    rounded-full
    font-bold
    shadow-[0_0_30px_rgba(168,85,247,0.6)]
    hover:scale-110
    transition
    z-50
  "
>
  Faça o seu!
</button>
{abrirModal && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

    <div className="bg-zinc-900 border border-purple-500/30 p-8 rounded-3xl w-[90%] max-w-md shadow-[0_0_40px_rgba(168,85,247,0.3)]">

      <h2 className="text-3xl font-bold text-purple-500 mb-6">
        Monte seu Açaí
      </h2>

      <select
        value={tamanho}
        onChange={(e) => setTamanho(e.target.value)}
        className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
      >
        <option value="">Escolha o tamanho</option>
        <option>300ml</option>
        <option>500ml</option>
        <option>700ml</option>
      </select>
<div className="mb-4">
  <h3 className="text-lg mb-2">Frutas</h3>

  <label className="flex gap-2">
   <input
  type="checkbox"
  checked={banana}
  onChange={(e) => setBanana(e.target.checked)}
/>
Banana
  </label>

  <label className="flex gap-2">
   <input
  type="checkbox"
  checked={morango}
  onChange={(e) => setMorango(e.target.checked)}
/>
Morango
  </label>

  <label className="flex gap-2">
   <input
  type="checkbox"
  checked={kiwi}
  onChange={(e) => setKiwi(e.target.checked)}
/>
Kiwi
  </label>
</div>
<div className="mb-4">
  <h3 className="text-lg mb-2">Adicionais</h3>

  <label className="flex gap-2">
   <input
  type="checkbox"
  checked={nutella}
  onChange={(e) => setNutella(e.target.checked)}
/>
Nutella
  </label>

  <label className="flex gap-2">
   <input
  type="checkbox"
  checked={ninho}
  onChange={(e) => setNinho(e.target.checked)}
/>
Leite Ninho
  </label>

  <label className="flex gap-2">
    <input
  type="checkbox"
  checked={granola}
  onChange={(e) => setGranola(e.target.checked)}
/>
Granola
  </label>
</div>
      <a
       href={`https://wa.me/557999390396?text=${encodeURIComponent(
`Olá!

Quero montar um açaí.

Tamanho: ${tamanho}

Frutas:
${banana ? "✓ Banana\n" : ""}
${morango ? "✓ Morango\n" : ""}
${kiwi ? "✓ Kiwi\n" : ""}

Adicionais:
${nutella ? "✓ Nutella\n" : ""}
${ninho ? "✓ Leite Ninho\n" : ""}
${granola ? "✓ Granola\n" : ""}
`
)}`}
        target="_blank"
        rel="noreferrer"
        className="block text-center bg-purple-600 py-3 rounded-xl mt-4 hover:bg-purple-700"
      >
        Enviar Pedido
      </a>

      <button
        onClick={() => setAbrirModal(false)}
        className="mt-4 w-full text-zinc-400 hover:text-white"
      >
        Fechar
      </button>

    </div>

  </div>
)}
    </div>
  );
}