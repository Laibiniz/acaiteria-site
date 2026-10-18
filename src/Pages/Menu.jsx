import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const produtos = [
  {
    nome: "Açaí Tradicional",
    preco: "R$ 18,90",
    imagem: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Banana, granola e leite condensado",
  },
  {
    nome: "Açaí Premium",
    preco: "R$ 24,90",
    imagem: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Morango, Nutella e leite ninho",
  },
  {
    nome: "Combo Tropical",
    preco: "R$ 29,90",
    imagem: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Kiwi, manga, banana e mel",
  },
  {
    nome: "Açaí Supreme",
    preco: "R$ 27,90",
    imagem: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Morango, banana, Nutella e leite ninho",
  },
  {
    nome: "Açaí com Morango",
    preco: "R$ 21,90",
    imagem:"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Morango fresco e leite condensado",
  },
  {
    nome: "Açaí Chocolate",
    preco: "R$ 23,90",
    imagem: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Chocolate, granulado e leite ninho",
  },
  {
    nome: "Açaí Banana Crocante",
    preco: "R$ 20,90",
    imagem: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Banana, granola e mel",
  },
  {
    nome: "Açaí Energia",
    preco: "R$ 22,90",
    imagem: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Banana, aveia e pasta de amendoim",
  },
  {
    nome: "Açaí Kids",
    preco: "R$ 16,90",
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Banana, chocolate e granulado",
  },
  {
    nome: "Açaí Festa",
    preco: "R$ 32,90",
    imagem: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Morango, banana, confetes e leite ninho",
  },
  {
    nome: "Açaí Frutas Vermelhas",
    preco: "R$ 25,90",
    imagem: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1200&auto=format&fit=crop",
    ingredientes: "Morango, amora e leite condensado",
  },
];


export default function Menu() {
const [maisVendido, setMaisVendido] = useState(0);

const maisVendidos = [
  {
    emoji: "🥇",
    nome: "Açaí Supreme",
    ingredientes: "Morango, Banana, Nutella e Leite Ninho",
  },
  {
    emoji: "🥈",
    nome: "Açaí Tropical",
    ingredientes: "Kiwi, Manga e Frutas Frescas",
  },
  {
    emoji: "🥉",
    nome: "Açaí Kids",
    ingredientes: "Granola, Banana e Chocolate",
  },
];

useEffect(() => {
  const intervalo = setInterval(() => {
    setMaisVendido((atual) => (atual + 1) % maisVendidos.length);
  }, 3000);

  return () => clearInterval(intervalo);
}, []);
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
       <h1 className="
  hero-title
  text-4xl
  md:text-6xl
  text-center
  mt-20
">
  Nosso Cardápio 🍇
</h1>
          <div className="mb-20">
  <h3 className="hero-title text-5xl md:text-7xl text-center mt-6">
  💯 Mais <span className="text-purple-500">Vendidos</span>
</h3>

<div className="md:hidden flex justify-center mb-12">

  <div
  key={maisVendido}
  className="
    bg-zinc-900
    rounded-2xl
    p-4
    text-center
    w-full
    max-w-[330px]
    border
    border-purple-500/30
    shadow-lg
    shadow-purple-500/10
    animate-fade-in
  "
>
  <h3 className="text-xl font-bold">
    {maisVendidos[maisVendido].emoji}{" "}
    {maisVendidos[maisVendido].nome}
  </h3>

  <p className="text-zinc-400 mt-2 text-sm">
    {maisVendidos[maisVendido].ingredientes}
  </p>
</div>
</div>


{/* PC */}
<div className="hidden md:grid md:grid-cols-3 gap-4 mb-12 justify-items-center">

  {/* Supreme */}
  <div
    className="
      bg-zinc-900
      rounded-2xl
      p-4
      text-center
      w-full
      max-w-[330px]
      border
      border-purple-500/30
      shadow-lg
      shadow-purple-500/10
      hover:border-purple-500
      hover:shadow-purple-500/30
      hover:-translate-y-1
      transition-all
      duration-300
    "
  >
    <h3 className="text-xl md:text-2xl font-bold">
      🥇 Açaí Supreme
    </h3>

    <p className="text-zinc-400 mt-2 text-sm">
      Morango, Banana, Nutella e Leite Ninho
    </p>
  </div>


  {/* Tropical */}
  <div
    className="
      bg-zinc-900
      rounded-2xl
      p-4
      text-center
      w-full
      max-w-[330px]
      border
      border-orange-500/30
      shadow-lg
      shadow-orange-500/10
      hover:border-orange-400
      hover:shadow-orange-500/30
      hover:-translate-y-1
      transition-all
      duration-300
    "
  >
    <h3 className="text-xl md:text-2xl font-bold">
      🥈 Açaí Tropical
    </h3>

    <p className="text-zinc-400 mt-2 text-sm">
      Kiwi, Manga e Frutas Frescas
    </p>
  </div>


  {/* Kids */}
  <div
    className="
      bg-zinc-900
      rounded-2xl
      p-4
      text-center
      w-full
      max-w-[330px]
      border
      border-amber-700/30
      shadow-lg
      shadow-amber-700/10
      hover:border-amber-500
      hover:shadow-amber-500/30
      hover:-translate-y-1
      transition-all
      duration-300
    "
  >
    <h3 className="text-xl md:text-2xl font-bold">
      🥉 Açaí Kids
    </h3>

    <p className="text-zinc-400 mt-2 text-sm">
      Granola, Banana e Chocolate
    </p>
  </div>

</div>
</div>

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
    transition
    duration-300
    shadow-2xl

    flex
    flex-row
    md:block
  "
>
  <img
    src={produto.imagem}
    alt={produto.nome}
    className="
      w-32
      h-32
      object-cover
      shrink-0

      md:w-full
      md:h-64
    "
  />

  <div className="p-4 md:p-6 flex-1">

    <h2 className="text-xl md:text-2xl font-bold">
      {produto.nome}
    </h2>

    <p className="text-zinc-400 mt-2 text-sm md:text-base">
      {produto.ingredientes}
    </p>

    <div className="flex items-center justify-between gap-3 mt-4">

      <span className="text-2xl md:text-3xl font-bold text-purple-400">
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
          md:px-6
          md:py-3
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
    bottom-24
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