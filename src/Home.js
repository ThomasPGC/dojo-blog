import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    //let name = "Mario"
    const [name, setName] = useState('Mario');

    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    



    const handleClick = (e) => {
        console.log("salut lapinous!", e);
        setName("Luigi");
        
    }

    const handleClickAgain = (name, e) => {
        console.log("salut " + name, e.target);
    }



    return ( 
        <div className="home">
            <h2>Page de base</h2>
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title="Tous les posts" />}
            {/*<BlogList blogs = {blogs.filter((post) =>  post.author === 'mario' )} title="Posts à Mario"/>*/}
        <p>{name}</p>
            <button onClick = {handleClick}>Change nom</button>
            <button onClick = {(e)  => handleClickAgain("Jennyfer", e)}>Clique moi aussi!</button>
           
        </div>
     );
}
 
export default Home; 