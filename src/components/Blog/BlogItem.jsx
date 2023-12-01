import PropTypes from 'prop-types';

const BlogItem = ({ id, title, img }) => {
    return (
        <a className='hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl' href={`/${id}`}>
            <img className='aspect-[389/500] h-full object-cover w-full max-w-full rounded' src={img} alt={`Portada del libro ${title}`} />
        </a>
    );
}

BlogItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
};

export default BlogItem;


