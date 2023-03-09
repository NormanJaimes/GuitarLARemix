import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server.js';
import ListadoGuitarras from '~/components/listado-guitarras';

export function meta() {
  return {
    title: 'GuitarraLA - Tienda de Guitarras',
    description: 'GuitarraLA - Nuestra colección de guitarras',
  };
}

export async function loader() {
  // console.log('Loader');
  const guitarras = await getGuitarras();
  return guitarras.data;
}
const Tienda = () => {
  const guitarras = useLoaderData();
  // console.log(guitarras);
  return <ListadoGuitarras guitarras={guitarras}></ListadoGuitarras>;
};

export default Tienda;
