import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { useParams } from 'react-router-dom';

function BookDetail() {
  // const id = 573;
  // TODO: Use id from route
  const id = useParams();
  console.log('BOOKDETAIL.js id', id);
  const { book, loading, error } = useBookDetail(id);
  console.log('BOOKDETAIL.js book', book);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <>
      <Book key={book.book_id} book={book} showDetail />
    </>
  );
}

export default BookDetail;
