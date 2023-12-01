import BlogItem from './BlogItem';
import { Link } from 'react-router-dom';

const entry = [
    {
        id: 'clean-code',
        title: 'Clean-code',
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607l/3735293._SX318_.jpg',
    },
];

const BlogList = () => {
    return (
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 px-4'>
            {
                entry.map(({ id, title, img }) => (
                    <li key={id}>
                        <BlogItem id={id} title={title} img={img} />
                    </li>
                ))
            }
        </ul>
    );
}

export default BlogList;
