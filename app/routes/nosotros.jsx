import { useOutletContext } from '@remix-run/react';
import styles from '~/styles/nosotros.css';
import imagen from '../../public/img/nosotros.jpg';
export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preload', href: imagen, as: 'image' },
  ];
}

export function meta() {
  return {
    title: 'GuitarLA - Nosotros',
    description: 'Venta de guitarras, blog de música',
  };
}

const Nosotros = () => {
  const data = useOutletContext();
  console.log(data);
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            voluptates pariatur qui alias, molestias consequuntur quisquam
            incidunt in aut similique optio sequi molestiae aliquam praesentium
            nesciunt repellat assumenda a omnis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            voluptates pariatur qui alias, molestias consequuntur quisquam
            incidunt in aut similique optio sequi molestiae aliquam praesentium
            nesciunt repellat assumenda a omnis.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
