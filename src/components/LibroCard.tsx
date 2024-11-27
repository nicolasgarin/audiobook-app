"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteLibro } from "@/app/libros/libros.api";
import { useRouter } from "next/navigation";

export function LibroCard({ libro }: any) {
  const router = useRouter();

  async function handleDeleteLibro(id: number) {
    await deleteLibro(id);
    router.refresh();
  }

  return (
    <Card className="libro-card h-72 bg-slate-800 border-slate-200 text-slate-300 cursor-pointer rounded-lg">
      <div className="front w-full absolute">
        <div
          className="w-full h-72  bg-contain bg-no-repeat bg-center bg-slate-950 rounded-lg"
          style={{ backgroundImage: `url(${libro.portada})` }}
        ></div>
      </div>
      <div className="back w-full h-full absolute">
        <CardContent className="p-6  rounded-b-lg">
          <CardTitle className="text-2xl font-bold mb-4">
            {libro.titulo}
          </CardTitle>
          <div className="text-lg font-thin">{libro.autor}</div>
          <CardFooter className="flex justify-between p-0">
            <div className="text-sm font-bold">{libro.categoria}</div>
            <span className="flex">
              <img src="/star.svg" className="w-4 mr-2" alt="star" />
              {libro.puntuacion}
            </span>
          </CardFooter>
        </CardContent>
      </div>
    </Card>
  );
}
