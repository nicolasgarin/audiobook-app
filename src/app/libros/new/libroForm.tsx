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
      <Label>Nombre del libro</Label>
      <Input {...register("titulo")} />
      <Label>Titulo original</Label>
      <Input {...register("tituloOriginal")} />
      <Label>Categoria</Label>
      <Input {...register("categoria")} />
      <Label>Autor</Label>
      <Input {...register("autor")} />
      <Label>Año de publicacion</Label>
      <Input type="number" {...register("anioPublicacion")} />
      <Label>Tipo</Label>
      <Input {...register("tipo")} />
      <Label>Episodios</Label>
      <Input type="number" {...register("episodios")} />
      <Label>Duracion (hs)</Label>
      <Input type="number" {...register("duracionHs")} />
      <Label>Duracion (min)</Label>
      <Input type="number" {...register("duracionMin")} />
      <Label>Idioma original</Label>
      <Input {...register("idiomaOriginal")} />
      <Label>Idioma escuchado</Label>
      <Input {...register("idiomaEscuchado")} />
      <Label>Portada</Label>
      <Input {...register("portada")} />
      <Label>Puntuacion</Label>
      <Input type="number" {...register("puntuacion")} />
      <Button>{params.id ? "Editar libro" : "Registar libro"}</Button>
    </form>
    </div>
  );
}
