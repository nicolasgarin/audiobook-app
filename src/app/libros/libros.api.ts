//const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_URL = "http://localhost:4000";

export async function getLibros() {
  const data = await fetch(`${BACKEND_URL}/api/libros`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function getLibro(id: number) {
  const data = await fetch(`${BACKEND_URL}/api/libros/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createLibro(libroData: any) {
  const res = await fetch(`${BACKEND_URL}/api/libros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(libroData),
  });
  const data = await res.json();
}

export async function editLibro(id: number, libroData: any) {
  const res = await fetch(`${BACKEND_URL}/api/libros/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cache: "no-store",
    },
    body: JSON.stringify(libroData),
  });
  const data = await res.json();
}

export async function deleteLibro(id: number) {
  const res = await fetch(`http://localhost:4000/api/libros/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
}