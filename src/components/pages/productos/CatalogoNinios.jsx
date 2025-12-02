

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CatalogoNinios = () => {
  const productos = [
    {
      id: 1,
      nombre: "Camiseta Messi Barcelona",
      imagen: "img/productos/ninos1.jpg",
      precio: "$42.000",
      descripcion: "Camiseta retro #10 edición especial",
      talles: "4, 6, 8, 10, 12 años"
    },
    {
      id: 2,
      nombre: "Conjunto Nike Kids",
      imagen: "img/productos/ninos2.jpg",
      precio: "$38.000",
      descripcion: "Conjunto remera + short para entrenar",
      talles: "6, 8, 10, 12 años"
    },
    {
      id: 3,
      nombre: "Botines Adidas Predator Junior",
      imagen: "img/productos/ninos3.jpg",
      precio: "$55.000",
      descripcion: "Botines con tapones de goma",
      talles: "28, 30, 32, 34, 36"
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Indumentaria para Niños</h1>
      
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

export default CatalogoNinios;