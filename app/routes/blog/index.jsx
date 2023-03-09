import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server.js';
import ListadoPosts from '~/components/listado-posts';

export function meta() {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA - blog de música  y venta de guitarras',
  };
}
export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return <ListadoPosts posts={posts}></ListadoPosts>;
};

export default Blog;
