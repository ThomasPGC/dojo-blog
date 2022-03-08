import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Bienvenue sur le nouveau blog";
  const likes = 157;
  const personne = { name : "Toto", age : "45"};
  const link = "http://www.google.fr";


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p>Liké {likes} fois!</p>
        <p> La personne s'appelle {personne.name} et elle a {personne.age} ans.</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
