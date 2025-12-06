import "../../styles/NavBar.css";
import React, { useState } from "react";
import Login from "./Login";
import Registro from "./Registro";
import { Link, useLocation } from "react-router-dom";

const MenuNavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const abrirLogin = () => setShowLogin(true);
  const abrirRegistro = () => setShowRegistro(true);

  return (
    <>
      <nav className="navbar">
        <div className="brand-container">
          <Link
            to="/"
            className="logo-video-container"
            aria-label="Ir al inicio"
          >
            <video
              className="logo-video d-lg-block "
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/dibuSuperSayayinCancherosreRePower.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta video.
            </video>
          </Link>
          <Link
            to="/"
            className="btn-inicio-oval"
            // ARIA KEY: Esto le dice al lector de pantalla que esta es la página actual
            aria-current={isHome ? "page" : undefined}
          >
          Inicio
          </Link>
        </div>

        {/* LADO DERECHO: Botones de Acción (Login/Registro) */}
        <div className="auth-buttons-container">
          <button className="btn btn-primary btn-sm" onClick={abrirLogin}>
            Ingresar
          </button>

          <button className="btn btn-success btn-sm" onClick={abrirRegistro}>
            Registro
          </button>
        </div>

        {/* MODALES */}
        <Login
          show={showLogin}
          handleClose={() => setShowLogin(false)}
          abrirRegistro={abrirRegistro}
        />
        <Registro
          show={showRegistro}
          handleClose={() => setShowRegistro(false)}
          abrirLogin={abrirLogin}
        />
      </nav>
    </>
  );
};

export default MenuNavBar;
