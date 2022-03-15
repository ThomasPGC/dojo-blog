import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)
        const blog = {title,body,author};
        console.log(blog);
        fetch( 'http://localhost:8000/blogs', {
            method: 'POST',
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("blog ajouté");
            setIsPending(false);
            history.push('/');
    })
    }

    return (
        <div className="create">
            <h2>
                Créer un nouveau post!
            </h2>
            <form
            onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}    // e comme event
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Ajouter</button>}
                {isPending && <button disabled>En ajout...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;