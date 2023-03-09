import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from '@remix-run/react';
import Header from '~/components/header';
import styles from '~/styles/index.css';
import Footer from '~/components/footer';
import { useEffect, useState } from 'react';

export function meta() {
  return {
    charser: 'utf-8',
    title: 'GuitarLA - Remix',
    viewport: 'width=device-width, initial-scale=1',
  };
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;900&display=swap',
    },
    { rel: 'stylesheet', href: styles },
  ];
}

const App = () => {
  const carritoLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('carrito')) ?? []
      : null;
  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
    } else {
      // Registro NUevo
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualiazarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
  };
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualiazarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
};

export default App;

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {' '}
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Manejo de errores
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      {' '}
      <p className="error">
        {error.status}
        {error.statusText}
      </p>
      <Link to="/" className="error-enlace">
        Tal véz quieras volver a la página Principal
      </Link>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      {' '}
      <p className="error">
        {error.status}
        {error.statusText}
      </p>
      <Link to="/" className="error-enlace">
        Tal véz quieras volver a la página Principal
      </Link>
    </Document>
  );
}
