import { useEffect, useState } from 'react';
import { getBookById } from '../services/books';

export function useBookDetail({ id }) {
  const [book, setBook] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  console.log('USEBOOKDETAIL.js id', id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [id]);

  return { book, error, loading };
}
