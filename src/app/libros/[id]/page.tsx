"use client";
import { deleteLibro, getLibro } from "@/app/libros/libros.api";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: number;
  };
};

async function LibroDetailPage({ params }: Props) {
  const router = useRouter();
  const libro = await getLibro(params.id);

  async function handleDeleteLibro(id: number) {
    await deleteLibro(id);
    router.refresh();
  }

  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="text-slate-300">
          <h1 className="text-6xl">{libro.titulo}</h1>
          <p>{libro.autor}</p>
          <div>
          <Button
            variant="default"
            onClick={() => {
              router.push(`/libros/${libro.id}/edit`);
            }}
          >
            Editar
          </Button>
          <Button
            variant="destructive"
            onClick={() => handleDeleteLibro(libro.id)}
          >
            Eliminar
          </Button>
          </div>
        </div>
        <div className="flex justify-center items-center" >
          <img className="rounded-xl" src={libro.portada} alt={libro.titulo} />
        </div>
      </div>
    </div>
  );
}

export default LibroDetailPage;
