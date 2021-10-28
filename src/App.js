import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

const Navigation = lazy(() =>
  import('./Components/Navigation/Navigation' /* webpackChunkName: "Navigation" */),
);
const HomePage = lazy(() =>
  import('./Components/Pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./Components/Pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const NotFound = lazy(() =>
  import('./Components/Pages/NotFound/NotFound' /* webpackChunkName: "NotFound" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Components/Pages/MoviesPage/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

function App() {
  return (
    <Suspense fallback={<h1>LOADING....</h1>}>
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
    </Suspense>
  );
}

export default App;
