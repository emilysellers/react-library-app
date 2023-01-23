import './App.css';
import { Route, Switch } from 'react-router-dom';
import BookList from './components/book/BookList';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/books" component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
