import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server.js';
import { getPosts } from '~/models/posts.server.js';
import { getCurso } from '~/models/curso.server.js';
import ListadoGuitarras from '../components/listado-guitarras';
import ListadoPosts from '../components/listado-posts';
import stylesGuitarras from '../styles/guitarras.css';
import stylesBlog from '../styles/blog.css';
import stylesCurso from '../styles/curso.css';
import Curso from '../components/curso';

export function meta() {}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras,
    },
    {
      rel: 'stylesheet',
      href: stylesBlog,
    },
    {
      rel: 'stylesheet',
      href: stylesCurso,
    },
  ];
}
export async function loader() {
  const [guitarras, post, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);
  // console.log(curso);

  return { guitarras: guitarras.data, post: post.data, curso: curso.data };
}

const Index = () => {
  const { guitarras, post, curso } = useLoaderData();
  // console.log(curso, 'curso');

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}></ListadoGuitarras>
        <Curso curso={curso.attributes}></Curso>
        <ListadoPosts posts={post}></ListadoPosts>
      </main>
    </>
  );
};

export default Index;
