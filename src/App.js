import { Switch, Route } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/Pages/HomePage/HomePage';
import MoviesPage from './Components/Pages/MoviesPage/MoviesPage';

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
        <Route>
          <MoviesPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
