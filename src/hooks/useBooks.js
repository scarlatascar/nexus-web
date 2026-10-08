import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { booksData } from '../data/booksData';

// Custom hook que utiliza el contexto global y gestiona el catálogo de libros
export const useBooks = () => {
    const { darkMode, toggleDarkMode } = useContext(GlobalContext);

    // Obtener un libro por ID
    const getBookById = (id) => {
        return booksData.find((book) => book.id === parseInt(id));
    };

    // Filtrar libros por categoría (o devolver todos)
    const getBooksByCategory = (category) => {
        if (!category || category === 'todas') return booksData;
        return booksData.filter((book) => book.category === category);
    };

    // Lista de categorías únicas
    const categories = [...new Set(booksData.map((book) => book.category))];

    return {
        darkMode,
        toggleDarkMode,
        books: booksData,
        categories,
        getBookById,
        getBooksByCategory
    };
};