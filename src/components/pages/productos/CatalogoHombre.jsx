

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CatalogoHombre = () => {
  const productos = [
    {
      id: 1,
      nombre: "Camiseta Argentina 2024",
      imagen: "img/productos/hombre1.jpg",
      precio: "$85.000",
      descripcion: "Camiseta titular selección argentina",
      talles: "S, M, L, XL, XXL"
    },
    {
      id: 2,
      nombre: "Short Nike Dri-FIT",
      imagen: "img/productos/hombre2.jpg",
      precio: "$35.000",
      descripcion: "Short deportivo con tecnología anti-sudor",
      talles: "M, L, XL"
    },
    {
      id: 3,
      nombre: "Conjunto Adidas Performance",
      imagen: "img/productos/hombre3.jpg",
      precio: "$65.000",
      descripcion: "Conjunto completo remera + short",
      talles: "S, M, L, XL"
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Indumentaria para Hombres</h1>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{producto.nombre}</h5>
                <p className="card-text text-muted">{producto.descripcion}</p>
                <hr />
                <p className="mb-2">
                  <strong>Precio:</strong> <span className="text-success fs-5">{producto.precio}</span>
                </p>
                <p className="mb-3">
                  <strong>Talles disponibles:</strong> {producto.talles}
                </p>
                <button className="btn btn-success w-100">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-secondary">
          ← Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default CatalogoHombre;