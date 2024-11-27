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
    <Card className="bg-slate-800 border-slate-200 text-slate-300">
      <div
        className="w-full h-72  bg-contain bg-no-repeat bg-center bg-slate-950 rounded-t-lg"
        style={{ backgroundImage: `url(${libro.portada})` }}
      ></div>
      <CardContent className="p-6  rounded-b-lg">
        <CardTitle className="text-slate-300">{libro.titulo}</CardTitle>
        <div>{libro.autor}</div>

        <CardFooter className="flex justify-between p-0">
          <span className="flex"><img src="/star.svg" className="w-4 mr-2" alt="star" />{libro.puntuacion}</span>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
