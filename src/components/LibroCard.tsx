"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function LibroCard({ libro }: any) {
  const router = useRouter();

  return (
    <Link href={`/libros/${libro.id}`}>
      <Card className="libro-card h-64 bg-slate-800 border-slate-200 text-slate-300 cursor-pointer rounded-lg">
        <div className="front w-full absolute">
          <div
            className="img w-full h-64  bg-contain bg-no-repeat bg-center bg-slate-950 rounded-lg"
            style={{ backgroundImage: `url(${libro.portada})` }}
          ></div>
        </div>
        <div className="back w-full h-full absolute">
          <CardContent className="p-6 h-full rounded-b-lg flex flex-col justify-between">
            <div>
              <CardTitle className="text-2xl font-bold mb-4">
                {libro.titulo}
              </CardTitle>
              <div className="text-lg font-thin">{libro.autor}</div>
              <div className="mt-4">Duración: {libro.duracionHs}:{libro.duracionMin < 10 ? `0${libro.duracionMin}` : libro.duracionMin}</div>
            </div>
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
    </Link>
  );
}
