import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Déso</h2>
            <p>Page introuvable</p>
            <Link to = '/'>Retour home</Link>
        </div>
      );
}
 
export default NotFound;