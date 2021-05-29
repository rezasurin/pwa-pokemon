import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { ApolloProvider } from '@apollo/client/react'
import client from './config/graphql'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
