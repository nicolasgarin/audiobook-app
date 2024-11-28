"use client";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getLibros } from "./libros/libros.api";
import { LibroCard } from "@/components/LibroCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const dynamic = "force-dynamic";

async function HomePage() {
  const libros = await getLibros();
  const autores = libros
    .map((libro: any) => libro.autor)
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    );
  const categorias = libros
    .map((libro: any) => libro.categoria)
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    );

  function ordenar(condicion: String) {
    if (condicion === "alfabetico") {
      return libros.sort(function (a: any, b: any) {
        if (a.titulo < b.titulo) return -1;
        if (a.titulo > b.titulo) return 1;
        return 0;
      });
    } else if (condicion === "puntuacion") {
      return libros.sort(function (a: any, b: any) {
        if (a.puntuacion < b.puntuacion) return 1;
        if (a.puntuacion > b.puntuacion) return -1;
        return 0;
      });
    }
  }

  function filtrarAutor(autor: String) {
    if (autor === "Todos") {
      return libros;
    } else {
      return libros.filter((libro: any) => libro.autor === autor);
    }
  }

  function filtrarCategoria(categoria: String) {
    if (categoria === "Todas") {
      return libros;
    } else {
      return libros.filter((libro: any) => libro.categoria === categoria);
    }
  }

  return (
    <>
      <div className="text-slate-300">
        <div className="container my-10">
          <div className="mb-10">
            <Link
              href="/libros/new"
              className={buttonVariants({ variant: "default" })}
            >
              <img src="/plus.svg" className="w-6" alt="agregar" />
            </Link>
            <Button onClick={() => ordenar("alfabetico")}>
            <img src="/arrowdown.svg" className="w-6" alt="flecha" />
            <img src="/lettera.svg" className="w-6" alt="letra" />
            </Button>
            <Button onClick={() => ordenar("puntuacion")}>
              <img src="/arrowdown.svg" className="w-6" alt="flecha" />
              <img src="/star.svg" className="w-6" alt="estrella" />
            </Button>
            <Select onValueChange={filtrarAutor}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Por autor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                {autores.map((autor: any) => (
                  <SelectItem value={autor}>{autor}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={filtrarCategoria}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Por categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todas">Todas</SelectItem>
                {categorias.map((categoria: any) => (
                  <SelectItem value={categoria}>{categoria}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <h2 className="text-4xl font-bold mb-8">Libros escuchados</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
