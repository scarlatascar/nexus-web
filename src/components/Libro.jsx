import React from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const Libro = ({ book }) => {
    const { darkMode } = useBooks();

    return (
        <div className={`movie ${darkMode ? 'dark' : ''}`}>
            <img
                src={book.image}
                alt={book.title}
                style={{ maxWidth: '150px', borderRadius: '8px' }}
            />
            <h2>{book.title}</h2>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Categoría:</strong> {book.category}</p>
            <p><strong>Año:</strong> {book.year}</p>
            <p><strong>Alquiler:</strong> {book.rentPrice.toFixed(2)} € · <strong>Compra:</strong> {book.buyPrice.toFixed(2)} €</p>
            <p>{book.available ? '✅ Disponible' : '❌ No disponible'}</p>

            <Link to={`/book/${book.id}`} className="nav-button">
                Ver más detalles
            </Link>
        </div>
    );
};

export default Libro;