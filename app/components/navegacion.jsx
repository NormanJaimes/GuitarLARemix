import { Link, useLocation } from '@remix-run/react';
import imagen from '../../public/img/carrito.png';
import React from 'react';

const Navegacion = () => {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Inicio
      </Link>
      <Link
        className={location.pathname === '/nosotros' ? 'active' : ''}
        to="/nosotros"
      >
        Nosotros
      </Link>
      <Link
        className={location.pathname === '/guitarras' ? 'active' : ''}
        to="/guitarras"
      >
        Tienda
      </Link>
      <Link
        className={location.pathname === '/blog' ? 'active' : ''}
        to="/blog"
      >
        Blog
      </Link>
      <Link to="/carrito">
        <img src={imagen} alt="carrito de compras" />
      </Link>
    </nav>
  );
};

export default Navegacion;
