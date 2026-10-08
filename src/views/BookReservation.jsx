import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';

const BookReservation = () => {
    const { id } = useParams();
    const { getBookById, darkMode } = useBooks();
    const [mode, setMode] = useState('compra');
    const [weeks, setWeeks] = useState(1);
    const [confirmed, setConfirmed] = useState(false);

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

    const total = mode === 'compra' ? book.buyPrice : book.rentPrice * weeks;

    return (
        <div className={`page-container ${darkMode ? 'dark' : ''}`}>
            <div className="movie-details">
                <h1>{mode === 'compra' ? 'Comprar' : 'Reservar'}: {book.title}</h1>
                <p><strong>Autor:</strong> {book.author}</p>

                <div style={{ margin: '1.5rem 0' }}>
                    <label>
                        <input
                            type="radio"
                            checked={mode === 'compra'}
                            onChange={() => { setMode('compra'); setConfirmed(false); }}
                        />{' '}
                        Compra directa ({book.buyPrice.toFixed(2)} €)
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            checked={mode === 'alquiler'}
                            onChange={() => { setMode('alquiler'); setConfirmed(false); }}
                        />{' '}
                        Alquiler ({book.rentPrice.toFixed(2)} € por semana)
                    </label>
                </div>

                {mode === 'alquiler' && (
                    <div style={{ margin: '1rem 0' }}>
                        <label htmlFor="weeks">Semanas: </label>
                        <select
                            id="weeks"
                            value={weeks}
                            onChange={(e) => { setWeeks(Number(e.target.value)); setConfirmed(false); }}
                        >
                            {[1, 2, 3, 4].map((w) => (
                                <option key={w} value={w}>{w}</option>
                            ))}
                        </select>
                    </div>
                )}

                <h3>Total: {total.toFixed(2)} €</h3>

                {!confirmed ? (
                    <button className="nav-button" onClick={() => setConfirmed(true)}>
                        Confirmar {mode === 'compra' ? 'compra' : 'reserva'}
                    </button>
                ) : (
                    <p>✅ ¡{mode === 'compra' ? 'Compra' : 'Reserva'} confirmada! Gracias por confiar en Nexus.</p>
                )}

                <div style={{ marginTop: '2rem' }}>
                    <Link to="/" className="nav-button">Volver al catálogo</Link>
                </div>
            </div>
        </div>
    );
};

export default BookReservation;