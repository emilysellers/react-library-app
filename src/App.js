import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import Book from './components/book/Book.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/">
          <p className="catalogLink">
            Check out our <a href="/books">catalog</a>
          </p>
        </Route>
        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
