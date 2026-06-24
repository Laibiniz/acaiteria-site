import heroImage from "../assets/hero-acai.png";
import { Link } from "react-router-dom";
import { FaLeaf, FaBolt, FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen gap-10">
          <div>
            <span className="border border-purple-600 rounded-full px-5 py-2 text-sm">
              ● O MELHOR AÇAÍ DA CIDADE
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-8">
  Sabor que
  <br />
  <span className="text-purple-500">
    conquista!
  </span>
</h1>

            <p className="mt-6 text-gray-400 text-2xl">
              Açaí cremoso, frutas selecionadas e os melhores complementos.
            </p>

            <Link
              to="/menu"
              className="
                inline-block
                mt-10
                bg-gradient-to-r
                from-purple-700
                to-purple-500
                px-10
                py-5
                rounded-3xl
                text-xl
                hover:scale-105
                duration-300
              "
            >
              Ver Cardápio →
            </Link>
            <div className="flex gap-6 mt-10">

  <div className="border-r border-purple-900 pr-6">
    <FaLeaf className="text-purple-500 text-2xl drop-shadow-[0_0_15px_#a855f7]" />
    <p className="text-xs text-zinc-400">Ingredientes</p>
    <p className="text-sm text-white">Frescos</p>
  </div>

  <div className="border-r border-purple-900 pr-6">
    <FaBolt className="text-purple-500 text-2xl drop-shadow-[0_0_15px_#a855f7]" />
    <p className="text-xs text-zinc-400">Entrega</p>
    <p className="text-sm text-white">Rápida</p>
  </div>

  <div>
   <FaHeart className="text-purple-500 text-2xl drop-shadow-[0_0_15px_#a855f7]" />
    <p className="text-xs text-zinc-400">Feito com</p>
    <p className="text-sm text-white">Paixão</p>
  </div>

</div>
          </div>

          <div className="flex justify-center">
           <img
  src={heroImage}
  alt="Açaí Prime"
  className="hero-cup w-full max-w-[700px]"
/>
          </div>
        </div>
      </div>
    </section>
  );
}