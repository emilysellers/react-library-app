import { Link } from 'react-router-dom';
import Author from '../author/Author';
import './Book.css';

function Book({
  book: {
    book_id,
    title,
    total_pages: totalPages,
    rating,
    isbn,
    published_date: publishedDate,
    authors,
  },
  showDetail = false,
}) {
  return (
    <article className="book">
      {/* wrap h3 in link w/ conditional to only link title from BookList */}
      {!showDetail && (
        <Link to={`/books/${book_id}`}>
          <h3>{title}</h3>
        </Link>
      )}
      <address>
        {authors.map((author) => (
          <Author key={author.author_id} author={author} />
        ))}
      </address>
      {showDetail && (
        <>
          <div>
            <p>Rating: {rating}</p>
            <p>ISBN: {isbn}</p>
            <p>Published {publishedDate}</p>
            <p>{totalPages} pages</p>
          </div>
        </>
      )}
    </article>
  );
}

export default Book;
