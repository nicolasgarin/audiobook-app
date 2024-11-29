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
          <p className="text-2xl">{libro.autor}</p>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-8">
              <p>Información tecnica</p>
              {libro.tituloOriginal != "" && <p>Titulo Original: {libro.tituloOriginal}</p>}
              <p>Género: {libro.categoria}</p>
              <p>Año de publicación: {libro.anioPublicacion}</p>
              <p>Tipo de publicación: {libro.tipo}</p>
              {libro.tipo == "Serie" && <p>Numero de episodios: {libro.episodios}</p>}
              <p>Duración: {libro.duracionHs}:{libro.duracionMin < 10 ? `0${libro.duracionMin}` : libro.duracionMin}</p>
              <p>Idioma original: {libro.idiomaOriginal}</p>
              <p>Idioma escuchado: {libro.idiomaEscuchado}</p>
              <p>Puntuación: {libro.puntuacion}</p>
            </div>
          </div>
          <div className="flex gap-8">
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
