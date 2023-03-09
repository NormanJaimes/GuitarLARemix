import { useEffect, useState } from 'react';
import { useOutletContext } from '@remix-run/react';
import styles from '~/styles/carrito.css';
import { ClientOnly } from 'remix-utils';

export function meta() {
  return {
    title: 'GuitarLA - Carrito de Compras',
    description: 'Venta de guitarras, música, blog, carrito de compras, tienda',
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

const Carrito = () => {
  const [total, setTotal] = useState(0);

  const { carrito, actualiazarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );

    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>
          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>
              {carrito?.length === 0
                ? 'Carrito de compras Vacio'
                : carrito?.map((producto) => (
                    <div key={producto.id} className="producto">
                      <di v>
                        <img
                          src={producto.imagen}
                          alt={`Imagen del producto ${producto.nombre}`}
                        />
                      </di>
                      <div>
                        <p className="nombre">{producto.nombre}</p>
                        <p>Cantidad:</p>
                        <select
                          name=""
                          id=""
                          className="select"
                          value={producto.cantidad}
                          onChange={(e) =>
                            actualiazarCantidad({
                              cantidad: +e.target.value,
                              id: producto.id,
                            })
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>

                        <p className="precio">
                          $ <span>{producto.precio}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal: $
                          <span>{producto.cantidad * producto.precio}</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn_eliminar"
                        onClick={(e) => eliminarGuitarra(producto.id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Carrito;
