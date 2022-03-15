import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title = "Bienvenue sur le nouveau blog";
  const likes = 157;
  const personne = { name : "Totomama", age : "45"};
  const link = "http://www.google.fr";


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/create'>
              <Create/>
            </Route>
            <Route exact path='/blog/:id'>
              <BlogDetails/>
            </Route>
            <Route  path='*'>
              <NotFound/>
            </Route>
          </Switch>
          <h1>{title}</h1>
          <p>Liké {likes} fois!</p>
          <p> La personne s'appelle {personne.name} et elle a {personne.age} ans.</p>
          <a href={link}>Google</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
