import Header from '../components/Header/Header';
import BlogList from '../components/Blog/ListOfBlog'

export const Blog = () => {
    return (
        <>
            <Header />

            <main className='m-auto max-w-4xl'>
                <BlogList />
            </main>
        </> 
    );
    
}