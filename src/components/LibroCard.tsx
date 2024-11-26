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
    <Card className="bg-violet-900 border-violet-950">
      <div
        className="w-full h-48 bg-slate-200 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${libro.portada})` }}
      ></div>
      <CardContent className="p-6">
        <CardTitle className="text-violet-300">{libro.titulo}</CardTitle>
        <CardFooter className="flex justify-between p-0">
          <Button onClick={() => router.push(`/libros/${libro.id}`)} variant="default">Ver</Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteLibro(libro.id);
            }}
            variant="destructive"
          >
            x
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
