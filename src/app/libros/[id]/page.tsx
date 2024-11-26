"use client";
import { getLibro } from "@/app/libros/libros.api";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        id: number;
    };
};


async function LibroDetailPage({ params }: Props) {
    const router = useRouter();

  const libro = await getLibro(params.id);

  return (<div className="">
    <Link href="/" className={buttonVariants({ variant: "default" })}>Volver</Link>
    <h1>{libro.titulo}</h1>
    <img src={libro.portada} alt={libro.titulo} />
    <p>{libro.description}</p>
    <Button variant="default" onClick={() => {
        router.push(`/libros/${libro.id}/edit`);
    }}>Editar</Button>
  </div>);
}

export default LibroDetailPage;
