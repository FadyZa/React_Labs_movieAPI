import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { Login } from './pages/login/login';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import Home from './pages/home/Home';
import { Register } from './pages/registerationPage/Register';
import { MovieDetails } from './pages/movieDetails/MovieDetails';
import { Favorite } from './pages/Favorites/Favorites';
import { useState } from 'react';
import { languaContext } from './context/languageContext';

function App() {

  const [lang, setLang] = useState("EN");

  return (
    <BrowserRouter>
      <languaContext.Provider value={{ lang, setLang }}>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/movieDetails/:id" component={MovieDetails} exact />
          <Route path="/favorite" component={Favorite} exact />
        </Switch>
      </languaContext.Provider>
    </BrowserRouter>



  );
}

export default App;
