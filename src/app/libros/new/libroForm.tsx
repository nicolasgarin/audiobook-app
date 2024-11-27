"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createLibro, editLibro } from "../libros.api";
import { useParams, useRouter } from "next/navigation";

export function LibroForm({ libro }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      titulo: libro?.titulo,
      tituloOriginal: libro?.tituloOriginal,
      categoria: libro?.categoria,
      autor: libro?.autor,
      anioPublicacion: libro?.anioPublicacion,
      tipo: libro?.tipo,
      episodios: libro?.episodios,
      duracionHs: libro?.duracionHs,
      duracionMin: libro?.duracionMin,
      idiomaOriginal: libro?.idiomaOriginal,
      idiomaEscuchado: libro?.idiomaEscuchado,
      portada: libro?.portada,
      puntuacion: libro?.puntuacion,
    },
  });
  const router = useRouter();
  const params = useParams<any>();

  const onSubmit = handleSubmit((data:any) => {
    console.log(data);
    if (params.id) {
      editLibro(parseInt(params.id), data);
    } else {
      createLibro({
        ...data,
        anioPublicacion: parseInt(data.anioPublicacion),
        episodios: parseInt(data.episodios),
        duracionHs: parseInt(data.duracionHs),
        duracionMin: parseInt(data.duracionMin),
        puntuacion: parseInt(data.puntuacion),
      });
    }
    router.push("/");
    router.refresh();
  });

  return (
    <div className="flex">
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-2">
        <div>
          <div className="flex flex-col gap-4">
            <Label>Nombre del libro</Label>
            <Input {...register("titulo")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Titulo original</Label>
            <Input {...register("tituloOriginal")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Categoria</Label>
            <Input {...register("categoria")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Autor</Label>
            <Input {...register("autor")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Año de publicacion</Label>
            <Input type="number" {...register("anioPublicacion")} />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <Label>Tipo</Label>
            <Input {...register("tipo")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Episodios</Label>
            <Input type="number" {...register("episodios")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Duracion (hs)</Label>
            <Input type="number" {...register("duracionHs")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Duracion (min)</Label>
            <Input type="number" {...register("duracionMin")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Idioma original</Label>
            <Input {...register("idiomaOriginal")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Idioma escuchado</Label>
            <Input {...register("idiomaEscuchado")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Portada</Label>
            <Input {...register("portada")} />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Puntuacion</Label>
            <Input type="number" {...register("puntuacion")} />
          </div>
      </div>
      <Button>{params.id ? "Editar libro" : "Registar libro"}</Button>
      </div>
    </form>
    </div>
  );
}
