import { Switch, Route } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/Pages/HomePage/HomePage';
import MoviesPage from './Components/Pages/MoviesPage/MoviesPage';
import NotFound from './Components/Pages/NotFound/NotFound';
import MovieDetailsPage from './Components/Pages/MoviesPage/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/movies/:filmId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;