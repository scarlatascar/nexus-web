import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CategorySelector from '../components/CategorySelector';
import Libro from '../components/Libro';
import { useBooks } from '../hooks/useBooks';

const HomePage = () => {
    const { getBooksByCategory, darkMode } = useBooks();
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const books = getBooksByCategory(category);

    return (
        <div className={`home-page ${darkMode ? 'dark' : ''}`}>
            <CategorySelector />

            {books.map((book) => (
                <Libro key={book.id} book={book} />
            ))}
        </div>
    );
};

export default HomePage;