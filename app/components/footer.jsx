import React from 'react';
import Navegacion from './navegacion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <Navegacion />
        <p className="copyright">
          <a href="http://thenormanjames.com/"> The Norman James </a>
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
