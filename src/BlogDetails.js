import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => { history.push('/') }
        )
    }
    return (
        <div className="class blog-details">
            <h2>Blog détaillé</h2>
            <h1>L'id c'est {id}</h1>
            {error && <div>{error}</div>}
            {isPending && <p>Loading... </p>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Écrit par {blog.author}</p>
                    <div>{blog.body}</div>
                </article>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default BlogDetails;