import './App.css';
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'
import MyPokemonStorage from './pages/MyPokemon'
import NavBar from './components/NavBar'
import { ApolloProvider } from '@apollo/client/react'
import client from './config/graphql'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/detail/:name">
              <PokemonDetail />
            </Route>
            <Route path="/MyPokemonLists">
              <MyPokemonStorage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
