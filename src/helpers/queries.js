const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/productos`;

export const obtenerProducto = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
};

export const crearProducto = async (formData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    body: formData, 
  });

  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
};

export const editarProducto = async (id, producto) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) throw new Error("Error al editar producto");
  return res.json();
};

export const borrarProductoService = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al borrar producto");
  return res.json();
};
