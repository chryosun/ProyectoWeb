import Header from '../components/Header/Header';
import entradasBlog from '../components/Blog/entradas.json';
import { Link } from 'react-router-dom';
import './blog.css'

export const Blog = () => {
  const renderEntrada = (entrada) => (
    <li key={entrada.id}>
      <Link to={`/blog/${entrada.id}`}>
        <img
          className='aspect-[389/500] h-full object-cover w-full max-w-full rounded'
          src={entrada.img}
          alt="Portada"
        />
      </Link>
    </li>
  );

  const entradasUX = entradasBlog.map(renderEntrada);

  return (
    <>
      <Header />
      <main className='m-auto max-w-4xl'>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-3'>{entradasUX}</ul>
      </main>
    </>
  );
};
