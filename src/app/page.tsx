import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getLibros } from "./libros/libros.api";
import { LibroCard } from "@/components/LibroCard";

export const dynamic = "force-dynamic";

async function HomePage() {
  const libros = await getLibros();
  return (
    <>
      <div className="">
      <div className="container my-10">
        <div className="mb-10">
          <Button>Registrar libro</Button>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {libros.map((libro: any) => (
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;
