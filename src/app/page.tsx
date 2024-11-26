import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getLibros } from "./libros/libros.api";
import { LibroCard } from "@/components/LibroCard";

export const dynamic = "force-dynamic";

async function HomePage() {
  const libros = await getLibros();
  return (
    <>
      <div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col text-neutral-content text-center">
          <div className="flex justify-between m-10">
            <h1 className="text-4xl font-bold text-slate-200">Audiobook</h1>
          </div>
          <p className="text-violet-200">Registra y guarda las suculentas de tu colección</p>
        </div>
      </div>
      <div className="container my-10">
        <div className="mb-10">
          <Link href="/libros/new" className={buttonVariants()}>
            Registrar libro
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {libros.map((libro: any) => (
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
