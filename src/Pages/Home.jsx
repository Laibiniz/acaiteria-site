import heroImage from "../assets/hero-acai.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 items-center min-h-screen">
          <div>
            <span className="border border-purple-600 rounded-full px-5 py-2 text-sm">
              ● O MELHOR AÇAÍ DA CIDADE
            </span>

            <h1 className="text-7xl font-bold mt-8">
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
          </div>

          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Açaí Prime"
              className="hero-cup w-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}