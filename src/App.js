import { Route } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Route exact path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
