export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-20 -left-96 w-[600px] h-2 bg-purple-500 blur-md animate-[slide_8s_linear_infinite]"></div>

      <div className="absolute top-1/2 -left-96 w-[500px] h-1 bg-fuchsia-500 blur-sm animate-[slide_12s_linear_infinite]"></div>

      <div className="absolute bottom-32 -left-96 w-[700px] h-3 bg-purple-400 blur-lg animate-[slide_10s_linear_infinite]"></div>
    </div>
  );
}