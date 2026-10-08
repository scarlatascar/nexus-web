import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getBookById, darkMode } = useBooks();

    const book = getBookById(id);

    if (!book) {
        return (
            <div className={`page-container ${darkMode ? 'dark' : ''}`}>
                <div className="movie-details">
                    <h1>Libro no encontrado</h1>
                    <Link to="/" className="nav-button">Volver al catálogo</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`page-container ${darkMode ? 'dark' : ''}`}>
            <div className="movie-details">
                <button
                    onClick={() => navigate(-1)}
                    className="nav-button"
                    style={{ marginBottom: '2rem' }}
                >
                    ← Volver
                </button>

                <h1>{book.title}</h1>

                <img
                    src={book.image}
                    alt={book.title}
                    style={{ maxWidth: '200px', borderRadius: '8px' }}
                />

                <div className="movie-info-grid">
                    <div className="info-item"><strong>Autor</strong><br/>{book.author}</div>
                    <div className="info-item"><strong>Categoría</strong><br/>{book.category}</div>
                    <div className="info-item"><strong>Páginas</strong><br/>{book.pages}</div>
                    <div className="info-item"><strong>Valoración</strong><br/>⭐ {book.rating}</div>
                    <div className="info-item"><strong>Año</strong><br/>{book.year}</div>
                    <div className="info-item"><strong>Alquiler</strong><br/>{book.rentPrice.toFixed(2)} € / semana</div>
                    <div className="info-item"><strong>Compra</strong><br/>{book.buyPrice.toFixed(2)} €</div>
                </div>

                <div style={{ margin: '2rem 0' }}>
                    <h3>Sinopsis:</h3>
                    <p>{book.synopsis}</p>
                </div>

                {book.available ? (
                    <Link to={`/book/${book.id}/reserve`} className="nav-button">
                        Comprar o reservar
                    </Link>
                ) : (
                    <p>❌ Este libro no está disponible ahora mismo.</p>
                )}
            </div>
        </div>
    );
};

export default BookDetails;