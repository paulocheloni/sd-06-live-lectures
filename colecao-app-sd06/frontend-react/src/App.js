import './App.css';
import { Container } from 'rbx';
import ListBooks from './components/ListBooks';
import AddBook from './components/AddBook';
import ShowBook from './components/ShowBook';
import EditBook from './components/EditBook';
import { Router, Switch, Route } from "react-router-dom";

import "rbx/index.css";

import history from './services/history'


function App() {
  return (
    <Container>
      <Router history={history}>
        <h1>Livros App</h1>

        <Switch>
          <Route exact path="/" component={ListBooks} />
          <Route path="/add" component={AddBook} />
          <Route path="/book/:id/edit" component={EditBook} />
          <Route path="/book/:id" component={ShowBook} />
          
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
